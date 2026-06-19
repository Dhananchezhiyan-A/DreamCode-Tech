import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Servicecloudpage.css";

// Try to import image - if it fails, we'll handle it
let heroImage;
try {
  heroImage = require("../../assests/images/service.jpg");
} catch (e) {
  console.warn("Image not found, using fallback");
  heroImage = "";
}

const deliverItems = [
  {
    icon: "🎫",
    title: "Case Management",
    desc: "Efficiently track, manage, and resolve customer issues from a centralized platform.",
  },
  {
    icon: "📱",
    title: "Omnichannel Support",
    desc: "Connect with customers through email, chat, phone, social media, and more.",
  },
  {
    icon: "📚",
    title: "Knowledge Base Solutions",
    desc: "Provide self-service resources and knowledge articles to improve customer satisfaction.",
  },
  {
    icon: "🤖",
    title: "Service Automation",
    desc: "Automate workflows and repetitive tasks to improve support efficiency.",
  },
];

const whyItems = [
  {
    title: "Customer-Centric Approach",
    desc: "Solutions designed to enhance customer experiences and satisfaction.",
  },
  {
    title: "Salesforce Expertise",
    desc: "Experienced consultants specializing in Service Cloud implementations.",
  },
  {
    title: "Increased Agent Productivity",
    desc: "Tools and automation that help support teams work more effectively.",
  },
  {
    title: "Continuous Optimization",
    desc: "Ongoing improvements to maximize service performance and ROI.",
  },
];

const stats = [
  { number: "120+", label: "Implementations" },
  { number: "95%",  label: "CSAT Improvement" },
  { number: "10+",  label: "Years Experience" },
  { number: "35+",  label: "Certified Experts" },
];

export default function Servicecloudpage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="svc-root">

      {/* ── HERO ── */}
      <section className="hero">
        {heroImage && (
          <div className="hero-background">
            <img 
              src={heroImage} 
              alt="Service Cloud" 
              className="hero-bg-img"
              onError={(e) => {
                console.error("Image failed to load:", e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}
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
            Customer Service
          </div>
          <h1 className="hero-title">
            Service Cloud <span className="accent">Solutions</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Deliver Exceptional Customer Service Across Every Channel
          </p>
          <p className="hero-desc">
            Enhance customer satisfaction with intelligent service solutions that streamline support operations, improve response times, and create seamless customer experiences.
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
              <h2 className="section-title">About Service Cloud Solutions</h2>
              <p className="section-desc">
                Our Service Cloud solutions help businesses provide faster, smarter, and more personalized customer support. We implement service platforms that improve agent productivity and strengthen customer relationships.
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
          <h2 className="section-title">Comprehensive Service Solutions</h2>
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
          <h2 className="section-title">Trusted for Service Excellence</h2>
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