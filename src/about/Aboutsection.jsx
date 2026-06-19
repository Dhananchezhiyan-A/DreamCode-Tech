import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import aboutImage from '../assests/images/sec.jpeg';
import './Aboutsection.css';

/* ─── INDUSTRY IMAGES ───────────────────────────────────── */
import dreamcodeLogo    from '../assests/images/logo.png';
import financesImg      from '../assests/images/finaces.jpeg';
import healthcareImg    from '../assests/images/healthcare.jpeg';
import eCommesImg       from '../assests/images/ecommes.jpg';
import manfactureImg    from '../assests/images/manfacture.jpeg';
import technologyImg    from '../assests/images/technolgy.jpg';
import telecomImg       from '../assests/images/telecommuincation.jpg.jpeg';

/* ═══════════════════════════════════════════════════════════
   REAL DATA - DreamCode Technologies
   ═══════════════════════════════════════════════════════════ */

const COMPANY = {
  name: 'DreamCode Technologies',
  tagline: "Let's Transform Your Business",
  description:
    'Ready to accelerate your digital transformation? Our expert team is here to discuss how we can help you achieve your Salesforce and software development goals.',
  overview:
    'Customer satisfaction drives our innovation. We are committed to understanding unique business needs and delivering solutions that consistently exceed expectations through cutting-edge technology and expert implementation.',
};

const FOUNDATION = {
  mission: 'Deliver exceptional software solutions and Salesforce implementations that consistently exceed customer expectations, transforming business processes into innovative, scalable, and successful market-ready solutions.',
  vision: 'Become the most trusted software development and Salesforce implementation partner, creating long-lasting relationships through cutting-edge technology solutions and unparalleled service excellence.',
  goal: 'Continuously innovate and improve our services, ensuring customers receive best-in-class experiences while maintaining market leadership in software development and Salesforce solutions.',
};

const MILESTONES = [
  {
    year: '2019',
    tag: 'FOUNDED',
    title: 'Company Founded',
    desc: 'Started with a small team and a bold vision: build technology businesses can actually trust.',
  },
  {
    year: '2020',
    tag: 'FIRST CLIENT',
    title: 'First Enterprise Client',
    desc: 'Earned the confidence of our first enterprise partner, proving the model could scale.',
  },
  {
    year: '2021',
    tag: 'EXPANSION',
    title: 'Team Expansion',
    desc: 'Grew across engineering, design and delivery to meet rising demand.',
  },
  {
    year: '2022',
    tag: 'SF PRACTICE',
    title: 'Salesforce Practice Growth',
    desc: 'Built a dedicated Salesforce practice and deepened our platform expertise.',
  },
  {
    year: '2023',
    tag: 'GLOBAL DELIVERY',
    title: 'Global Client Delivery',
    desc: 'Expanded delivery across borders, supporting clients across multiple time zones.',
  },
  {
    year: '2024',
    tag: '100+ PROJECTS',
    title: '100+ Successful Projects',
    desc: 'Crossed 100 successful project deliveries — a milestone built on consistency and trust.',
  },
];

/* ─── INDUSTRY DATA ─────────────────────────────────────── */
const industries = [
  { num: '01', name: 'Financial Services',  icon: '🏦', img: financesImg },
  { num: '02', name: 'Healthcare',          icon: '🏥', img: healthcareImg },
  { num: '03', name: 'Retail & E-Commerce', icon: '🛍️', img: eCommesImg },
  { num: '04', name: 'Manufacturing',       icon: '⚙️', img: manfactureImg },
  { num: '05', name: 'Technology',          icon: '💻', img: technologyImg },
  { num: '06', name: 'Telecommunications',  icon: '📡', img: telecomImg },
];

/* ═══════════════════════════════════════════════════════════
   HERO SECTION WITH BACKGROUND IMAGE
   ═══════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="about-hero">
      <div 
        className="about-hero__bg"
        style={{ backgroundImage: `url(${aboutImage})` }}
      />
      <div className="about-hero__content">
        <span className="about-hero__eyebrow">About Us</span>
        <h1 className="about-hero__title">{COMPANY.tagline}</h1>
        <p className="about-hero__desc">{COMPANY.description}</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL-DRIVEN TIMELINE SECTION
   ═══════════════════════════════════════════════════════════ */

function TimelineSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 0.5], ["0%", "100%"]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.15], [60, 0]);

  return (
    <section ref={containerRef} className="timeline-section">
      <div className="timeline-bg" />

      <div className="timeline-container">
        <motion.div 
          className="timeline-header"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <span className="timeline-eyebrow">Our Journey</span>
          <h2 className="timeline-title">From 2019 to Today</h2>
          <p className="timeline-subtitle">Building trust, one project at a time</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline__track">
            <div className="timeline__track-bg" />
            <motion.div 
              className="timeline__track-fill"
              style={{ height: lineHeight }}
            />
          </div>

          {MILESTONES.map((milestone, index) => {
            const startRange = index / MILESTONES.length;
            const endRange = (index + 1) / MILESTONES.length;
            const midRange = startRange + (endRange - startRange) / 2;

            return (
              <TimelineCard
                key={milestone.year}
                milestone={milestone}
                index={index}
                progress={smoothProgress}
                startRange={startRange}
                endRange={endRange}
                midRange={midRange}
              />
            );
          })}
        </div>

        <motion.div 
          className="timeline-finale"
          style={{
            opacity: useTransform(smoothProgress, [0.75, 0.9], [0, 1]),
            y: useTransform(smoothProgress, [0.75, 0.9], [40, 0]),
          }}
        >
          <h3 className="timeline-finale__title">
            Building the Next Generation of Salesforce Solutions
          </h3>
          <p className="timeline-finale__desc">
            2024 is just a milestone. The next chapter of growth is already underway.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineCard({ milestone, index, progress, startRange, midRange }) {
  const isLeft = index % 2 === 0;

  const cardOpacity = useTransform(progress, [startRange, midRange], [0, 1]);
  const cardX = useTransform(progress, [startRange, midRange], [isLeft ? -80 : 80, 0]);
  const cardY = useTransform(progress, [startRange, midRange], [30, 0]);
  const dotScale = useTransform(progress, [startRange, midRange], [0, 1]);
  const dotGlow = useTransform(progress, [startRange, midRange], [0, 1]);

  return (
    <div className={`timeline__item timeline__item--${isLeft ? 'left' : 'right'}`}>
      <motion.div 
        className="timeline__dot-wrapper"
        style={{ scale: dotScale }}
      >
        <div className="timeline__dot" />
        <motion.div 
          className="timeline__dot-glow"
          style={{ opacity: dotGlow }}
        />
      </motion.div>

      <motion.div
        className="timeline__card"
        style={{
          opacity: cardOpacity,
          x: cardX,
          y: cardY,
        }}
      >
        <div className="timeline__card-header">
          <span className="timeline__year">{milestone.year}</span>
          <span className="timeline__tag">{milestone.tag}</span>
        </div>
        <h4 className="timeline__card-title">{milestone.title}</h4>
        <p className="timeline__card-desc">{milestone.desc}</p>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INDUSTRY EXPERTISE SECTION
   ═══════════════════════════════════════════════════════════ */

function IndustryModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div 
        className="exp-modal ind-modal-bg" 
        onClick={e => e.stopPropagation()}
        style={{ 
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.80) 100%), url(${item.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <button className="exp-modal-close" onClick={onClose}>✕</button>
        <div className="ind-modal-content">
          <div className="ind-modal-icon">{item.icon}</div>
          <h3 className="exp-modal-title">{item.name}</h3>
          <p className="ind-modal-text">
            We bring deep expertise in <strong>{item.name}</strong>, understanding the unique challenges and opportunities in this industry.
          </p>
          <div className="ind-modal-benefits">
            {['Industry-specific best practices','Proven track record of success','Expert team with deep domain knowledge','Regulatory compliance expertise'].map(b => (
              <div key={b} className="ind-modal-benefit">
                <span className="ind-benefit-icon">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
          <button className="ind-modal-cta">Learn More About {item.name}</button>
        </div>
      </div>
    </div>
  );
}

function IndustryExpertise() {
  const [activeIndModal, setActiveIndModal] = useState(null);
  const [indRef, indVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <section className="srv-industries" ref={indRef}>
        <div className="container">
          <div className={`ind-intro anim anim-up ${indVisible ? 'anim-visible' : ''}`}>
            <div className="ind-intro__icon">
              <img src={dreamcodeLogo} alt="Dreamcode Technologies" style={{ width: '160px', height: 'auto', objectFit: 'contain' }} />
            </div>
            <div>
              <h2 className="ind-intro__title">Industry Expertise</h2>
              <p className="ind-intro__desc">
                We bring deep expertise across multiple industries, combining technical excellence with
                business acumen to deliver solutions that drive real value and measurable results for our clients.
              </p>
              <p className="ind-intro__highlight">Our goal is to be your trusted technology partner in every industry.</p>
            </div>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className={`ind-card anim anim-up anim-d${i + 1} ${indVisible ? 'anim-visible' : ''}`} style={{ backgroundImage: `url(${ind.img})` }}>
                <div className="ind-card__overlay" />
                <div className="ind-card__num">{ind.num}</div>
                <div className="ind-card__name">{ind.name}</div>
                <div className="ind-card__icon-decor">{ind.icon}</div>
                <div className="ind-card__learn" onClick={() => setActiveIndModal(ind)}>LEARN MORE →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndModal && <IndustryModal item={activeIndModal} onClose={() => setActiveIndModal(null)} />}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION (from Contact page)
   ═══════════════════════════════════════════════════════════ */

/* ─── Icons (inline SVG) ─────────────────────────────────────────── */
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
  </svg>
);

const IconCheck = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

function ContactSection() {
  const navigate = useNavigate();
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
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
      <div className="contact-success">
        <div className="contact-success-icon">
          <IconCheck />
        </div>
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
        <button 
          onClick={() => { 
            setSubmitted(false); 
            setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' }); 
          }} 
          className="contact-btn contact-btn--primary"
        >
          Send Another Message
        </button>
        <button 
          onClick={() => navigate('/')} 
          className="contact-btn contact-btn--outline"
          style={{ marginTop: '12px' }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <section className="contact-section-wrapper">
      <div className="contact-container">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <IconPhone />
            </div>
            <h3>Phone</h3>
            <a href="tel:+918220627183">+91 8220627183</a>
            <span>Mon - Fri, 9am - 6pm IST</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <IconMail />
            </div>
            <h3>Email</h3>
            <a href="mailto:info@dreamcodetech.com">info@dreamcodetech.com</a>
            <span>We reply within 24 hours</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <IconGlobe />
            </div>
            <h3>Website</h3>
            <a href="https://dreamcodetech.com" target="_blank" rel="noreferrer">dreamcodetech.com</a>
            <span>Visit for more info</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <IconMapPin />
            </div>
            <h3>Location</h3>
            <p>India</p>
            <span>Remote & On-site Support</span>
          </div>
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
                    Send Message <IconSend />
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
   MAIN ABOUT PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <div className="about-page" id="about">
      <HeroSection />

      <section className="foundation-section">
        <div className="container">
          <div className="foundation-header">
            <span className="foundation-eyebrow">Our Foundation</span>
            <p className="foundation-intro">{COMPANY.overview}</p>
          </div>

          <div className="foundation-grid">
            <div className="foundation-card">
              <div className="foundation-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="foundation-card__title">Mission</h3>
              <p className="foundation-card__desc">{FOUNDATION.mission}</p>
            </div>

            <div className="foundation-card">
              <div className="foundation-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className="foundation-card__title">Vision</h3>
              <p className="foundation-card__desc">{FOUNDATION.vision}</p>
            </div>

            <div className="foundation-card">
              <div className="foundation-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="foundation-card__title">Goal</h3>
              <p className="foundation-card__desc">{FOUNDATION.goal}</p>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />

      <IndustryExpertise />

      <ContactSection />
    </div>
  );
}