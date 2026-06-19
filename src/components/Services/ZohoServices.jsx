import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ZohoServices.css";

import heroImage from "../../assests/images/zoho-ser.jpg";
const deliverItems = [
  {
    icon: "📊",
    title: "Zoho CRM Implementation",
    desc: "Manage leads, customers, and sales pipelines with a fully customized CRM solution.",
  },
  {
    icon: "💰",
    title: "Zoho Books & Finance Setup",
    desc: "Simplify accounting, invoicing, expense tracking, and financial reporting.",
  },
  {
    icon: "⚙️",
    title: "Custom Workflow Automation",
    desc: "Automate repetitive tasks and business processes to improve productivity.",
  },
  {
    icon: "🔗",
    title: "Zoho Integration Services",
    desc: "Connect Zoho applications with third-party platforms and business systems.",
  },
];

const whyItems = [
  {
    title: "Certified Zoho Experts",
    desc: "Experienced consultants delivering tailored Zoho solutions.",
  },
  {
    title: "Business-Focused Implementation",
    desc: "Solutions designed to align with your business goals and processes.",
  },
  {
    title: "Seamless System Integration",
    desc: "Connect departments and applications for better collaboration.",
  },
  {
    title: "Continuous Support",
    desc: "Ongoing maintenance, optimization, and user training to maximize ROI.",
  },
];

const stats = [
  { number: "100+", label: "Zoho Projects" },
  { number: "95%",  label: "Client Satisfaction" },
  { number: "30+",  label: "Certified Experts" },
  { number: "8+",   label: "Years Experience" },
];

export default function ZohoServices() {
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
            Zoho Solutions
          </div>
          <h1 className="csp-hero-title">
            Transform Your Business with <span className="csp-accent">Zoho</span>
            <span className="csp-cursor" />
          </h1>
          <p className="csp-hero-subtitle">
            Streamline operations, improve productivity, and manage your business efficiently.
          </p>
          <p className="csp-hero-desc">
            We help businesses implement, customize, and optimize the Zoho ecosystem to improve efficiency and collaboration across all departments.
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
              <h2 className="csp-section-title">Zoho Services</h2>
              <p className="csp-section-desc">
                From customer relationship management to finance and analytics, our experts ensure seamless integration across all Zoho applications for a unified business experience.
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