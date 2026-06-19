import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Salescloudpage.css";
import heroImage from "../../assests/images/sales cloud.jpg";

const deliverItems = [
  {
    icon: "🎯",
    title: "Lead Management",
    desc: "Capture, track, and nurture leads efficiently throughout the sales cycle.",
  },
  {
    icon: "📊",
    title: "Opportunity Tracking",
    desc: "Monitor deals, sales activities, and customer interactions in one place.",
  },
  {
    icon: "⚡",
    title: "Sales Automation",
    desc: "Automate repetitive tasks and streamline sales processes.",
  },
  {
    icon: "📈",
    title: "Sales Reporting & Dashboards",
    desc: "Gain actionable insights with real-time analytics and customized reports.",
  },
];

const whyItems = [
  {
    title: "Salesforce Expertise",
    desc: "Certified professionals with extensive Salesforce implementation experience.",
  },
  {
    title: "Customized Solutions",
    desc: "Sales Cloud tailored to your business processes and objectives.",
  },
  {
    title: "Faster User Adoption",
    desc: "User-friendly configurations and training for successful implementation.",
  },
  {
    title: "Ongoing Support",
    desc: "Continuous optimization and support to maximize ROI.",
  },
];

const stats = [
  { number: "150+", label: "Implementations" },
  { number: "98%",  label: "Client Satisfaction" },
  { number: "8+",   label: "Years Salesforce" },
  { number: "40+",  label: "Certified Experts" },
];

export default function Salescloudpage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="scp-root">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Sales Cloud" 
            className="hero-bg-img"
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              e.target.style.display = 'none';
            }}
          />
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
            Salesforce CRM
          </div>
          <h1 className="hero-title">
            Sales Cloud <span className="accent">Implementation</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Transform Your Sales Process with Intelligent CRM Solutions
          </p>
          <p className="hero-desc">
            Streamline sales operations, improve lead management, and increase revenue with a customized Sales Cloud implementation. We help businesses automate processes and empower sales teams to perform at their best.
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
              <h2 className="section-title">About Sales Cloud Implementation</h2>
              <p className="section-desc">
                Our Sales Cloud implementation services help organizations manage leads, track opportunities, automate workflows, and gain real-time visibility into sales performance. We deliver solutions that improve productivity and accelerate business growth.
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
          <h2 className="section-title">Comprehensive CRM Solutions</h2>
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
          <h2 className="section-title">Trusted for Salesforce Excellence</h2>
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