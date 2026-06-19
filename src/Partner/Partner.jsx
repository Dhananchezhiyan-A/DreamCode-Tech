import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import teamHero from '../assests/images/patner.webp';
import teamHands from '../assests/images/hero.png';
import './Partner.css';

/* ═══════════════════════════════════════════════════════════
   LOCAL LOGO IMPORTS
   ═══════════════════════════════════════════════════════════ */
import salesforceLogo from '../assests/images/salesforces.webp';
import zohoLogo from '../assests/images/zoho.png';
import docusignLogo from '../assests/images/docusign.png';
import sapLogo from '../assests/images/sap.jpg';
import informaticaLogo from '../assests/images/informatica.png';
import mulesoftLogo from '../assests/images/mulesoft.png';
import ownbackupLogo from '../assests/images/own backup.png';
import awsLogo from '../assests/images/aws.webp';

const ecosystemPartners = [
  { id: 'salesforce', name: 'Salesforce', category: 'CRM Platform', logo: salesforceLogo },
  { id: 'zoho', name: 'Zoho', category: 'Business Suite', logo: zohoLogo },
  { id: 'docusign', name: 'DocuSign', category: 'E-Signature', logo: docusignLogo },
  { id: 'sap', name: 'SAP', category: 'Enterprise ERP', logo: sapLogo },
  { id: 'informatica', name: 'Informatica', category: 'Data Integration', logo: informaticaLogo },
  { id: 'mulesoft', name: 'MuleSoft', category: 'API Integration', logo: mulesoftLogo },
  { id: 'ownbackup', name: 'OwnBackup', category: 'Data Protection', logo: ownbackupLogo },
  { id: 'aws', name: 'AWS', category: 'Cloud Infrastructure', logo: awsLogo },
];

const whyPartnerCards = [
  {
    id: 'solutions',
    title: 'Partner Driven Solutions',
    description: 'We collaborate with our partners to custom-tailor our solutions, delivering maximum impact for our joint clients.',
    icon: '🤝',
  },
  {
    id: 'track-record',
    title: 'Proven Track Record',
    description: "Our history of successful Salesforce implementations speaks for itself. We've helped numerous organizations transform their operations.",
    icon: '⭐',
  },
  {
    id: 'global',
    title: 'Global Delivery',
    description: 'With a global footprint, we deliver solutions seamlessly across geographies with round-the-clock support for your Salesforce journey.',
    icon: '🌍',
  },
];

const caseStudies = [
  { date: 'Jun 2025', title: 'Transforming Financial Services Operations with a Unified CRM Solution', excerpt: 'A leading financial services firm faced challenges with outdated CRM systems and fragmented data across departments...' },
  { date: 'Jun 2025', title: 'Streamlining Onboarding and Compliance for a Global Real Estate Investment Leader', excerpt: 'A global real estate investment firm managing over $200 billion in assets needed to modernize onboarding and compliance workflows...' },
  { date: 'Jun 2025', title: 'Modernizing CIB Lending', excerpt: 'Digital Transformation at a Leading European Bank — overhauling the end-to-end lending lifecycle with Salesforce...' },
  { date: 'Jun 2025', title: 'Scaling HIPAA-Compliant Document Generation for a Leading Healthcare PBM', excerpt: 'A major healthcare organization in pharmacy benefit management needed secure, scalable document workflows...' },
  { date: 'Jun 2025', title: 'Transforming Legal Education Engagement', excerpt: 'A nonprofit in legal education faced challenges managing fragmented stakeholder data and outreach programs...' },
];

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="partners-hero" id="overview">
      <div className="partners-hero__bg" style={{ backgroundImage: `url(${teamHero})` }} />
      <div className="partners-hero__inner">
        <div className="partners-hero__text">
          <div className="partners-hero__eyebrow">
            <span className="partners-eyebrow-dot" />
            Strategic Partnerships
          </div>
          <h1>We are driven by strong and strategic partnerships</h1>
          <p>Our partners in the Salesforce Ecosystem trust us to collaborate, design, build, and tailor solutions that meet their clients' unique needs — delivering real, lasting value together.</p>
          <Link to="/contact" className="partners-hero__cta">Partner With Us →</Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ECOSYSTEM SECTION
   ═══════════════════════════════════════════════════════════ */
