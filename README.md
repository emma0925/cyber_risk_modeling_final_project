# CMMC Cyber Risk Modeling – Training & Simulation Portal

This repository contains the final project for the **Cyber Risk Modeling** course.  
It includes:

1. A **security awareness website** for the fictional healthcare provider **CMMC**  
2. An embedded **AI security assistant** powered by OpenAI  
3. A **phishing simulation website** demonstrating gift-card credential harvesting  
4. Supporting **Python data analysis scripts** for modeling healthcare ransomware risk

> ⚠️ **Educational Use Only**  
> All components in this repository are for academic training and simulation.  
> Do **not** use against real users, systems, or organizations.
>
> 
---

## 🌐 1. CMMC Incident Training Portal (React)

Located in `cmmc-incident-site/`, this web app provides:

- A walkthrough of the **CMMC phishing-led ransomware incident**
- Explanations of **impact, mitigations, and risk modeling**
- An integrated **AI Cyber-Safety Assistant** (via `/api/chat`)
- Visual explanations and educational prompts for staff

The AI assistant uses a scenario-specific system prompt to stay focused on practical cybersecurity guidance.

---

## 🤖 2. AI Security Assistant Backend (Node/Express)

`server.js` exposes two key routes:

### `POST /api/chat`
- Accepts a list of OpenAI-style `messages`
- Injects a system message describing the CMMC incident
- Calls OpenAI’s `gpt-4.1-mini` (or specified model)
- Returns `{ reply: "<assistant_response>" }`

### `POST /api/login`
- Integrated into the phishing simulation page  
- Records `username` and `password` into `logs.txt`  
- Returns a fake gift-card code for demonstration  
- Shows how phishing credential capture works internally

> Requires `OPENAI_API_KEY` to be set in environment variables.

---

## 🎭 3. Phishing Simulation Website

A standalone HTML phishing example that:

- Mimics a **$50 CMMC gift card** lure  
- Prompts users to “log in”  
- Sends credentials to `/api/login`  
- Logs them for training review

This demonstrates credential harvesting and how easily staff can be deceived by realistic phishing pages.

---

## 📊 4. Data & Risk Modeling (Python)

The `data_processing/` directory contains scripts to:

- Load healthcare ransomware datasets  
- Filter events, analyze attack trends  
- Generate visualizations such as:
  - Financial loss vs. resolution time (boxplots)
  - Number of incidents by year
  - Attack pattern distributions

These support FAIR-style cyber risk modeling and were used in the project presentation.

---

## 🚀 Getting Started

### 1. Clone

```bash
git clone https://github.com/<your-username>/cyber_risk_modeling_final_project.git
cd cyber_risk_modeling_final_project
