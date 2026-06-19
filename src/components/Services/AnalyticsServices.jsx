import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AnalyticsServices.css";

let heroImage;
try {
  heroImage = require("../../assests/images/ana.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "📊",
    title: "Business Intelligence Dashboards",
    desc: "Interactive dashboards for real-time business visibility.",
  },
  {
    icon: "🤖",
    title: "Predictive Analytics & ML",
    desc: "Identify trends and forecast future outcomes with machine learning.",
  },
  {
    icon: "🏗️",
    title: "Data Warehousing Solutions",
    desc: "Centralize and organize data for advanced analytics.",
  },
  {
    icon: "🔄",
    title: "ETL/ELT Pipeline Development",
    desc: "Automate data extraction, transformation, and loading processes.",
  },
];

const whyItems = [
  {
    title: "Data Experts",
    desc: "Specialized team with deep analytics and data science expertise.",
  },
  {
    title: "Real-Time Insights",
    desc: "Monitor and analyze business metrics instantly.",
  },
  {
    title: "Custom Solutions",
    desc: "Tailored analytics solutions designed for your specific needs.",
  },
  {
    title: "Actionable Results",
    desc: "Transform raw data into meaningful business insights.",
  },
];

const stats = [
  { number: "250+", label: "Analytics Projects" },
  { number: "95%",  label: "Accuracy Rate" },
  { number: "35+",  label: "Data Scientists" },
  { number: "10+",  label: "Years Experience" },
];

export default function AnalyticsServices() {
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
            Data Intelligence
          </div>
          <h1 className="hero-title">
            Turn Data Into Your <span className="accent">Competitive Edge</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Unlock valuable insights and make smarter business decisions.
          </p>
          <p className="hero-desc">
            We help organizations transform raw data into meaningful business insights with real-time visibility, predictive intelligence, and data-driven decision-making.
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
              <h2 className="section-title">Data Analytics Services</h2>
              <p className="section-desc">
                Our analytics solutions empower businesses with real-time visibility, predictive intelligence, and data-driven decision-making capabilities.
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