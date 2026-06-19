import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MaintenanceServices.css";

let heroImage;
try {
  heroImage = require("../../assests/images/main.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "📡",
    title: "24/7 Application Monitoring",
    desc: "Continuous monitoring to identify and resolve issues proactively.",
  },
  {
    icon: "🔧",
    title: "Bug Fixes & Patch Management",
    desc: "Quick resolution of issues and deployment of critical updates.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Improve application speed, scalability, and reliability.",
  },
  {
    icon: "🛡️",
    title: "Security Updates & Audits",
    desc: "Protect applications from vulnerabilities and cyber threats.",
  },
];

const whyItems = [
  {
    title: "Proactive Support",
    desc: "Identify and resolve issues before they impact your business.",
  },
  {
    title: "Rapid Response",
    desc: "Quick resolution times with dedicated support teams.",
  },
  {
    title: "Continuous Improvement",
    desc: "Regular optimizations to keep applications performing at peak.",
  },
  {
    title: "Cost Effective",
    desc: "Predictable maintenance costs with flexible engagement models.",
  },
];

const stats = [
  { number: "300+", label: "Apps Supported" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "24/7",  label: "Support Available" },
  { number: "15+",   label: "Years Experience" },
];

export default function MaintenanceServices() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="csp-root">
      <section className="csp-hero">
        <div className="csp-hero-background" style={{
          backgroundImage: heroImage ? `url(${heroImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          {!heroImage && <div className="csp-hero-fallback-bg" />}
        </div>
        <div className="csp-hero-overlay" />
        <div className="csp-hero-grid" />
        <div className="csp-hero-orb" />
        <div className="csp-hero-content" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div className="csp-hero-eyebrow">
            <span className="csp-hero-eyebrow-dot" />
            Application Support
          </div>
          <h1 className="csp-hero-title">
            Keep Your Applications Running <span className="csp-accent">Smoothly</span>
            <span className="csp-cursor" />
          </h1>
          <p className="csp-hero-subtitle">
            Ensure optimal performance, security, and reliability with comprehensive maintenance.
          </p>
          <p className="csp-hero-desc">
            Our maintenance services help businesses keep applications secure, stable, and up-to-date with proactive monitoring and rapid issue resolution.
          </p>
          <button className="csp-btn-primary" onClick={() => navigate('/contact')}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      <section className="csp-section csp-about">
        <div className="csp-section-inner">
          <div className="csp-about-layout">
            <div>
              <p className="csp-section-label">About the Service</p>
              <h2 className="csp-section-title">Maintenance Services</h2>
              <p className="csp-section-desc">
                We proactively monitor systems, resolve issues, and optimize performance to minimize downtime and maximize productivity for your business.
              </p>
            </div>
            <div className="csp-about-visual">
              {stats.map((s) => (
                <div className="csp-stat-card" key={s.label}>
                  <div className="csp-stat-number">{s.number}</div>
                  <div className="csp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="csp-section csp-deliver">
        <div className="csp-section-inner">
          <p className="csp-section-label">What We Deliver</p>
          <h2 className="csp-section-title">Key Services</h2>
          <div className="csp-deliver-grid">
            {deliverItems.map((item) => (
              <div className="csp-deliver-card" key={item.title}>
                <div className="csp-deliver-icon">{item.icon}</div>
                <div className="csp-deliver-title">{item.title}</div>
                <p className="csp-deliver-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csp-section csp-why">
        <div className="csp-section-inner">
          <p className="csp-section-label">Why Choose Us</p>
          <h2 className="csp-section-title">Built on Reliability & Results</h2>
          <div className="csp-why-grid">
            {whyItems.map((item) => (
              <div className="csp-why-card" key={item.title}>
                <div className="csp-why-bar" />
                <div className="csp-why-title">{item.title}</div>
                <p className="csp-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}