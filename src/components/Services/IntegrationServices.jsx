import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntegrationServices.css";

let heroImage;
try {
  heroImage = require("../../assests/images/inter.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "🔌",
    title: "API Integration & Management",
    desc: "Build and manage secure APIs for seamless system communication.",
  },
  {
    icon: "🚌",
    title: "Enterprise Service Bus (ESB)",
    desc: "Centralized integration architecture for complex enterprise environments.",
  },
  {
    icon: "🔗",
    title: "Third-Party Application Integration",
    desc: "Connect CRM, ERP, cloud platforms, and business applications.",
  },
  {
    icon: "🔄",
    title: "Data Synchronization",
    desc: "Ensure accurate and consistent data across multiple systems.",
  },
];

const whyItems = [
  {
    title: "Integration Specialists",
    desc: "Deep expertise in connecting complex enterprise systems.",
  },
  {
    title: "Real-Time Processing",
    desc: "Enable instant data processing and event-driven architectures.",
  },
  {
    title: "Secure & Scalable",
    desc: "Enterprise-grade security with scalable architecture.",
  },
  {
    title: "Ongoing Monitoring",
    desc: "Continuous monitoring and optimization of integrations.",
  },
];

const stats = [
  { number: "200+", label: "Integrations Built" },
  { number: "99%",  label: "Uptime Achieved" },
  { number: "40+",  label: "Integration Experts" },
  { number: "12+",  label: "Years Experience" },
];

export default function IntegrationServices() {
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
            Integration Solutions
          </div>
          <h1 className="csp-hero-title">
            Connect Everything, <span className="csp-accent">Effortlessly</span>
            <span className="csp-cursor" />
          </h1>
          <p className="csp-hero-subtitle">
            Break down data silos and enable seamless communication between your applications.
          </p>
          <p className="csp-hero-desc">
            Our integration services help organizations connect disparate systems and automate workflows across their technology ecosystem for improved efficiency.
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
              <h2 className="csp-section-title">Integration Services</h2>
              <p className="csp-section-desc">
                We ensure secure, reliable, and real-time data exchange to improve efficiency and business agility across your entire technology stack.
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