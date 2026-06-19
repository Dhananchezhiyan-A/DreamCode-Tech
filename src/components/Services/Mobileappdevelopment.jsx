import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mobileappdevelopment.css";

const deliverItems = [
  {
    icon: "🍎",
    title: "iOS App Development",
    desc: "Custom iPhone and iPad applications built with Swift and latest iOS technologies for premium performance.",
  },
  {
    icon: "🤖",
    title: "Android App Development",
    desc: "Robust Android applications designed with Kotlin for reliability, scalability, and functionality.",
  },
  {
    icon: "⚡",
    title: "Cross-Platform Development",
    desc: "Cost-effective mobile solutions using React Native and Flutter for faster deployment.",
  },
  {
    icon: "🛠️",
    title: "App Maintenance & Support",
    desc: "Continuous updates, monitoring, and support to ensure optimal application performance.",
  },
];

const whyItems = [
  {
    title: "Expert Mobile Developers",
    desc: "Experienced professionals skilled in modern mobile technologies and best practices.",
  },
  {
    title: "User-Centric Design",
    desc: "Applications designed to provide exceptional user experiences and intuitive interfaces.",
  },
  {
    title: "Secure & Scalable",
    desc: "Built with industry best practices for security and designed for future growth.",
  },
  {
    title: "End-to-End Support",
    desc: "From idea validation to deployment and ongoing maintenance, we're with you every step.",
  },
];

const stats = [
  { number: "180+", label: "Apps Delivered" },
  { number: "96%",  label: "Client Satisfaction" },
  { number: "8+",   label: "Years Experience" },
  { number: "35+",  label: "Mobile Experts" },
];

export default function Mobileappdevelopment() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <div className="mad-root">

      {/* ── HERO WITH ORIGINAL IMAGE BACKGROUND ── */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${require("../../assests/images/mobile-app-development.webp")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
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
            Mobile Solutions
          </div>
          <h1 className="hero-title">
            Mobile App <span className="accent">Development</span>
            <span className="cursor" />
          </h1>
          <p className="hero-subtitle">
            Creating Engaging Mobile Experiences for Modern Businesses
          </p>
          <p className="hero-desc">
            We design and develop powerful mobile applications that deliver seamless user experiences across iOS and Android platforms. Our solutions are built for performance, scalability, and business growth.
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
              <h2 className="section-title">About Mobile Application Development</h2>
              <p className="section-desc">
                Our mobile app development services help businesses connect with customers anytime, anywhere. We build intuitive, feature-rich, and high-performing mobile applications that enhance engagement and drive results.
              </p>
              <p className="section-desc">
                From initial concept to post-launch support, we manage every aspect of your mobile app journey. Our team combines technical expertise with user-centric design to create applications that users love.
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
          <h2 className="section-title">Comprehensive Mobile Solutions</h2>
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
          <h2 className="section-title">Trusted for Exceptional Mobile Solutions</h2>
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