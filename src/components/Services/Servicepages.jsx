import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, X, Code, Cloud, Smartphone, Settings, BarChart3, Palette, Shield, Layers, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
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

/* ─── SUCCESS STORIES DATA ──────────────────────────── */
const stories = [
  {
    id: 1,
    client: 'Samerra Group',
    initials: 'SG',
    location: 'Saudi Arabia',
    industry: 'Real Estate Development',
    challenge:
      'Samerra Group managed thousands of property leads across multiple projects using disconnected spreadsheets and manual follow-ups, causing high lead leakage and no visibility into pipeline health.',
    solution:
      'End-to-end Salesforce Sales Cloud implementation tailored for real estate — custom property objects, automated lead routing by project, and a bespoke pipeline dashboard for C-suite reporting.',
    results: [
      { metric: '68%',  label: 'Reduction in lead leakage' },
      { metric: '3x',   label: 'Faster deal closure' },
      { metric: '100%', label: 'Pipeline visibility' },
    ],
  },
  {
    id: 2,
    client: 'Adissa',
    initials: 'AD',
    location: 'UAE',
    industry: 'Property Sales & Brokerage',
    challenge:
      "Adissa's sales agents were working from siloed data, with no unified view of client interactions, property preferences, or follow-up history — leading to duplicate outreach and lost trust.",
    solution:
      "Salesforce CRM deployment with a 360° client profile, automated WhatsApp and email follow-up sequences, and real-time agent performance dashboards synced to Adissa's property inventory.",
    results: [
      { metric: '45%',     label: 'Increase in conversions' },
      { metric: '2 weeks', label: 'Go-live timeline' },
      { metric: '90%',     label: 'Agent adoption rate' },
    ],
  },
  {
    id: 3,
    client: 'Casagrand Dubai',
    initials: 'CD',
    location: 'Dubai, UAE',
    industry: 'Luxury Real Estate',
    challenge:
      'Casagrand Dubai was expanding rapidly but lacked a scalable CRM to manage international buyers, off-plan units, and complex multi-stage approval workflows across their Dubai portfolio.',
    solution:
      'Salesforce implementation with multi-currency support, off-plan unit tracking, buyer journey automation, and integration with Dubai Land Department workflows for seamless compliance.',
    results: [
      { metric: '240Cr+',   label: 'Pipeline managed' },
      { metric: '55%',      label: 'Faster approvals' },
      { metric: '4 months', label: 'Full deployment' },
    ],
  },
];

const headerStats = [
  { value: '3+',   label: 'Enterprise Clients' },
  { value: '98%',  label: 'Satisfaction Rate' },
  { value: '240Cr+', label: 'Pipeline Managed' },
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

/* ─── CONTACT FORM TREES ─────────────────────────────── */
const TreeLeft = () => (
  <svg className="contact-form-section__tree-left" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="90,10 140,140 40,140" fill="#4aac8a" opacity="0.55" />
    <polygon points="90,60 150,200 30,200" fill="#3d9a7a" opacity="0.65" />
    <rect x="80" y="200" width="20" height="50" fill="#5c3d1e" opacity="0.70" />
    <polygon points="40,60 85,170 -5,170" fill="#52b896" opacity="0.75" />
    <polygon points="40,110 90,230 -10,230" fill="#45a688" opacity="0.80" />
    <rect x="30" y="228" width="18" height="35" fill="#6b4226" opacity="0.75" />
  </svg>
);

const TreeRight = () => (
  <svg className="contact-form-section__tree-right" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="90,10 140,140 40,140" fill="#4aac8a" opacity="0.55" />
    <polygon points="90,60 150,200 30,200" fill="#3d9a7a" opacity="0.65" />
    <rect x="80" y="200" width="20" height="50" fill="#5c3d1e" opacity="0.70" />
    <polygon points="140,60 185,170 95,170" fill="#52b896" opacity="0.75" />
    <polygon points="140,110 190,230 90,230" fill="#45a688" opacity="0.80" />
    <rect x="130" y="228" width="18" height="35" fill="#6b4226" opacity="0.75" />
  </svg>
);

function ConnectFormSection() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: '',
  });
  const [notRobot, setNotRobot] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!notRobot) { alert('Please confirm you are not a robot.'); return; }
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: '' });
    setNotRobot(false);
  };

  return (
    <section className="contact-form-section" id="connect">
      <TreeLeft />
      <TreeRight />
      <div className="contact-form-section__inner">
        <h2 className="contact-form-section__heading">Connect with us</h2>
        <p className="contact-form-section__sub">Ready to elevate your business?</p>
        <p className="contact-form-section__tagline">Contact us today to discuss how we can help you achieve your goals!</p>
        <div className="connect-form">
          <div className="connect-form__row">
            <div className="connect-form__group">
              <input className="connect-form__input" type="text" name="firstName" placeholder="First Name*" required value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="connect-form__group">
              <input className="connect-form__input" type="text" name="lastName" placeholder="Last Name*" required value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="connect-form__group">
            <input className="connect-form__input" type="email" name="email" placeholder="Email Address*" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="connect-form__row">
            <div className="connect-form__group">
              <input className="connect-form__input" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="connect-form__group">
              <input className="connect-form__input" type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className="connect-form__group">
            <select className="connect-form__select" name="reason" value={formData.reason} onChange={handleChange}>
              <option value="" disabled>Reason For Contact</option>
              <option>Service Inquiry</option>
              <option>Partnership</option>
              <option>Salesforce Implementation</option>
              <option>Consulting Services</option>
              <option>General Inquiry</option>
            </select>
          </div>
          <div className="connect-form__group">
            <textarea className="connect-form__textarea" name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} />
          </div>
          <div className="connect-form__recaptcha-row">
            <label className="connect-form__recaptcha">
              <input type="checkbox" checked={notRobot} onChange={(e) => setNotRobot(e.target.checked)} />
              I&apos;m not a robot
            </label>
            <button type="button" className="connect-form__submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ SUCCESS STORIES SECTION ═══ */
function SuccessStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 });
  const [tabsRef,   tabsVisible]   = useScrollAnimation({ threshold: 0.1 });
  const [cardRef,   cardVisible]   = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className="ss-section">
      <div className="ss-section-inner">

        {/* Header */}
        <div ref={headerRef} className="ss-header">
          <div className="ss-header-left">
            <div className={`ss-eyebrow anim anim-up anim-d1 ${headerVisible ? 'anim-visible' : ''}`}>
              Client Results
            </div>
            <h2 className={`ss-heading anim anim-up anim-d2 ${headerVisible ? 'anim-visible' : ''}`}>
              Success<br /><span className="highlight">Stories</span>
            </h2>
          </div>

          <div className="ss-header-right">
            <p className={`ss-subhead anim anim-up anim-d3 ${headerVisible ? 'anim-visible' : ''}`}>
              Real outcomes from Salesforce implementations built for real estate
              professionals. See how we've helped companies like yours achieve
              measurable results.
            </p>
            <div className={`ss-header-stats anim anim-up anim-d4 ${headerVisible ? 'anim-visible' : ''}`}>
              {headerStats.map((s) => (
                <div key={s.label} className="ss-stat">
                  <span className="ss-stat-value">{s.value}</span>
                  <span className="ss-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="ss-tabs">
          {stories.map((s, i) => (
            <button
              key={s.id}
              className={`ss-tab anim anim-up anim-d${i + 1} ${tabsVisible ? 'anim-visible' : ''} ${i === active ? 'ss-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="ss-tab-initials">{s.initial}</span>
              {s.client}
            </button>
          ))}
        </div>

        {/* Card */}
        <div ref={cardRef} className={`ss-card anim anim-up ${cardVisible ? 'anim-visible' : ''}`}>
          <div className="ss-card-header">
            <div className="ss-card-header-left">
              <div className="ss-avatar">{story.initials}</div>
              <div>
                <h3 className="ss-client-name">{story.client}</h3>
                <span className="ss-badge">
                  {story.industry} · {story.location}
                </span>
              </div>
            </div>
            <div className="ss-quote-mark">"</div>
          </div>

          <div className="ss-grid">
            <div className="ss-block">
              <div className="ss-block-label">Challenge</div>
              <p className="ss-block-text">{story.challenge}</p>
            </div>
            <div className="ss-block">
              <div className="ss-block-label">Solution</div>
              <p className="ss-block-text">{story.solution}</p>
            </div>
          </div>

          <div className="ss-metrics">
            {story.results.map((r) => (
              <div key={r.label} className="ss-metric">
                <div className="ss-metric-value">{r.metric}</div>
                <div className="ss-metric-label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className={`ss-sf-note anim anim-fade anim-d2 ${cardVisible ? 'anim-visible' : ''}`}>
          <Zap size={16} />
          All implementations delivered on Salesforce Sales Cloud — certified and production-ready for enterprise scale.
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
  const connectRef = useScrollAnimation({ threshold: 0.1 })[0];

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

      {/* ══ 4. SUCCESS STORIES ══ */}
      <SuccessStories />

      {/* ══ 5. CONNECT FORM ══ */}
      <div ref={connectRef}>
        <ConnectFormSection />
      </div>

    </div>
  );
}