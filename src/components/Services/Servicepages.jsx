import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, X, Code, Cloud, Smartphone, Settings, BarChart3, Palette, Shield, Layers, ChevronRight, CheckCircle2, ArrowRight, Send } from 'lucide-react';
import '../Contact/ContactSection.css';
import './Servicepages.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── IMAGE IMPORTS ───────────────────────────────────── */
import resultsImg    from '../../assests/images/leader.jpeg';
import teamImg       from '../../assests/images/team.jpeg';
import innovationImg from '../../assests/images/innovation.jpeg';

/* ─── SERVICES DATA ──────────────────────────────────── */
const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    shortDesc: 'Tailored software solutions built to address your unique business challenges and drive digital transformation.',
    icon: <Code size={32} />,
    color: '#0EA5E9',
    route: '/services/custom-software'
  },
  {
    id: 2,
    title: 'Salesforce Services',
    shortDesc: 'End-to-end Salesforce implementation, customization, and optimization to maximize your CRM investment.',
    icon: <Cloud size={32} />,
    color: '#00A1E0',
    route: '/services/salesforce'
  },
  {
    id: 3,
    title: 'Zoho Services',
    shortDesc: 'Complete Zoho ecosystem setup, customization, and integration for streamlined business operations.',
    icon: <Layers size={32} />,
    color: '#E42527',
    route: '/services/zoho'
  },
  {
    id: 4,
    title: 'Integrations',
    shortDesc: 'Seamless connectivity between your systems, applications, and data sources for unified workflows.',
    icon: <Settings size={32} />,
    color: '#8B5CF6',
    route: '/services/integrations'
  },
  {
    id: 5,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <Smartphone size={32} />,
    color: '#10B981',
    route: '/services/mobile-app'
  },
  {
    id: 6,
    title: 'Application Maintenance',
    shortDesc: 'Proactive support and maintenance to keep your applications running at peak performance.',
    icon: <CheckCircle2 size={32} />,
    color: '#F59E0B',
    route: '/services/maintenance'
  },
  {
    id: 7,
    title: 'Data Analytics',
    shortDesc: 'Transform raw data into actionable insights with advanced analytics and visualization solutions.',
    icon: <BarChart3 size={32} />,
    color: '#EC4899',
    route: '/services/data-analytics'
  },
  {
    id: 8,
    title: 'UI/UX Design',
    shortDesc: 'User-centered design that creates intuitive, engaging, and visually stunning digital experiences.',
    icon: <Palette size={32} />,
    color: '#6366F1',
    route: '/services/ui-ux'
  },
  {
    id: 9,
    title: 'Network, Infrastructure & Security',
    shortDesc: 'Robust infrastructure and security solutions to protect your business and ensure continuity.',
    icon: <Shield size={32} />,
    color: '#EF4444',
    route: '/services/infrastructure'
  }
];

/* ─── SERVICE PAGE DATA ──────────────────────────────── */
const whyCards = [
  {
    icon: '🎯',
    title: 'Results-Driven Approach',
    desc: 'We focus on delivering measurable outcomes that directly impact your business growth, efficiency, and bottom line.',
    img: resultsImg,
    modalItems: [
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="white" strokeWidth="3"/><circle cx="24" cy="24" r="8" stroke="white" strokeWidth="3"/><circle cx="24" cy="24" r="3" fill="white"/></svg>), title: 'Goal Alignment', desc: 'Every project starts with a clear understanding of your business objectives to ensure all efforts drive real value.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 36l10-12 8 6 8-10 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 8v32h36" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'KPI Tracking', desc: 'We define measurable KPIs upfront and track them throughout delivery to ensure transparent progress and accountability.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="28" width="8" height="12" rx="1" stroke="white" strokeWidth="3"/><rect x="20" y="18" width="8" height="22" rx="1" stroke="white" strokeWidth="3"/><rect x="32" y="10" width="8" height="30" rx="1" stroke="white" strokeWidth="3"/></svg>), title: 'Proven ROI', desc: 'Our solutions consistently deliver strong return on investment, backed by case studies and measurable client outcomes.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 8l4 12h12l-10 7 4 12-10-7-10 7 4-12L8 20h12z" stroke="white" strokeWidth="3" strokeLinejoin="round"/></svg>), title: 'Excellence Standards', desc: 'We hold ourselves to the highest standards of delivery, ensuring quality outcomes that exceed client expectations.' },
    ],
  },
  {
    icon: '⭐',
    title: 'Expert Team',
    desc: 'Our certified professionals bring years of industry experience and proven expertise across diverse domains and technologies.',
    img: teamImg,
    modalItems: [
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="16" cy="16" r="8" stroke="white" strokeWidth="3"/><circle cx="32" cy="16" r="8" stroke="white" strokeWidth="3"/><path d="M4 40c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'Certified Professionals', desc: 'Every team member holds industry-recognised certifications ensuring the highest level of technical competence.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 8l4 12h12l-10 7 4 12-10-7-10 7 4-12L8 20h12z" stroke="white" strokeWidth="3" strokeLinejoin="round"/></svg>), title: 'Deep Domain Knowledge', desc: 'Years of cross-industry experience means we bring contextual insight, not just technical skills, to every engagement.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="36" height="28" rx="3" stroke="white" strokeWidth="3"/><path d="M6 18h36M16 28h16M16 34h8" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'Agile Collaboration', desc: 'Our teams work in tight collaboration with your stakeholders, adapting quickly and communicating clearly throughout.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="white" strokeWidth="3"/><path d="M24 14v10l7 4" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>), title: 'Long-Term Partnership', desc: 'We build lasting relationships, acting as a trusted extension of your team well beyond initial project delivery.' },
    ],
  },
  {
    icon: '🚀',
    title: 'Innovation & Quality',
    desc: 'We leverage cutting-edge technologies and best practices to deliver innovative solutions with exceptional quality standards.',
    img: innovationImg,
    modalItems: [
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 6c-8 0-14 7-14 14 0 5 3 9 6 11v5h16v-5c3-2 6-6 6-11 0-7-6-14-14-14z" stroke="white" strokeWidth="3" strokeLinejoin="round"/><path d="M18 36h12M20 40h8" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'R&D Investment', desc: 'We continually invest in research and emerging technologies to bring you solutions that keep you ahead of the curve.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" stroke="white" strokeWidth="3"/><path d="M24 8v4M24 36v4M8 24h4M36 24h4M13 13l3 3M35 13l-3 3M13 35l3-3M35 35l-3-3" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'Cutting-Edge Tech', desc: 'From AI to cloud-native architectures, we adopt the right modern technologies to solve your most complex challenges.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M10 24l8 8 20-16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8" width="36" height="32" rx="3" stroke="white" strokeWidth="3"/></svg>), title: 'Quality Assurance', desc: 'Rigorous QA processes and coding standards are embedded in every stage of our development lifecycle.' },
      { icon: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 40V24l8-16 8 8 8-8 8 16v16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 40h32" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>), title: 'Continuous Evolution', desc: 'Our solutions evolve with your business — we build for today while architecting for what comes next.' },
    ],
  },
];

