import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="26" rx="4" stroke="#1246C8" strokeWidth="2.2" fill="rgba(18,70,200,0.07)"/>
        <path d="M16 36v4M32 36v4M12 40h24" stroke="#1246C8" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M14 20h6M14 26h10M28 20l4 3-4 3" stroke="#1246C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    
    title: "Implementation & Setup",
    desc: "Deploy a production-ready Salesforce environment aligned to your business processes — on schedule and built to scale.",
    points: [
      "Org configuration & environment provisioning",
      "Structured data migration with full validation",
      "Role-based user onboarding and access control",
      "Hypercare support through go-live and beyond",
    ],
    cta: "Start Your Implementation",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 34l6-6-4-4 8-8 4 4 6-6" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="34" cy="14" r="5" stroke="#93C5FD" strokeWidth="2.2" fill="rgba(147,197,253,0.10)"/>
        <path d="M8 40h32" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
        <path d="M18 40v-4M30 40v-6" stroke="#93C5FD" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
   
    title: "Customization & Development",
    desc: "Extend Salesforce's native capabilities with purpose-built solutions — from complex automations to custom UI components.",
    points: [
      "Custom objects, fields, and page layout design",
      "Apex, LWC & Visualforce engineering",
      "Flow Builder automation & approval processes",
      "AppExchange integration and ISV app configuration",
    ],
    cta: "Discuss Your Requirements",
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16" stroke="#1246C8" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M32 8l8 8-8 8" stroke="#1246C8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 16H28a4 4 0 0 0-4 4v4" stroke="#1246C8" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="3" fill="#1246C8" opacity="0.7"/>
      </svg>
    ),
   
    title: "Cloud Migration",
    desc: "Transition from legacy systems to Salesforce Cloud with a structured, low-risk migration strategy that preserves data integrity.",
    points: [
      "Legacy system audit and field-level mapping",
      "ETL pipeline design, testing, and execution",
      "Multi-cloud and hybrid architecture planning",
      "Post-migration regression testing and sign-off",
    ],
    cta: "Plan Your Migration",
  },
];

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Retention Rate" },
  { value: "12+",  label: "Certified Specialists" },
  { value: "4.9★", label: "Average Client Rating" },
];

export default function ServicesOverview() {
  const navigate = useNavigate();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible]     = useScrollAnimation({ threshold: 0.08 });
  const [footerRef, footerVisible] = useScrollAnimation();

  return (
    <section className="svc-section">
      {/* Section header */}
      <div ref={headerRef} className="svc-header">
        <p className={`svc-eyebrow anim anim-up ${headerVisible ? "anim-visible" : ""}`}>
          Our Services
        </p>
        <h2 className={`svc-heading anim anim-up anim-d2 ${headerVisible ? "anim-visible" : ""}`}>
          Salesforce Expertise,{" "}
          <span className="svc-heading-accent">End to End</span>
        </h2>
        <p className={`svc-heading-sub anim anim-up anim-d3 ${headerVisible ? "anim-visible" : ""}`}>
          From initial implementation to enterprise-scale customisation,
          our certified team delivers measurable outcomes at every phase
          of your Salesforce journey.
        </p>
      </div>

      {/* Cards grid */}
      <div ref={gridRef} className="svc-grid">
        {SERVICES.map(({ icon, tag, title, desc, points, cta, highlight }, i) => (
          <div
            key={title}
            className={`svc-card${highlight ? " svc-card--highlight" : ""} anim anim-up anim-d${i + 2} ${gridVisible ? "anim-visible" : ""}`}
          >
            <span className={`svc-tag${highlight ? " svc-tag--highlight" : ""}`}>{tag}</span>
            <div className={`svc-icon-wrap${highlight ? " svc-icon-wrap--highlight" : ""}`}>{icon}</div>
            <h3 className="svc-title">{title}</h3>
            <p className="svc-desc">{desc}</p>
            <div className="svc-divider" />
            <ul className="svc-list">
              {points.map((p) => (
                <li key={p}>
                  <span className="svc-check">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <button className={`svc-btn${highlight ? " svc-btn--highlight" : ""}`} onClick={() => navigate('/contact')}>
              {cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Trust strip */}
      <div ref={footerRef} className="svc-footer">
        {STATS.map(({ value, label }, i) => (
          <React.Fragment key={label}>
            <div className={`svc-stat anim anim-up anim-d${i + 1} ${footerVisible ? "anim-visible" : ""}`}>
              <span className="svc-stat-value">{value}</span>
              <span className="svc-stat-label">{label}</span>
            </div>
            {i < STATS.length - 1 && <div className="svc-stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}