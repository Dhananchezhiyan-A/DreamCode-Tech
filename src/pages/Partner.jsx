import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import teamHero from '../assests/images/patner.webp';
import teamHands from '../assests/images/hero.png';
import './Partner.css';

/* ═══════════════════════════════════════════════════════════
   REAL PARTNER DATA
   ═══════════════════════════════════════════════════════════ */

const ecosystemPartners = [
  { id: 'salesforce', name: 'Salesforce', category: 'CRM Platform' },
  { id: 'zoho', name: 'Zoho', category: 'Business Suite' },
  { id: 'docusign', name: 'DocuSign', category: 'E-Signature' },
  { id: 'sap', name: 'SAP', category: 'Enterprise ERP' },
  { id: 'informatica', name: 'Informatica', category: 'Data Integration' },
  { id: 'mulesoft', name: 'MuleSoft', category: 'API Integration' },
  { id: 'ownbackup', name: 'OwnBackup', category: 'Data Protection' },
  { id: 'aws', name: 'AWS', category: 'Cloud Infrastructure' },
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

const certifications = [
  { label: 'Salesforce Certified Platform Developer II', color1: '#1246C8', color2: '#0A2472', symbol: '{ }' },
  { label: 'Salesforce Certified Platform Developer I', color1: '#1A5CD8', color2: '#1246C8', symbol: '{ }' },
  { label: 'Salesforce Certified OmniStudio Developer', color1: '#0A2472', color2: '#0e1f5e', symbol: '◈' },
  { label: 'MuleSoft Certified Developer I', color1: '#00A2DF', color2: '#0077B6', symbol: '⊙' },
  { label: 'Salesforce Certified JavaScript Developer I', color1: '#1246C8', color2: '#0A2472', symbol: 'JS' },
  { label: 'Salesforce Certified Administrator', color1: '#0EA5E9', color2: '#0369A1', symbol: '★' },
  { label: 'Salesforce Certified Application Architect', color1: '#7C3AED', color2: '#4C1D95', symbol: '◆' },
  { label: 'Salesforce Certified System Architect', color1: '#DC2626', color2: '#7F1D1D', symbol: '⬡' },
];

const caseStudies = [
  { date: 'Jun 2025', title: 'Transforming Financial Services Operations with a Unified CRM Solution', excerpt: 'A leading financial services firm faced challenges with outdated CRM systems and fragmented data across departments...' },
  { date: 'Jun 2025', title: 'Streamlining Onboarding and Compliance for a Global Real Estate Investment Leader', excerpt: 'A global real estate investment firm managing over $200 billion in assets needed to modernize onboarding and compliance workflows...' },
  { date: 'Jun 2025', title: 'Modernizing CIB Lending', excerpt: 'Digital Transformation at a Leading European Bank — overhauling the end-to-end lending lifecycle with Salesforce...' },
  { date: 'Jun 2025', title: 'Scaling HIPAA-Compliant Document Generation for a Leading Healthcare PBM', excerpt: 'A major healthcare organization in pharmacy benefit management needed secure, scalable document workflows...' },
  { date: 'Jun 2025', title: 'Transforming Legal Education Engagement', excerpt: 'A nonprofit in legal education faced challenges managing fragmented stakeholder data and outreach programs...' },
];

/* ═══════════════════════════════════════════════════════════
   SCROLL ANIMATION COMPONENT
   ═══════════════════════════════════════════════════════════ */

function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [direction === 'up' ? 60 : -60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="partners-hero" id="overview">
      <div className="partners-hero__bg" style={{ backgroundImage: `url(${teamHero})` }} />
      <div className="partners-hero__overlay" />
      <div className="partners-hero__dots" />
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
  const scrollRef = useRef(null);

  return (
    <section className="partners-ecosystem" id="ecosystem">
      <div className="partners-ecosystem__inner">
        <ScrollReveal>
          <div className="partners-ecosystem__header">
            <h2>Our Partner Ecosystem</h2>
            <p>Trusted technology alliances powering our solutions</p>
          </div>
        </ScrollReveal>

        <div className="partners-ecosystem__scroll-wrap">
          <div className="partners-ecosystem__track" ref={scrollRef}>
            {ecosystemPartners.map((partner) => (
              <motion.div
                key={partner.id}
                className="partners-ecosystem__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="partners-ecosystem__logo-wrap">
                  <span className="partners-ecosystem__logo-text">{partner.name}</span>
                  <span className="partners-ecosystem__logo-category">{partner.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
        <ScrollReveal>
          <div className="partners-why__header">
            <h2>Why Partner with Us?</h2>
            <p>The foundation of every great partnership is trust, expertise, and results</p>
          </div>
        </ScrollReveal>

        <div className="partners-why__grid">
          {whyPartnerCards.map((card, index) => (
            <motion.article
              key={card.id}
              className="partners-why__card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="partners-why__icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CERTIFICATIONS SECTION
   ═══════════════════════════════════════════════════════════ */

function CertificationsSection() {
  const [certIndex, setCertIndex] = useState(0);
  const visibleCerts = 4;
  const canCertPrev = certIndex > 0;
  const canCertNext = certIndex < certifications.length - visibleCerts;

  const certPrev = () => setCertIndex((i) => Math.max(0, i - 1));
  const certNext = () => setCertIndex((i) => Math.min(certifications.length - visibleCerts, i + 1));

  return (
    <section className="partners-certs" id="certifications">
      <div className="partners-certs__inner">
        <ScrollReveal>
          <div className="partners-certs__header">
            <h2>Our Certifications</h2>
            <p>Industry-recognized credentials that validate our expertise</p>
          </div>
        </ScrollReveal>

        <div className="partners-certs__carousel">
          <button
            className={`partners-certs__arrow${!canCertPrev ? ' disabled' : ''}`}
            onClick={certPrev}
            disabled={!canCertPrev}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="partners-certs__track">
            {certifications.slice(certIndex, certIndex + visibleCerts).map((cert, idx) => (
              <motion.div
                key={cert.label}
                className="partners-certs__badge"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="partners-certs__hex-wrap">
                  <svg viewBox="0 0 140 160" width="120" height="138" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`cg-${certIndex + idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={cert.color1} />
                        <stop offset="100%" stopColor={cert.color2} />
                      </linearGradient>
                      <filter id={`glow-${certIndex + idx}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>
                    <polygon points="70,4 132,38 132,122 70,156 8,122 8,38" fill="none" stroke={cert.color1} strokeWidth="3" opacity="0.45" />
                    <polygon points="70,12 126,44 126,116 70,148 14,116 14,44" fill={`url(#cg-${certIndex + idx})`} filter={`url(#glow-${certIndex + idx})`} />
                    <polygon points="70,22 116,48 116,112 70,138 24,112 24,48" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                    <text x="70" y="102" textAnchor="middle" dominantBaseline="central" fontSize="30" fontWeight="900" fill="#fff" fontFamily="'Inter','Arial',monospace" filter={`url(#glow-${certIndex + idx})`}>{cert.symbol}</text>
                  </svg>
                </div>
                <span className="partners-certs__label">{cert.label}</span>
              </motion.div>
            ))}
          </div>

          <button
            className={`partners-certs__arrow${!canCertNext ? ' disabled' : ''}`}
            onClick={certNext}
            disabled={!canCertNext}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        <div className="partners-certs__dots">
          {Array.from({ length: certifications.length - visibleCerts + 1 }).map((_, i) => (
            <span
              key={i}
              className={`partners-certs__dot${i === certIndex ? ' active' : ''}`}
              onClick={() => setCertIndex(i)}
            />
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
        <ScrollReveal>
          <div>
            <h2>How Can We Work Together?</h2>
            <p>Let's build something great — reach out to explore partnership opportunities.</p>
          </div>
        </ScrollReveal>
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
        <ScrollReveal>
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
        </ScrollReveal>

        <div className="partners-cases__track" style={{ gridTemplateColumns: `repeat(${visibleCases}, 1fr)` }}>
          {caseStudies.slice(caseStart, caseStart + visibleCases).map((cs) => (
            <motion.article
              key={cs.title}
              className="partners-case-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="partners-case-card__top">
                <span className="partners-case-card__date">{cs.date}</span>
                <span className="partners-case-card__tag">Case Study</span>
              </div>
              <h3>{cs.title}</h3>
              <p>{cs.excerpt}</p>
              <span className="partners-case-card__read">Read More →</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONNECT SECTION
   ═══════════════════════════════════════════════════════════ */

function ConnectSection() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: ''
  });
  const [notRobot, setNotRobot] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!notRobot) {
      alert('Please confirm you are not a robot.');
      return;
    }
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: '' });
    setNotRobot(false);
  };

  return (
    <section className="partners-connect" id="connect">
      <div className="partners-connect__inner">
        <ScrollReveal>
          <div className="partners-connect__header">
            <h2>Connect with Us</h2>
            <p>Ready to elevate your business? Contact us today to discuss how we can help you achieve your goals!</p>
          </div>
        </ScrollReveal>

        <div className="connect-form">
          <div className="connect-form__row">
            <input className="connect-form__input" type="text" name="firstName" placeholder="First Name*" required value={formData.firstName} onChange={handleChange} />
            <input className="connect-form__input" type="text" name="lastName" placeholder="Last Name*" required value={formData.lastName} onChange={handleChange} />
          </div>
          <input className="connect-form__input" type="email" name="email" placeholder="Email Address*" required value={formData.email} onChange={handleChange} />
          <div className="connect-form__row">
            <input className="connect-form__input" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <input className="connect-form__input" type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          </div>
          <select className="connect-form__select" name="reason" value={formData.reason} onChange={handleChange}>
            <option value="" disabled>Reason For Contact</option>
            <option>Partnership Inquiry</option>
            <option>Co-Selling Opportunity</option>
            <option>Technology Alliance</option>
            <option>Salesforce Implementation</option>
            <option>Consulting Services</option>
            <option>General Inquiry</option>
          </select>
          <textarea className="connect-form__textarea" name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} />
          <div className="connect-form__footer">
            <label className="connect-form__recaptcha">
              <input type="checkbox" checked={notRobot} onChange={(e) => setNotRobot(e.target.checked)} />
              I'm not a robot
            </label>
            <button type="button" className="connect-form__submit" onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PARTNER PAGE COMPONENT
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
      <CertificationsSection />
      <WorkTogetherSection />
      <CaseStudiesSection />
      <ConnectSection />
    </div>
  );
}