/* ─── SERVICES GRID COMPONENT ─────────────────────────── */
function ServicesGrid() {
  const navigate = useNavigate();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 });

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <section className="services-grid-section" ref={gridRef}>
      <div className="container">
        <div className={`services-grid-header anim anim-up ${gridVisible ? 'anim-visible' : ''}`}>
          <h2 className="services-grid-title">Our Services</h2>
          <p className="services-grid-subtitle">
            Comprehensive technology solutions tailored to accelerate your business growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-card anim anim-up anim-d${i + 1} ${gridVisible ? 'anim-visible' : ''}`}
              onClick={() => handleServiceClick(service.route)}
              style={{ '--service-color': service.color }}
            >
              <div className="service-card-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>
              <div className="service-card-arrow">
                <ChevronRight size={20} />
              </div>
              <div className="service-card-glow" style={{ background: service.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY MODAL - WITH BACKGROUND IMAGE ───────────────── */
function WhyModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div 
        className="exp-modal why-modal-with-bg" 
        onClick={e => e.stopPropagation()}
        style={{ 
          backgroundImage: `linear-gradient(145deg, rgba(30,64,175,0.92) 0%, rgba(21,101,192,0.95) 50%, rgba(30,58,138,0.92) 100%), url("${item.img}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <button className="exp-modal-close" onClick={onClose}>✕</button>
        <h3 className="exp-modal-title">{item.title}</h3>
        <div className="exp-modal-grid">
          {item.modalItems.map((m, i) => (
            <div key={i} className="exp-modal-col">
              <div className="exp-modal-icon">{m.icon}</div>
              <h4 className="exp-modal-item-title">{m.title}</h4>
              <p className="exp-modal-item-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══ CONTACT FORM ONLY - NO INFO CARDS ═══ */
function ContactFormOnly() {
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

  const servicesList = [
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
      <section className="contact-form-section" id="connect">
        <div className="contact-success">
          <div className="contact-success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
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
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-section" id="connect">
      <div className="contact-form-section__inner">
        <div className="contact-form-wrapper">
          <div className="contact-form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
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
                  {servicesList.map((service) => (
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
                    Send Message <Send size={18} />
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

/* ─── MAIN COMPONENT ──────────────────────────────────── */
export default function ServicePages() {
  const [activeWhyModal, setActiveWhyModal] = useState(null);

  // Scroll animations for sections
  const [heroRef, heroVisible] = useScrollAnimation();
  const [whyRef, whyVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="services-page">

      {/* ══ 1. HERO ══ */}
      <section className="srv-hero" ref={heroRef}>
        <div className="srv-hero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&fit=crop)' }} />
        <div className="srv-hero__overlay" />
        <div className="srv-hero__content">
          <div className="srv-hero__inner">
            <div className={`srv-hero__text anim anim-up ${heroVisible ? 'anim-visible' : ''}`}>
              <h1 className="srv-hero__title">Services That Drive Results</h1>
              <p className="srv-hero__desc">
                Comprehensive solutions designed to accelerate your business growth, improve efficiency,
                and achieve measurable success with innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. SERVICES GRID ══ */}
      <ServicesGrid />

      {/* ══ 3. WHY CHOOSE US ══ */}
      <section className="srv-why" ref={whyRef}>
        <div className="container">
          <h2 className={`why-heading anim anim-up ${whyVisible ? 'anim-visible' : ''}`}>Why Choose Us?</h2>
          <div className="why-grid">
            {whyCards.map((card, i) => (
              <div key={i} className={`why-card anim anim-up anim-d${i + 1} ${whyVisible ? 'anim-visible' : ''}`} style={{ backgroundImage: `url(${card.img})` }}>
                <div className="why-card__overlay" />
                <div className="why-card__content">
                  <div className="why-card__icon">{card.icon}</div>
                  <h4 className="why-card__title">{card.title}</h4>
                  <p className="why-card__desc">{card.desc}</p>
                  <div className="why-arrow-btn" onClick={() => setActiveWhyModal(card)} title="Learn More">›</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeWhyModal && <WhyModal item={activeWhyModal} onClose={() => setActiveWhyModal(null)} />}

      {/* ══ 4. CONTACT FORM ONLY - NO INFO CARDS ══ */}
      <ContactFormOnly />

    </div>
  );
}