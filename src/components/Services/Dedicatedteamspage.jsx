import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dedicatedteamspage.css";
import heroImage from "../../assests/images/dedicate.jpg";

const deliverItems = [
  {
    icon: "👨‍💻",
    title: "Dedicated Developers",
    desc: "Experienced professionals working exclusively on your projects and business objectives.",
  },
  {
    icon: "📈",
    title: "Flexible Team Scaling",
    desc: "Quickly scale your team up or down based on project requirements and business needs.",
  },
  {
    icon: "📋",
    title: "Project Management Support",
    desc: "Effective planning, coordination, and delivery through experienced project managers.",
  },
  {
    icon: "🤝",
    title: "Long-Term Collaboration",
    desc: "Reliable partnerships focused on continuous innovation and business growth.",
  },
];

const whyItems = [
  {
    title: "Skilled Professionals",
    desc: "Access to experienced developers, designers, and technology experts.",
  },
  {
    title: "Cost-Effective Model",
    desc: "Reduce recruitment and operational costs while maintaining quality.",
  },
  {
    title: "Faster Project Delivery",
    desc: "Accelerate development cycles with dedicated and focused teams.",
  },
  {
    title: "Seamless Integration",
    desc: "Teams that work as an extension of your internal workforce.",
  },
];

const stats = [
  { number: "100+", label: "Dedicated Teams" },
  { number: "95%",  label: "Client Retention" },
  { number: "12+",  label: "Years Experience" },
  { number: "500+", label: "Developers" },
];

export default function Dedicatedteamspage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="ddt-root">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Dedicated Teams" 
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
            Team Solutions
          </div>
          <h1 className="hero-title">
            Dedicated <span className="accent">Development Teams</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Scale Your Business with Skilled and Dedicated Technology Experts
          </p>
          <p className="hero-desc">
            Access experienced developers, designers, and technology specialists who work exclusively on your projects. Build high-performing teams that align with your business goals and accelerate project delivery.
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
              <h2 className="section-title">About Dedicated Development Teams</h2>
              <p className="section-desc">
                Our dedicated development team model gives you access to top technology talent without the challenges of hiring and managing in-house resources. We provide flexible team structures that seamlessly integrate with your business processes.
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
          <h2 className="section-title">Comprehensive Team Solutions</h2>
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
          <h2 className="section-title">Trusted for Team Excellence</h2>
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