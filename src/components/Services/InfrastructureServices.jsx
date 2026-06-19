import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./InfrastructureServices.css";

let heroImage;
try {
  heroImage = require("../../assests/images/network.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "☁️",
    title: "Cloud Architecture & Migration",
    desc: "Design and deploy scalable cloud infrastructure.",
  },
  {
    icon: "🌐",
    title: "Network Design & Optimization",
    desc: "Build high-performance networks for reliability and efficiency.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity Assessment",
    desc: "Identify vulnerabilities and strengthen security posture.",
  },
  {
    icon: "📋",
    title: "Disaster Recovery Planning",
    desc: "Ensure business continuity with backup and recovery strategies.",
  },
];

const whyItems = [
  {
    title: "Security First",
    desc: "Protect your digital assets with enterprise-grade security.",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Build infrastructure that grows with your business.",
  },
  {
    title: "Compliance Ready",
    desc: "Meet regulatory requirements and reduce operational risks.",
  },
  {
    title: "24/7 Monitoring",
    desc: "Continuous infrastructure monitoring and rapid response.",
  },
];

const stats = [
  { number: "180+", label: "Projects Delivered" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "45+",  label: "Cloud Experts" },
  { number: "15+",  label: "Years Experience" },
];

export default function InfrastructureServices() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="csp-root">
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
        <div className="hero-content" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Infrastructure & Security
          </div>
          <h1 className="hero-title">
            Secure, Scalable Infrastructure for <span className="accent">Modern Businesses</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Protect your digital assets while building a reliable technology foundation.
          </p>
          <p className="hero-desc">
            We design, implement, and manage secure infrastructure solutions that support business growth with cloud environments, networking, and cybersecurity.
          </p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      <section className="section about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <p className="section-label">About the Service</p>
              <h2 className="section-title">Infrastructure & Security</h2>
              <p className="section-desc">
                From cloud environments and networking to cybersecurity and compliance, we ensure your systems remain resilient and protected.
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

      <section className="section deliver">
        <div className="section-inner">
          <p className="section-label">What We Deliver</p>
          <h2 className="section-title">Key Services</h2>
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

      <section className="section why">
        <div className="section-inner">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Built on Reliability & Results</h2>
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