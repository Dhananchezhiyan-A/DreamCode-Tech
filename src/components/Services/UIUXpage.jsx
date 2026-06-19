import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UIUXpage.css";

// ─── Data ─────────────────────────────────────────────────────────────────────
const deliverItems = [
  {
    icon: "🔍",
    title: "User Research",
    desc: "Understanding user behavior, needs, and expectations to create effective solutions.",
  },
  {
    icon: "📐",
    title: "Wireframing & Prototyping",
    desc: "Transforming ideas into interactive layouts and prototypes before development.",
  },
  {
    icon: "🎨",
    title: "UI Design",
    desc: "Creating visually appealing interfaces that align with your brand identity.",
  },
  {
    icon: "⚡",
    title: "UX Optimization",
    desc: "Improving usability and user journeys for higher engagement and conversions.",
  },
];

const whyItems = [
  {
    title: "User-Centered Approach",
    desc: "Every design decision is focused on enhancing user satisfaction.",
  },
  {
    title: "Creative Design Team",
    desc: "Experienced designers delivering innovative and modern interfaces.",
  },
  {
    title: "Consistent Brand Experience",
    desc: "Designs that strengthen your brand across all digital touchpoints.",
  },
  {
    title: "Improved User Engagement",
    desc: "Solutions designed to increase retention, interaction, and customer loyalty.",
  },
];

const stats = [
  { number: "150+", label: "Design Projects" },
  { number: "95%",  label: "Client Satisfaction" },
  { number: "10+",  label: "Years Experience" },
  { number: "40+",  label: "Expert Designers" },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function UIUXpage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="uiux-root">

      {/* ── HERO WITH ORIGINAL IMAGE BACKGROUND ── */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${require("../../assests/images/uiux.jpg")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for text readability - NOT blue */}
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
            UI/UX Design
          </div>
          <h1 className="hero-title">
            UI/UX <span className="accent">Development</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Designing Exceptional Digital Experiences That Users Love
          </p>
          <p className="hero-desc">
            We create intuitive, engaging, and visually appealing user experiences that help businesses connect with their customers. Our designs focus on usability, accessibility, and business success.
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
              <h2 className="section-title">About UI/UX Development</h2>
              <p className="section-desc">
                Our UI/UX design services help businesses create user-friendly digital products that improve customer satisfaction and engagement. We combine creativity, strategy, and technology to deliver meaningful user experiences.
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
          <h2 className="section-title">End-to-End Design Solutions</h2>
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
          <h2 className="section-title">Built on Creativity & Results</h2>
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