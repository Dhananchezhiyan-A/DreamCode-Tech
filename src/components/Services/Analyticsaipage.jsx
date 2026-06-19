import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Analyticsaipage.css";

let heroImage;
try {
  heroImage = require("../../assests/images/ai.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "📊",
    title: "Business Analytics",
    desc: "Comprehensive analysis of business data for informed decisions.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Insights",
    desc: "Leverage artificial intelligence for deeper data understanding.",
  },
  {
    icon: "🔮",
    title: "Predictive Analytics",
    desc: "Forecast trends and outcomes using advanced algorithms.",
  },
  {
    icon: "📈",
    title: "Data Visualization Dashboards",
    desc: "Interactive dashboards for clear data presentation.",
  },
];

const whyItems = [
  {
    title: "Data-Driven Decision Making",
    desc: "Make strategic choices based on accurate insights.",
  },
  {
    title: "Advanced AI Technologies",
    desc: "Cutting-edge tools for intelligent data processing.",
  },
  {
    title: "Real-Time Insights",
    desc: "Access up-to-date information for agile responses.",
  },
  {
    title: "Scalable Solutions",
    desc: "Analytics that grow with your business needs.",
  },
];

const stats = [
  { number: "250+", label: "Analytics Projects" },
  { number: "90%",  label: "Accuracy Rate" },
  { number: "8+",   label: "Years AI Experience" },
  { number: "40+",  label: "Data Scientists" },
];

export default function Analyticsaipage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="aip-root">

      <section className="hero">
        {heroImage && (
          <div className="hero-background">
            <img src={heroImage} alt="Analytics & AI" className="hero-bg-img" onError={(e) => e.target.style.display = 'none'} />
          </div>
        )}
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-orb" />
        <div className="hero-content" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <div className="hero-eyebrow"><span className="hero-eyebrow-dot" />Intelligence Solutions</div>
          <h1 className="hero-title">Analytics & <span className="accent">AI Solutions</span><span className="cursor" /></h1>
          <p className="hero-subtitle">Turn Data into Actionable Business Intelligence</p>
          <p className="hero-desc">Leverage advanced analytics and AI-powered insights to improve decision-making, automate processes, and drive business growth.</p>
          <button className="btn-primary" onClick={() => navigate('/contact')}>Get Started <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        </div>
      </section>

      <section className="section about">
        <div className="section-inner">
          <div className="about-layout">
            <div>
              <p className="section-label">About the Service</p>
              <h2 className="section-title">About Analytics & AI Solutions</h2>
              <p className="section-desc">Our analytics and AI services help organizations uncover valuable insights, identify trends, and make smarter business decisions using modern technologies.</p>
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
          <h2 className="section-title">Comprehensive Analytics Solutions</h2>
          <div className="deliver-grid">
            {deliverItems.map((item) => <div className="deliver-card" key={item.title}><div className="deliver-icon">{item.icon}</div><div className="deliver-title">{item.title}</div><p className="deliver-desc">{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="section-inner">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Trusted for AI Excellence</h2>
          <div className="why-grid">
            {whyItems.map((item) => <div className="why-card" key={item.title}><div className="why-bar" /><div className="why-title">{item.title}</div><p className="why-desc">{item.desc}</p></div>)}
          </div>
        </div>
      </section>

      

    </div>
  );
}