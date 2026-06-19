import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

// Import hero background image
import heroBg from '../assests/images/contact-banner.jpeg'; // Add your image here

// ── Icons (inline SVG) ───────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────

export default function Contact() {
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
    // Simulate API call - replace with your actual API
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
      <div className="contact-page">
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
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* ── Hero Section with Background Image ───────────────────────── */}
      <section 
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 110, 86, 0.92) 0%, rgba(29, 158, 117, 0.88) 50%, rgba(15, 110, 86, 0.92) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="contact-hero-content">
          <p className="contact-hero-eyebrow">Get In Touch</p>
          <h1 className="contact-hero-title">Let's Start a Conversation</h1>
          <p className="contact-hero-subtitle">
            Ready to transform your business with Salesforce? Reach out and our experts will guide you through every step.
          </p>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────── */}
      <section className="contact-main">
        <div className="contact-container">
          
          {/* ── Contact Info Cards ───────────────────────────── */}
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <IconPhone />
              </div>
              <h3>Phone</h3>
              <a href="tel:+918220627183">+91 86676 08772</a>
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
              <p>Chennai Tamilnadu India</p>
              <span>Remote & On-site Support</span>
            </div>
          </div>

          {/* ── Contact Form ───────────────────────────────────── */}
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

      {/* ── Locations Section ────────────────────────────── */}
      <section className="contact-locations">
        <div className="contact-container">
          <h2 className="contact-section-title">Our Presence</h2>
          <div className="contact-locations-grid">
            <div className="contact-location-card">
              <div className="contact-location-flag">🇮🇳</div>
              <h3>
Millenia towers
Campus 3B, 6th Floor,11 MGR Main Road Kandhanchavadi
Perungudi, Chennai, Tamil Nadu 600096 India</h3>
              
              <span>Serving clients across APAC & Middle East</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}