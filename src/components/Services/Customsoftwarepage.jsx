import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Customsoftwarepage .css";

// Use cut.jpeg image
let heroImage;
try {
  heroImage = require("../../assests/images/cut.jpg");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "🌐",
    title: "Web Application Development",
    desc: "Modern web applications built for performance, scalability, and seamless user experiences.",
  },
  {
    icon: "🏢",
    title: "Enterprise Software Solutions",
    desc: "Custom enterprise systems that improve business processes and operational efficiency.",
  },
  {
    icon: "☁️",
    title: "SaaS Product Development",
    desc: "Cloud-based software products designed for flexibility, growth, and long-term success.",
  },
  {
    icon: "🔗",
    title: "API Development & Integration",
    desc: "Secure integration of applications, platforms, and third-party services.",
  },
];

const whyItems = [
  {
    title: "Experienced Team",
    desc: "Skilled developers with expertise across multiple technologies and industries.",
  },
  {
    title: "Agile Development",
    desc: "Flexible and transparent development process with faster delivery cycles.",
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive testing to ensure reliability, security, and performance.",
  },
  {
    title: "Ongoing Support",
    desc: "Continuous maintenance and support to keep your software running smoothly.",
  },
];

const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "98%",  label: "Client Satisfaction" },
  { number: "12+",  label: "Years Experience" },
  { number: "50+",  label: "Expert Engineers" },
];

export default function Customsoftwarepage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="csp-root">

      {/* ── HERO ── */}
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
            Software Development
          </div>
          <h1 className="hero-title">
            Custom <span className="accent">Software</span> Development
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Building Tailored Software Solutions That Drive Business Growth
          </p>
          <p className="hero-desc">
            We create scalable, secure, and high-performance software applications designed to meet your unique business requirements. From concept to deployment, we deliver solutions that help businesses innovate and grow.
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
              <h2 className="section-title">About Custom Software Development</h2>
              <p className="section-desc">
                Our custom software development services are designed to help businesses streamline operations, improve efficiency, and achieve digital transformation. We build reliable and scalable solutions tailored to your specific goals and workflows.
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
          <h2 className="section-title">End-to-End Software Solutions</h2>
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