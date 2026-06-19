import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SalesforceServices.css";

let heroImage;
try {
  heroImage = require("../../assests/images/saless.webp");
} catch (e) {
  heroImage = "";
}

const deliverItems = [
  {
    icon: "☁️",
    title: "Sales Cloud Implementation",
    desc: "Optimize sales processes with lead management, opportunity tracking, and workflow automation.",
  },
  {
    icon: "🎧",
    title: "Service Cloud Setup",
    desc: "Deliver exceptional customer experiences through intelligent service and support solutions.",
  },
  {
    icon: "⚡",
    title: "Custom Apex & Lightning Development",
    desc: "Build tailored Salesforce applications using Apex and Lightning technologies.",
  },
  {
    icon: "🔗",
    title: "Salesforce Integration",
    desc: "Connect Salesforce with third-party applications and enterprise systems for seamless data flow.",
  },
];

const whyItems = [
  {
    title: "Certified Salesforce Experts",
    desc: "Experienced professionals delivering industry best practices.",
  },
  {
    title: "Customized Solutions",
    desc: "Tailored implementations designed around your business needs.",
  },
  {
    title: "Seamless Integration",
    desc: "Connect systems and automate workflows efficiently.",
  },
  {
    title: "Ongoing Support",
    desc: "Long-term partnership to ensure continuous improvement and success.",
  },
];

const stats = [
  { number: "150+", label: "Salesforce Projects" },
  { number: "98%",  label: "Client Satisfaction" },
  { number: "50+",  label: "Certified Experts" },
  { number: "10+",  label: "Years Experience" },
];

export default function SalesforceServices() {
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
            Salesforce Solutions
          </div>
          <h1 className="csp-hero-title">
            Unlock the Full Power of <span className="csp-accent">Salesforce</span>
            <span className="csp-cursor" />
          </h1>
          <p className="csp-hero-subtitle">
            Transform customer relationships, streamline business processes, and drive sustainable growth.
          </p>
          <p className="csp-hero-desc">
            From initial implementation to advanced customizations, we help organizations maximize the value of Salesforce with scalable solutions that improve sales performance and customer service.
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
              <h2 className="csp-section-title">Salesforce Services</h2>
              <p className="csp-section-desc">
                Our certified consultants deliver scalable solutions that improve sales performance, customer service, and operational efficiency. We handle everything from implementation to ongoing support.
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