import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Platformintegrationpage.css";

// Use your actual image file
let heroImage;
try {
  heroImage = require("../../assests/images/platfrom.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "🔌",
    title: "API Development",
    desc: "Build robust APIs for seamless system communication.",
  },
  {
    icon: "🔗",
    title: "Third-Party Integrations",
    desc: "Connect your systems with external applications and services.",
  },
  {
    icon: "⚙️",
    title: "Salesforce Customization",
    desc: "Tailor Salesforce to fit your unique business requirements.",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    desc: "Automate business processes to improve efficiency.",
  },
];

const whyItems = [
  {
    title: "Seamless Integrations",
    desc: "Connect systems without disrupting existing workflows.",
  },
  {
    title: "Scalable Architecture",
    desc: "Build integrations that grow with your business.",
  },
  {
    title: "Secure Data Exchange",
    desc: "Ensure data integrity and security across all connections.",
  },
  {
    title: "Expert Development Team",
    desc: "Experienced professionals delivering reliable solutions.",
  },
];

const stats = [
  { number: "300+", label: "Integrations" },
  { number: "99%",  label: "Success Rate" },
  { number: "12+",  label: "Years Experience" },
  { number: "45+",  label: "Integration Experts" },
];

export default function Platformintegrationpage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="pip-root">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-background" style={{
          backgroundImage: heroImage ? `url(${heroImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          {!heroImage && <div className="hero-fallback-bg" />}
        </div>
        
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-orb" />
        
        <div
          className="hero-content"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Integration Solutions
          </div>
          <h1 className="hero-title">
            Platform & <span className="accent">Integration</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Connecting Systems for Seamless Business Operations
          </p>
          <p className="hero-desc">
            Integrate applications, automate workflows, and ensure smooth data flow across your entire technology ecosystem.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <p className="section-label">About the Service</p>
              <h2 className="section-title">About Platform & Integration Services</h2>
              <p className="section-desc">
                We help organizations connect platforms, applications, and business systems to improve efficiency, reduce manual work, and enable real-time data exchange.
              </p>
            </div>
            <div className="about-visual">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ── */}
      <section className="section deliver">
        <div className="section-inner">
          <p className="section-label">What We Deliver</p>
          <h2 className="section-title">Comprehensive Integration Solutions</h2>
          <div className="deliver-grid">
            {deliverItems.map((item) => (
              <div className="deliver-card" key={item.title}>
                <div className="deliver-icon">{item.icon}</div>
                <div className="deliver-title">{item.title}</div>
                <p className="deliver-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section why">
        <div className="section-inner">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Trusted for Integration Excellence</h2>
          <div className="why-grid">
            {whyItems.map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-bar" />
                <div className="why-title">{item.title}</div>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
}