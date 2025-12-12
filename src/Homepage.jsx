import React from 'react';
import './Homepage.css'; // Import the CSS file
import heroVideo from './assets/hero-video.mp4';
/*import logoImg from './assets/logo.png';*/
import logoImg from './assets/logo.jpeg';



export default function Homepage() {
  return (
    <div className="homepage">
      {/* Top bar */}
      <header className="topbar">
        <div className="logo-section">
          <div className="logo">
            <img src={logoImg} alt="CyberCup.AI Logo" width="100" height="90" />

          </div>
          <div>
            <div className="site-title">CyberCup.AI</div>
            <div className="site-subtitle">ODU • AI-powered cybersecurity competitions</div>
          </div>
        </div>
        <nav className="nav-buttons">
          <button>About</button>
          <button>Challenges</button>
          <button>Leaderboards</button>
          <button className="signin">Sign In</button>
          <button className="get-started">Get Started</button>
        </nav>
      </header>

      {/* Hero */}
      <main className="hero">
        <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
    />

        <section className="hero-left">
          <h1>Compete. Learn. Level up — with CYBERCUP.AI</h1>
          <p>Cyber AI Competition Unified Platform (CUP) empowers the next
            generation of CyberAI professionals through innovative competitions
            and hands-on learning experiences.</p>

          <div className="hero-buttons">
            <a href="#" className="primary-btn">Start a Challenge</a>
            <a href="#features" className="secondary-btn">See Features</a>
          </div>

          <div className="stats">
            <div>
              <div>Active</div>
              <div>128</div>
              <div>Live players</div>
            </div>
            <div>
              <div>Challenges</div>
              <div>42</div>
              <div>AI variations</div>
            </div>
            <div>
              <div>Teams</div>
              <div>24</div>
              <div>Active battles</div>
            </div>
          </div>
        </section>
      </main>

      {/* Features */}
      <section id="features" className="features">
        <h2>What makes CyberCup.AI different</h2>
        <p>Cyber AI Competition Unified Platform (CyberCup.AI) is an innovative platform designed and developed at the School of
          Cybersecurity, Old Dominion University (ODU). CyberCup serves as a unified hub for hosting a diverse range of competitions at
          the intersection of Cybersecurity and Artificial Intelligence (AI). In this year's competitions, we have challenges related to
          security of Large language models (LLM), Model Context Protocol (MCP) and use of AI in Capture the Flag (CTF) competitions.
          Participants can engage in a variety of challenges including LLM CTF, AI-Assisted CTF, LLM Backdoor attacks, and MCP security.</p>

        <div className="feature-cards">
          <FeatureCard title="Adaptive AI Challenges" desc="Problems morph in real time using AI, adapting difficulty to your team." />
          <FeatureCard title="Gamified Learning" desc="Progression, badges, and ODU-branded rewards motivate learning." />
          <FeatureCard title="Live Leaderboards" desc="See rankings, heatmaps of hacking traffic, and match replays." />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} CyberCup.AI • Old Dominion University</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({title, desc}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">★</div>
      <div>
        <div className="feature-title">{title}</div>
        <div className="feature-desc">{desc}</div>
      </div>
    </div>
  );
}

