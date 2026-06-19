import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Applicationsupportpage.css";

// Try importing the image - if this fails, the build will show an error
import heroImage from "../../assests/images/customer suport.png";

const deliverItems = [
  {
    icon: "📊",
    title: "Application Monitoring",
    desc: "Continuous monitoring to identify and resolve issues before they impact users.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Enhancing application speed, reliability, and overall performance.",
  },
  {
    icon: "🔧",
    title: "Issue Resolution",
    desc: "Quick diagnosis and resolution of technical issues to minimize downtime.",
  },
  {
    icon: "🔄",
    title: "Maintenance & Updates",
    desc: "Regular updates, patches, and improvements to ensure application stability.",
  },
];

const whyItems = [
  {
    title: "Proactive Support",
    desc: "Preventing issues before they affect business operations.",
  },
  {
    title: "Faster Resolution",
    desc: "Dedicated experts ensuring quick response and issue resolution.",
  },
  {
    title: "Improved Performance",
    desc: "Continuous optimization for better user experience and efficiency.",
  },
  {
    title: "Reliable Service",
    desc: "Dependable support to keep applications available and secure.",
  },
];

const stats = [
  { number: "99.9%", label: "Uptime Guaranteed" },
  { number: "24/7",  label: "Support Available" },
  { number: "15+",   label: "Years Experience" },
  { number: "300+",  label: "Apps Supported" },
];

export default function Applicationsupportpage() {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  // Check if image loaded
  const handleImageError = () => {
    setImgError(true);
    console.error("Hero image failed to load");
  };

  return (
    <div className="asp-root">

      {/* ── HERO ── */}
      <section className="hero">
        {/* Background image using img tag for better error handling */}
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Application Support" 
            className="hero-bg-img"
            onError={handleImageError}
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
            Support Services
          </div>
          <h1 className="hero-title">
            Application <span className="accent">Support</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Ensuring Your Business Applications Run Smoothly and Efficiently
          </p>
          <p className="hero-desc">
            Our application support services help businesses maintain, monitor, and optimize their critical applications. We provide proactive support to ensure reliability, performance, and uninterrupted business operations.
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
              <h2 className="section-title">About Application Support</h2>
              <p className="section-desc">
                We provide comprehensive application support services to keep your systems running efficiently. Our team handles monitoring, issue resolution, performance optimization, and ongoing maintenance so you can focus on your core business.
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
          <h2 className="section-title">Comprehensive Support Solutions</h2>
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
          <h2 className="section-title">Trusted for Reliable Support</h2>
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