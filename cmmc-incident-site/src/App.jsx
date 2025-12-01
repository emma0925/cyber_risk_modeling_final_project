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
      <a href="#critical-assets">Critical Assets</a>
      <a href="#impact">Impact</a>
      <a href="#risk-roi">Risk &amp; ROI</a> {/* NEW */}
      <a href="#protect">Protect Yourself</a>
      <a href="#faq">FAQ</a>
      <a href="#chatbot">AI Assistant</a>
      <a
        href="/cyber_risk_modeling_final_project/cmmc-giftcard.html"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
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
          </div>
        </section>


        {/* Critical Assets – now detailed / FIPS focus */}
        <section id="critical-assets" className="section-card">
          <h2>1. Critical Assets at CMMC</h2>
            <div className="hero-grid">
              <div className="hero-card">
                <h3>💿 EHR System</h3>
                <p>
                  Central nervous system for all patient data and a prime target
                  for double-extortion ransomware.
                </p>
                <ul>
                  <li>
                    <strong>Records:</strong> 2.7B
                  </li>
                  <li>
                    <strong>Daily Transactions:</strong> 43M
                  </li>
                  <li>
                    <strong>Downtime Cost:</strong> $7,900/min
                  </li>
                </ul>
              </div>

              <div className="hero-card">
                <h3>🗂️ Shared Services</h3>
                <p>
                  Active Directory, DNS, and other identity backbone services.
                  Failure here means an organization-wide blackout.
                </p>
                <ul>
                  <li>
                    <strong>Domain Controllers:</strong> ~120 DCs
                  </li>
                  <li>
                    <strong>File Shares:</strong> 2–3 PB
                  </li>
                  <li>
                    <strong>Impact:</strong> Total blackout
                  </li>
                </ul>
              </div>

              <div className="hero-card">
                <h3>🩺 Medical IoT</h3>
                <p>
                  Connected monitoring &amp; imaging devices with legacy
                  segments and weaker controls.
                </p>
                <ul>
                  <li>
                    <strong>Total Devices:</strong> 490k+
                  </li>
                  <li>
                    <strong>Legacy / Weak:</strong> ≈60k (15%)
                  </li>
                  <li>
                    <strong>Risk:</strong> Clinical freeze
                  </li>
                </ul>
              </div>

              <div className="hero-card">
                <h3>💵 Billing &amp; Revenue</h3>
                <p>
                  Financial engine of CMMC. Disruption triggers major cash-flow
                  issues even when care continues.
                </p>
                <ul>
                  <li>
                    <strong>Annual Revenue:</strong> $20–27B
                  </li>
                  <li>
                    <strong>Daily Flow:</strong> $55–75M
                  </li>
                  <li>
                    <strong>Members:</strong> 4.5M
                  </li>
                </ul>
              </div>
            </div>
          <p>
            Some systems are more critical than others. If they fail, the
            entire organization feels it. The incident mainly hit shared
            file services, but we map all core assets to understand{" "}
            <strong>where the real risk lives</strong>.
          </p>

          <h3 className="critical-assets-subtitle">
            FIPS-199 Impact Categorization
          </h3>
          <p>
            Using the FIPS-199 standard, we rate each asset on{" "}
            <strong>Confidentiality, Integrity, and Availability</strong> to
            determine its overall impact level and where to prioritize
            controls.
          </p>

          <div className="critical-assets-table-wrapper">
            <table className="critical-assets-table">
              <thead>
                <tr>
                  <th>Critical Asset</th>
                  <th>Confidentiality</th>
                  <th>Integrity</th>
                  <th>Availability</th>
                  <th>Overall Category</th>
                  <th>Analysis Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Shared Services (AD / DNS / Core)</td>
                  <td>Low</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                  <td>
                    <strong>Existential Risk.</strong> Failure results in an
                    organization-wide blackout—no logins, no EHR access,
                    total operational freeze.
                  </td>
                </tr>
                <tr>
                  <td>EHR System</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                  <td>
                    <strong>Patient Safety.</strong> Unavailability delays
                    life-saving decisions; leakage compromises privacy
                    (HIPAA).
                  </td>
                </tr>
                <tr>
                  <td>Billing Cycle</td>
                  <td>High</td>
                  <td>High</td>
                  <td>Moderate</td>
                  <td>High</td>
                  <td>
                    <strong>Financial Integrity.</strong> Manual workarounds
                    can cover short outages, but data corruption or leakage
                    causes unrecoverable loss.
                  </td>
                </tr>
                <tr>
                  <td>Medical IoT</td>
                  <td>Low</td>
                  <td>High</td>
                  <td>High</td>
                  <td>High</td>
                  <td>
                    <strong>Life Safety.</strong> Compromised integrity
                    (e.g., dosage) or availability (monitoring) directly
                    threatens patient lives.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

                    {/* NIST 800-53 Controls */}
            <section id="controls" className="section-card">
              <h2>2. Selected NIST 800-53 Controls</h2>
              <p>
                These security controls from <strong>NIST SP 800-53</strong> map
                directly to how CMMC prevents, detects, and responds to incidents
                like this one.
              </p>

              <div className="controls-grid">
                {/* Row 1 */}
                <div className="control-card">
                  <div className="control-tag">
                    <span>💾</span>
                    <span className="control-code">CP-9</span>
                  </div>
                  <h3>System Backups</h3>
                  <p>
                    Immutable, offline backups. Critical for recovering systems
                    without paying ransom.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>🧱</span>
                    <span className="control-code">SC-7</span>
                  </div>
                  <h3>Boundary Protection</h3>
                  <p>
                    Network segmentation to prevent lateral movement from IoT and
                    workstations to core servers.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>🔑</span>
                    <span className="control-code">IA-2</span>
                  </div>
                  <h3>Identification &amp; Auth</h3>
                  <p>
                    Strong authentication (e.g., MFA) for privileged and remote
                    access to stop credential theft.
                  </p>
                </div>

                {/* Row 2 */}
                <div className="control-card">
                  <div className="control-tag">
                    <span>🛡️</span>
                    <span className="control-code">IR-2 / IR-3</span>
                  </div>
                  <h3>Incident Response</h3>
                  <p>
                    Documented plans and tabletop exercises reduce confusion and
                    speed up decision-making during attacks.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>👁️</span>
                    <span className="control-code">SI-4</span>
                  </div>
                  <h3>System Monitoring</h3>
                  <p>
                    Security monitoring and alerting to detect suspicious activity
                    before or during encryption.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>🧩</span>
                    <span className="control-code">CM-2 / CM-3</span>
                  </div>
                  <h3>Config Management</h3>
                  <p>
                    Baselines and patching close known vulnerabilities and reduce
                    attacker footholds.
                  </p>
                </div>

                {/* Row 3 */}
                <div className="control-card">
                  <div className="control-tag">
                    <span>🌐</span>
                    <span className="control-code">SA-9</span>
                  </div>
                  <h3>External Services</h3>
                  <p>
                    Vendor access restrictions and contracts to limit supply-chain
                    and third-party risks.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>🎓</span>
                    <span className="control-code">AT-2</span>
                  </div>
                  <h3>Awareness Training</h3>
                  <p>
                    Anti-phishing and cyber awareness training to reduce the
                    success of social-engineering attacks.
                  </p>
                </div>

                <div className="control-card">
                  <div className="control-tag">
                    <span>👤</span>
                    <span className="control-code">AC-6</span>
                  </div>
                  <h3>Least Privilege</h3>
                  <p>
                    Limits user permissions to reduce the blast radius if an
                    account is compromised.
                  </p>
                </div>
              </div>
            </section>

        {/* 2-column content + chat */}
        <section className="content-layout">
          <div className="content-left">
            {/* What happened */}
            {/* <section id="what-happened" className="section-card">
              <h2>2. Detailed Incident Timeline</h2>
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
            </section> */}

            {/* Impact */}
            <section id="impact" className="section-card">
              <h2>3. Impact &amp; Risk</h2>
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

                        {/* Risk Quantification & ROI */}
            <section id="risk-roi" className="section-card">
              <h2>4. Risk Quantification &amp; ROI</h2>
              <p>
                Using FAIR-style analysis and Monte Carlo simulation, we can
                quantify how security controls reduce both expected and
                worst-case ransomware losses.
              </p>

              {/* Equation strip */}
              <div className="risk-strip">
                <div className="risk-strip-item">
                  <div className="risk-strip-label">
                    LOSS EVENT FREQ (LEF)
                  </div>
                  <div className="risk-strip-text">
                    Reduced by <span>Segmentation &amp; MFA</span>
                  </div>
                </div>

                <div className="risk-strip-x">×</div>

                <div className="risk-strip-item">
                  <div className="risk-strip-label">
                    LOSS MAGNITUDE (LM)
                  </div>
                  <div className="risk-strip-text">
                    Reduced ~30% by <span>Backups &amp; IR</span>
                  </div>
                </div>

                <div className="risk-strip-x">=</div>

                <div className="risk-strip-item risk-strip-monte">
                  <div className="risk-strip-label">Monte Carlo</div>
                  <div className="risk-strip-text">10,000 iterations</div>
                </div>
              </div>

              {/* Metrics + chart layout */}
              <div className="risk-layout">
                {/* Left: metrics */}
                <div className="risk-metrics">
                  <div className="risk-metric-card">
                    <div className="risk-metric-bar risk-metric-bar-green" />
                    <div className="risk-metric-body">
                      <div className="risk-metric-label">
                        Expected Annual Loss
                      </div>
                      <div className="risk-metric-values">
                        <span className="risk-value-old">$357M</span>
                        <span className="risk-arrow">→</span>
                        <span className="risk-value-new">$174M</span>
                      </div>
                    </div>
                  </div>

                  <div className="risk-metric-card">
                    <div className="risk-metric-bar risk-metric-bar-green" />
                    <div className="risk-metric-body">
                      <div className="risk-metric-label">
                        95th Percentile Loss
                      </div>
                      <div className="risk-metric-values">
                        <span className="risk-value-old">$627M</span>
                        <span className="risk-arrow">→</span>
                        <span className="risk-value-new">$330M</span>
                      </div>
                    </div>
                  </div>

                  <div className="risk-metric-card">
                    <div className="risk-metric-bar risk-metric-bar-red" />
                    <div className="risk-metric-body">
                      <div className="risk-metric-label">
                        Loss &lt; $300M Tolerance
                      </div>
                      <div className="risk-metric-values">
                        <span className="risk-value-old risk-value-old-red">
                          38%
                        </span>
                        <span className="risk-arrow">→</span>
                        <span className="risk-value-new risk-value-new-green">
                          91.5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: chart */}
                <div className="risk-chart">
                  <img
                    src="public/risk-roi-histogram.png"
                    alt="Ransomware annual loss before vs after controls"
                  />
                  <p className="risk-chart-caption">
                    Monte Carlo simulation of annual ransomware loss (non-zero
                    years), showing the shift from “before” to “after” controls.
                  </p>
                </div>
              </div>
            </section>

            <section id="ransom-decision" className="section-card">
              <h2>5. Ransom Payment vs. System Restoration</h2>
              <p>
                During a ransomware event, organizations often face a difficult
                decision: <strong>pay the ransom</strong> or{" "}
                <strong>restore internally from backups</strong>. Below is how
                CMMC&rsquo;s security team evaluates these options.
              </p>

              <div className="ransom-layout">
                {/* Left: advice card */}
                <div className="ransom-advice-card">
                  <div className="ransom-avatar" />
                  <h3>Advice from Security Analyst Specialist: System Restoration</h3>
                  <p className="ransom-subtitle"></p>
                  <p className="ransom-note">
                    Industry guidance and regulations strongly favor{" "}
                    <strong>restoring from backups</strong> when feasible.
                  </p>
                </div>

                {/* Middle: Paying ransom */}
                <div className="ransom-option-card">
                  <div className="ransom-columns">
                    <div>
                      <h4>Paying Ransom Risks</h4>
                      <ul>
                        <li>~15% of keys fail or only partially restore data.</li>
                        <li>Decryption can still take several days.</li>
                        <li>Legal / OFAC exposure depending on the recipient.</li>
                        <li>Organizations that pay can become repeat targets.</li>
                        <li>Damages stakeholder trust and reputation.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Restore from backup */}
                <div className="ransom-option-card">
                  <h4>System Restoration from Backup</h4>
                  <ul>
                    <li>
                      Aligns with HIPAA, CMS, and state regulatory requirements.
                    </li>
                    <li>Remains fully under organizational control.</li>
                    <li>
                      Avoids malicious artifacts left behind by attacker tools.
                    </li>
                    <li>
                      Reinforces investment in resilience instead of criminals.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom: Industry stats */}
              <div className="ransom-stats-card">
                <div className="ransom-stats-text">
                  <h3>Industry Statistics</h3>
                  <p>
                    Roughly half of organizations still <strong>pay</strong> at
                    least some of the time, even though regulators and insurers
                    increasingly favor <strong>restoration from backup</strong>.
                  </p>
                  <div className="ransom-legend">
                  </div>
                </div>
                  <img
                    src="public/ransom-stats-pie.png"
                    alt="Ransomware annual loss before vs after controls"
                    className="risk-chart-img"
                  />
                  <p className="risk-chart-caption">
                    Monte Carlo simulation of annual ransomware loss, showing the shift from
                    “before” to “after” controls.
                  </p>
              </div>
            </section>


            {/* Protect yourself */}
            <section id="protect" className="section-card">
              <h2>4. How to Protect Yourself &amp; CMMC</h2>
              <ul>
                <li>
                  Be cautious of{" "}
                  <strong>unexpected rewards or gift cards</strong>, especially
                  those asking you to log in.
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
                  Use the organization’s{" "}
                  <strong>“Report Phishing”</strong> button or contact the
                  helpdesk when in doubt.
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
              <h2>5. Frequently Asked Questions</h2>
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
              <h2>6. Ask the AI Cyber-Safety Assistant</h2>
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