function EcosystemSection() {
  return (
    <section className="partners-ecosystem" id="ecosystem">
      <div className="partners-ecosystem__inner">
        <div className="partners-ecosystem__header">
          <h2>Our Partner Ecosystem</h2>
          <p>Trusted technology alliances powering our solutions</p>
        </div>
        <div className="partners-ecosystem__grid">
          {ecosystemPartners.map((partner) => (
            <div key={partner.id} className="partners-ecosystem__card">
              <div className="partners-ecosystem__logo-wrap">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partners-ecosystem__logo-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="partners-ecosystem__logo-fallback" style={{ display: 'none' }}>
                  <span className="partners-ecosystem__logo-text">{partner.name}</span>
                  <span className="partners-ecosystem__logo-category">{partner.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WHY PARTNER SECTION
   ═══════════════════════════════════════════════════════════ */
function WhyPartnerSection() {
  return (
    <section className="partners-why" id="why-partner">
      <div className="partners-why__inner">
        <div className="partners-why__header">
          <h2>Why Partner with Us?</h2>
          <p>The foundation of every great partnership is trust, expertise, and results</p>
        </div>
        <div className="partners-why__grid">
          {whyPartnerCards.map((card) => (
            <article key={card.id} className="partners-why__card">
              <div className="partners-why__icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WORK TOGETHER SECTION
   ═══════════════════════════════════════════════════════════ */
function WorkTogetherSection() {
  return (
    <section className="partners-work-together" id="work-together">
      <div className="partners-work-together__bg" style={{ backgroundImage: `url(${teamHands})` }} />
      <div className="partners-work-together__overlay" />
      <div className="partners-work-together__inner">
        <div>
          <h2>How Can We Work Together?</h2>
          <p>Let's build something great — reach out to explore partnership opportunities.</p>
        </div>
        <Link to="/contact" className="partners-work-together__btn">Let's Talk →</Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CASE STUDIES SECTION
   ═══════════════════════════════════════════════════════════ */
function CaseStudiesSection() {
  const [caseStart, setCaseStart] = useState(0);
  const [visibleCases, setVisibleCases] = useState(3);

  useEffect(() => {
    function update() {
      if (window.innerWidth <= 768) setVisibleCases(1);
      else if (window.innerWidth <= 1024) setVisibleCases(2);
      else setVisibleCases(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setCaseStart((i) => Math.min(i, Math.max(0, caseStudies.length - visibleCases)));
  }, [visibleCases]);

  const canCasePrev = caseStart > 0;
  const canCaseNext = caseStart < caseStudies.length - visibleCases;

  return (
    <section className="partners-cases" id="case-studies">
      <div className="partners-cases__inner">
        <div className="partners-cases__header">
          <div>
            <h2>Case Studies</h2>
            <p>Real results for real clients</p>
          </div>
          <div className="partners-cases__controls">
            <Link to="/resources/case-studies" className="partners-cases__viewall">View All</Link>
            <button
              className={`partners-cases__arrow${!canCasePrev ? ' disabled' : ''}`}
              onClick={() => setCaseStart((i) => Math.max(0, i - 1))}
              disabled={!canCasePrev}
            >
              ‹
            </button>
            <button
              className={`partners-cases__arrow${!canCaseNext ? ' disabled' : ''}`}
              onClick={() => setCaseStart((i) => Math.min(caseStudies.length - visibleCases, i + 1))}
              disabled={!canCaseNext}
            >
              ›
            </button>
          </div>
        </div>
        <div className="partners-cases__track" style={{ gridTemplateColumns: `repeat(${visibleCases}, 1fr)` }}>
          {caseStudies.slice(caseStart, caseStart + visibleCases).map((cs) => (
            <article key={cs.title} className="partners-case-card">
              <div className="partners-case-card__top">
                <span className="partners-case-card__date">{cs.date}</span>
                <span className="partners-case-card__tag">Case Study</span>
              </div>
              <h3>{cs.title}</h3>
              <p>{cs.excerpt}</p>
              <span className="partners-case-card__read">Read More →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONNECT SECTION — CONTACT FORM (from Contact page)
   ═══════════════════════════════════════════════════════════ */
function ConnectSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const services = [
    'Sales Cloud',
    'Service Cloud',
    'Marketing Cloud',
    'Agentforce',
    'Salesforce CPQ',
    'Education Cloud',
    'Health Cloud',
    'Financial Services Cloud',
    'Custom Development',
    'Other'
  ];

  if (submitted) {
    return (
      <section className="partners-connect" id="connect">
        <div className="partners-connect__inner">
          <div className="partners-connect__header">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
          </div>
          <div className="contact-form-submit" style={{ justifyContent: 'center' }}>
            <button
              className="contact-btn contact-btn--primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="partners-connect" id="connect">
      <div className="partners-connect__inner">
        <div className="partners-connect__header">
          <h2>Connect with Us</h2>
          <p>Ready to elevate your business? Contact us today to discuss how we can help you achieve your goals!</p>
        </div>

        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="John"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="service">Service Interest *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-form-group contact-form-group--full">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project, requirements, or any questions you have..."
              />
            </div>

            <div className="contact-form-submit">
              <button type="submit" className="contact-btn contact-btn--primary" disabled={loading}>
                {loading ? (
                  <span className="contact-btn-loading">
                    <span className="contact-spinner" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message →
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════
   MAIN PARTNER PAGE
   ═══════════════════════════════════════════════════════════ */
export default function PartnersPage() {
  const { section } = useParams();

  useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [section]);

  return (
    <div className="partners-page">
      <HeroSection />
      <EcosystemSection />
      <WhyPartnerSection />
      <WorkTogetherSection />
      <CaseStudiesSection />
      <ConnectSection />
    </div>
  );
}