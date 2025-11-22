import React from "react";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <header className="nav">
        <div className="nav-left">
          <div className="nav-logo">CMMC</div>
          <div className="nav-title">
            Cyber Incident Awareness &amp; Training Portal
          </div>
        </div>
        <nav className="nav-links">
          <a href="#what-happened">What Happened</a>
          <a href="#impact">Impact</a>
          <a href="#protect">Protect Yourself</a>
          <a href="#faq">FAQ</a>
          <a href="#chatbot">AI Assistant</a>
        </nav>
      </header>

      <main className="main">
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Phishing &amp; RDP Encryption Incident at CMMC</h1>
            <p className="hero-subtitle">
              Learn what happened, what we’ve done to respond, and how you can
              help keep CMMC safe from future cyberattacks.
            </p>

            <div className="hero-grid">
              <div className="hero-card">
                <h3>What happened?</h3>
                <p>
                  An attacker sent a fake “$50 Amazon gift card” email,
                  collected an employee’s CMMC username and password, and used
                  those credentials to log into remote desktop and encrypt
                  shared files.
                </p>
              </div>
              <div className="hero-card">
                <h3>What it affected</h3>
                <p>
                  Several shared drives became temporarily unavailable.
                  Operations were disrupted for about 10–12 hours, but systems
                  were restored from backups and no ransom was paid.
                </p>
              </div>
              <div className="hero-card">
                <h3>How we responded</h3>
                <p>
                  We isolated affected systems, disabled the compromised
                  account, restored from immutable backups, and began rolling
                  out stronger controls such as MFA and stricter file
                  permissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2-column content + chat */}
        <section className="content-layout">
          <div className="content-left">
            {/* What happened */}
            <section id="what-happened" className="section-card">
              <h2>1. Detailed Incident Timeline</h2>
              <ol>
                <li>
                  <strong>Phishing email:</strong> Spoofed HR message promising
                  a $50 Amazon gift card; linked to a fake CMMC login page.
                </li>
                <li>
                  <strong>Credential theft:</strong> An employee entered their
                  real CMMC username and password into the fake site.
                </li>
                <li>
                  <strong>Remote access:</strong> Attacker used those
                  credentials to log into CMMC’s Remote Desktop (RDP) gateway
                  from an external IP.
                </li>
                <li>
                  <strong>File encryption:</strong> Ransomware-like tool ran in
                  the employee context, encrypting files on shared drives where
                  that account had write permissions.
                </li>
                <li>
                  <strong>Detection and response:</strong> Helpdesk tickets and
                  monitoring alerted IT; systems were isolated and restored from
                  backups.
                </li>
              </ol>
            </section>

            {/* Impact */}
            <section id="impact" className="section-card">
              <h2>2. Impact &amp; Risk</h2>
              <p>
                This incident was primarily an{" "}
                <strong>availability disruption</strong> rather than a
                confidentiality breach:
              </p>
              <ul>
                <li>
                  Shared network drives were encrypted and unavailable for
                  roughly 10–12 hours.
                </li>
                <li>
                  Staff temporarily used downtime procedures to continue
                  clinical work.
                </li>
                <li>
                  Logs reviewed so far show <strong>no evidence</strong> of data
                  exfiltration of patient records.
                </li>
              </ul>
              <p className="note">
                From a FAIR perspective, the main loss drivers were downtime
                costs and incident response effort. We are now reducing both the
                probability and impact of similar events through stronger
                controls.
              </p>
            </section>

            {/* Protect yourself */}
            <section id="protect" className="section-card">
              <h2>3. How to Protect Yourself &amp; CMMC</h2>
              <ul>
                <li>
                  Be cautious of <strong>unexpected rewards or gift cards</strong
                  >, especially those asking you to log in.
                </li>
                <li>
                  Always check the <strong>website address</strong> before
                  entering your password — make sure it is the official CMMC
                  domain.
                </li>
                <li>
                  Never reuse your CMMC password on external websites.
                </li>
                <li>
                  Use the organization’s <strong>“Report Phishing”</strong>{" "}
                  button or contact the helpdesk when in doubt.
                </li>
                <li>
                  If you think you may have entered your credentials on a fake
                  site, call IT immediately so they can reset your account and
                  verify activity.
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="section-card">
              <h2>4. Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4>Was patient data stolen?</h4>
                <p>
                  We have not found evidence of data being copied out of CMMC
                  systems. The attacker primarily encrypted files rather than
                  exfiltrating them.
                </p>
              </div>
              <div className="faq-item">
                <h4>
                  How could the attacker encrypt files without administrator
                  rights?
                </h4>
                <p>
                  If a user account can save or modify a file, malware running
                  as that user can usually encrypt it. That is why we are
                  reviewing and tightening shared-folder permissions.
                </p>
              </div>
              <div className="faq-item">
                <h4>What has changed since the incident?</h4>
                <p>
                  We are enabling multi-factor authentication for remote access,
                  improving email filtering, deploying stricter application
                  controls, and expanding security awareness training.
                </p>
              </div>
            </section>
          </div>

          {/* Chatbot column */}
          <aside id="chatbot" className="content-right">
            <div className="chat-card">
              <h2>5. Ask the AI Cyber-Safety Assistant</h2>
              <p className="chat-intro">
                Ask questions about the incident, phishing, or everyday
                cybersecurity. The assistant is for{" "}
                <strong>training and awareness</strong> only, and does not have
                access to internal CMMC systems.
              </p>
              <Chatbot />
            </div>
          </aside>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} CMMC &amp; VectorShield Cybersecurity
        Consulting – Internal Awareness Only
      </footer>
    </div>
  );
}

export default App;
