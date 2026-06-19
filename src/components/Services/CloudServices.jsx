import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CloudServices.css";

// Try importing - if this fails, we'll use fallback
let heroImage;
try {
  heroImage = require("../../assests/images/cloud service.jpg");
} catch (e) {
  console.warn("Could not load image with require, trying public path");
  heroImage = "/assests/images/cloud%20service.jpg";
}

const deliverItems = [
  {
    icon: "☁️",
    title: "Cloud Migration",
    desc: "Smooth transition of applications and data from on-premise systems to cloud platforms.",
  },
  {
    icon: "🅰️",
    title: "AWS Solutions",
    desc: "Secure and scalable cloud solutions built using Amazon Web Services.",
  },
  {
    icon: "🔷",
    title: "Microsoft Azure Services",
    desc: "Comprehensive Azure solutions for infrastructure, applications, and data management.",
  },
  {
    icon: "⚙️",
    title: "Cloud Management & Optimization",
    desc: "Continuous monitoring, maintenance, and optimization for maximum performance and cost efficiency.",
  },
];

const whyItems = [
  {
    title: "Certified Cloud Experts",
    desc: "Experienced professionals with expertise in leading cloud platforms.",
  },
  {
    title: "Secure Infrastructure",
    desc: "Cloud environments designed with security and compliance in mind.",
  },
  {
    title: "Scalable Solutions",
    desc: "Flexible cloud architectures that grow with your business.",
  },
  {
    title: "Ongoing Support",
    desc: "Continuous monitoring and support to ensure optimal performance.",
  },
];

const stats = [
  { number: "200+", label: "Cloud Migrations" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "50+", label: "Cloud Experts" },
  { number: "10+", label: "Years Experience" },
];

export default function CloudServices() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="cloud-root">

      {/* ── HERO ── */}
      <section className="hero">
        {/* Background image using img tag */}
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Cloud Services" 
            className="hero-bg-img"
            onError={(e) => {
              console.error("Hero image failed to load:", e.target.src);
              // Fallback: use dark gradient only
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
            Cloud Solutions
          </div>
          <h1 className="hero-title">
            Cloud <span className="accent">Services</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Empowering Businesses with Secure and Scalable Cloud Solutions
          </p>
          <p className="hero-desc">
            We help organizations modernize their infrastructure with reliable cloud solutions that improve flexibility, security, and operational efficiency. Our cloud experts ensure seamless deployment, migration, and management.
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
              <h2 className="section-title">About Cloud Services</h2>
              <p className="section-desc">
                Our cloud services enable businesses to leverage modern cloud technologies for improved performance, scalability, and cost efficiency. We help organizations migrate, manage, and optimize their cloud environments with confidence.
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
          <h2 className="section-title">Comprehensive Cloud Solutions</h2>
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
          <h2 className="section-title">Trusted for Cloud Excellence</h2>
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