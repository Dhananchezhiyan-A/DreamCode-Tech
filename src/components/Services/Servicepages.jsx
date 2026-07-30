import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Cloud, Smartphone, Settings, BarChart3, Palette, Shield, Layers, Home, ChevronRight, CheckCircle2, Send } from 'lucide-react';
import '../Contact/ContactSection.css';
import './Servicepages.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* ─── SERVICES DATA ──────────────────────────────────── */
const services = [
  {
    id: 1,
    title: 'Real Estate Services',
    shortDesc: 'Technology-driven real estate solutions including property management platforms, listing portals, and CRM tools.',
    icon: <Home size={32} />,
    color: '#14B8A6',
    route: '/services/real-estate'
  },
  {
    id: 2,
    title: 'Custom Software Development',
    shortDesc: 'Tailored software solutions built to address your unique business challenges and drive digital transformation.',
    icon: <Code size={32} />,
    color: '#0EA5E9',
    route: '/services/custom-software'
  },
  {
    id: 3,
    title: 'Salesforce Services',
    shortDesc: 'End-to-end Salesforce implementation, customization, and optimization to maximize your CRM investment.',
    icon: <Cloud size={32} />,
    color: '#00A1E0',
    route: '/services/salesforce'
  },
  {
    id: 4,
    title: 'Zoho Services',
    shortDesc: 'Complete Zoho ecosystem setup, customization, and integration for streamlined business operations.',
    icon: <Layers size={32} />,
    color: '#E42527',
    route: '/services/zoho'
  },
  {
    id: 5,
    title: 'Integrations',
    shortDesc: 'Seamless connectivity between your systems, applications, and data sources for unified workflows.',
    icon: <Settings size={32} />,
    color: '#8B5CF6',
    route: '/services/integrations'
  },
  {
    id: 6,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <Smartphone size={32} />,
    color: '#10B981',
    route: '/services/mobile-app'
  },
  {
    id: 7,
    title: 'Application Maintenance',
    shortDesc: 'Proactive support and maintenance to keep your applications running at peak performance.',
    icon: <CheckCircle2 size={32} />,
    color: '#F59E0B',
    route: '/services/maintenance'
  },
  {
    id: 8,
    title: 'Data Analytics',
    shortDesc: 'Transform raw data into actionable insights with advanced analytics and visualization solutions.',
    icon: <BarChart3 size={32} />,
    color: '#EC4899',
    route: '/services/data-analytics'
  },
  {
    id: 9,
    title: 'UI/UX Design',
    shortDesc: 'User-centered design that creates intuitive, engaging, and visually stunning digital experiences.',
    icon: <Palette size={32} />,
    color: '#6366F1',
    route: '/services/ui-ux'
  },
  {
    id: 10,
    title: 'Network, Infrastructure & Security',
    shortDesc: 'Robust infrastructure and security solutions to protect your business and ensure continuity.',
    icon: <Shield size={32} />,
    color: '#EF4444',
    route: '/services/infrastructure'
  }
];

/* ─── SERVICES GRID COMPONENT ─────────────────────────── */
function ServicesGrid() {
  const navigate = useNavigate();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 });

  const handleServiceClick = () => {
    navigate('/contact');
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
    'Real Estate Solutions',
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
  // Scroll animations for sections
  const [heroRef, heroVisible] = useScrollAnimation();

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

      {/* ══ 3. CONTACT FORM ONLY - NO INFO CARDS ══ */}
      <ContactFormOnly />

    </div>
  );
}