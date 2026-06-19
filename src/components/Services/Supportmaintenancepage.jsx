import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Supportmaintenancepage.css";

// Only use main.jpg - remove the second try/catch
let heroImage;
try {
  heroImage = require("../../assests/images/main.jpg");
} catch (e) {
  console.warn("Image not found, using fallback");
  heroImage = "";
}

const deliverItems = [
  {
    icon: "📡",
    title: "System Monitoring",
    desc: "Continuous monitoring to ensure system health and performance.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Improve speed, efficiency, and reliability of your systems.",
  },
  {
    icon: "🔒",
    title: "Security Updates",
    desc: "Regular patches and updates to protect against threats.",
  },
  {
    icon: "🛠️",
    title: "Technical Support",
    desc: "Expert assistance for all your technical challenges.",
  },
];

const whyItems = [
  {
    title: "24/7 Support",
    desc: "Round-the-clock assistance whenever you need it.",
  },
  {
    title: "Proactive Maintenance",
    desc: "Prevent issues before they impact your business.",
  },
  {
    title: "Faster Issue Resolution",
    desc: "Quick response and efficient problem-solving.",
  },
  {
    title: "Reliable Service Delivery",
    desc: "Consistent performance you can count on.",
  },
];

const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "24/7",  label: "Support" },
  { number: "15+",   label: "Years Experience" },
  { number: "400+",  label: "Systems Supported" },
];

export default function Supportmaintenancepage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="smp-root">

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
            Support Services
          </div>
          <h1 className="hero-title">
            Support & <span className="accent">Maintenance</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Keeping Your Systems Secure, Stable, and Optimized
          </p>
          <p className="hero-desc">
            Ensure business continuity with proactive support, ongoing maintenance, and performance optimization services.
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
              <h2 className="section-title">About Support & Maintenance</h2>
              <p className="section-desc">
                Our support and maintenance services help businesses maintain application performance, security, and reliability while minimizing downtime and operational risks.
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
          <h2 className="section-title">Comprehensive Support Solutions</h2>
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
          <h2 className="section-title">Trusted for Reliable Support</h2>
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