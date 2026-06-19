import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Marketingcloudpage.css";

let heroImage;
try {
  heroImage = require("../../assests/images/marketing.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "📧",
    title: "Email Marketing Automation",
    desc: "Create and manage personalized email campaigns.",
  },
  {
    icon: "🗺️",
    title: "Customer Journey Mapping",
    desc: "Design seamless customer experiences across channels.",
  },
  {
    icon: "🎯",
    title: "Audience Segmentation",
    desc: "Target the right customers with relevant messaging.",
  },
  {
    icon: "📊",
    title: "Campaign Analytics",
    desc: "Track performance and optimize marketing results.",
  },
];

const whyItems = [
  {
    title: "Personalized Experiences",
    desc: "Deliver tailored content that resonates with your audience.",
  },
  {
    title: "Marketing Automation Expertise",
    desc: "Streamline campaigns with powerful automation tools.",
  },
  {
    title: "Data-Driven Strategies",
    desc: "Make informed decisions based on customer insights.",
  },
  {
    title: "Improved Customer Engagement",
    desc: "Build stronger relationships through targeted communication.",
  },
];

const stats = [
  { number: "200+", label: "Campaigns Managed" },
  { number: "85%",  label: "Engagement Rate" },
  { number: "10+",  label: "Years Experience" },
  { number: "50+",  label: "Marketing Experts" },
];

export default function Marketingcloudpage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="mcp-root">

      <section className="hero">
        {heroImage && (
          <div className="hero-background">
            <img src={heroImage} alt="Marketing Cloud" className="hero-bg-img" onError={(e) => e.target.style.display = 'none'} />
          </div>
        )}
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-orb" />
        <div className="hero-content" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <div className="hero-eyebrow"><span className="hero-eyebrow-dot" />Marketing Solutions</div>
          <h1 className="hero-title">Marketing Cloud <span className="accent">Services</span><span className="cursor" /></h1>
          <p className="hero-subtitle">Create Personalized Customer Journeys That Drive Engagement</p>
          <p className="hero-desc">Deliver targeted marketing campaigns across multiple channels with powerful automation, customer insights, and personalized experiences.</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>Get Started <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        </div>
      </section>

      <section className="section about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <p className="section-label">About the Service</p>
              <h2 className="section-title">About Marketing Cloud Services</h2>
              <p className="section-desc">Our Marketing Cloud solutions help businesses connect with customers through personalized communication, automated campaigns, and data-driven marketing strategies.</p>
            </div>
            <div className="about-visual">
              {stats.map((s) => <div className="stat-card" key={s.label}><div className="stat-number">{s.number}</div><div className="stat-label">{s.label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section deliver">
        <div className="section-inner">
          <p className="section-label">What We Deliver</p>
          <h2 className="section-title">Comprehensive Marketing Solutions</h2>
          <div className="deliver-grid">
            {deliverItems.map((item) => <div className="deliver-card" key={item.title}><div className="deliver-icon">{item.icon}</div><div className="deliver-title">{item.title}</div><p className="deliver-desc">{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="section-inner">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Trusted for Marketing Excellence</h2>
          <div className="why-grid">
            {whyItems.map((item) => <div className="why-card" key={item.title}><div className="why-bar" /><div className="why-title">{item.title}</div><p className="why-desc">{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      

    </div>
  );
}