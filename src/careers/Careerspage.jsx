import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import teamImage from '../assests/images/team.jpeg';
import './Careerspage.css';

const departments = ['All', 'Salesforce', 'IT', 'Telecommunications'];

const openings = [
    // No current openings — add future jobs here
    // Example format:
    // { id: 'sf-1', title: 'Senior Salesforce Developer', location: 'Hyderabad, India', type: 'Full time', department: 'Salesforce' },
];

const DEPT_ICONS = {
    'Salesforce': '☁️',
    'IT': '💻',
    'Telecommunications': '📡',
};


/* ── CAREERS FORM COMPONENT ── */
function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    linkedin: '',
    message: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData for file upload
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    // Simulate API call - replace with actual backend in production
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    setSubmitted(true);
  };

  const positions = [
    'Salesforce Developer',
    'Salesforce Administrator',
    'Software Engineer',
    'UI/UX Designer',
    'Project Manager',
    'Business Analyst',
    'QA Engineer',
    'Other'
  ];

  const experienceLevels = [
    'Fresher (0-1 years)',
    'Junior (1-3 years)',
    'Mid-level (3-5 years)',
    'Senior (5-8 years)',
    'Lead (8+ years)'
  ];

  if (submitted) {
    return (
      <div className="careers-form-success">
        <div className="careers-success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3>Thank You!</h3>
        <p>Your resume has been submitted successfully. Our HR team will review your application and get back to you within 5-7 business days.</p>
        <button 
          className="careers-form__submit"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              firstName: '', lastName: '', email: '', phone: '',
              position: '', experience: '', linkedin: '', message: '', resume: null
            });
            setFileName('');
          }}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="careers-form">
      <div className="careers-form__row">
        <div className="careers-form__group">
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
        <div className="careers-form__group">
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

      <div className="careers-form__row">
        <div className="careers-form__group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@email.com"
          />
        </div>
        <div className="careers-form__group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="careers-form__row">
        <div className="careers-form__group">
          <label htmlFor="position">Position Interested In *</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position...</option>
            {positions.map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
        <div className="careers-form__group">
          <label htmlFor="experience">Experience Level *</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">Select experience...</option>
            {experienceLevels.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="careers-form__group">
        <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>

      <div className="careers-form__group">
        <label htmlFor="message">Cover Letter / Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          placeholder="Tell us about yourself, your skills, and why you want to join our team..."
        />
      </div>

      <div className="careers-form__group">
        <label htmlFor="resume">Upload Resume * (PDF, DOC, DOCX)</label>
        <div className="careers-file-upload">
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="careers-file-input"
          />
          <label htmlFor="resume" className="careers-file-label">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            {fileName || 'Choose File'}
          </label>
          {fileName && <span className="careers-file-name">{fileName}</span>}
        </div>
      </div>

      <div className="careers-form__submit-wrapper">
        <button 
          type="submit" 
          className="careers-form__submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="careers-spinner" />
              Submitting...
            </>
          ) : (
            <>Submit Application →</>
          )}
        </button>
      </div>

      <p className="careers-form__note">
        By submitting, you agree to our privacy policy. Your information will be kept confidential and used solely for recruitment purposes.
      </p>
    </form>
  );
}

const CareersPage = () => {
    const [filter, setFilter] = useState('All');
    const [showBackToTop, setShowBackToTop] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filteredOpenings = useMemo(
        () => (filter === 'All' ? openings : openings.filter((job) => job.department === filter)),
        [filter],
    );

    const groupedOpenings = useMemo(() => {
        const groups = filteredOpenings.reduce((acc, job) => {
            if (!acc[job.department]) acc[job.department] = [];
            acc[job.department].push(job);
            return acc;
        }, {});
        return departments
            .filter((d) => d !== 'All')
            .filter((d) => groups[d]?.length)
            .map((d) => ({ department: d, jobs: groups[d] }));
    }, [filteredOpenings]);

    const scrollToOpenings = () =>
        document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="careers-page">

            {/* ── HERO ── */}
            <header className="careers-hero">
                <div className="careers-hero__blobs">
                    <div className="careers-blob careers-blob--1" />
                    <div className="careers-blob careers-blob--2" />
                </div>
                <div className="careers-hero__dots" aria-hidden="true" />
                <div
                    className="careers-hero__bg"
                    style={{ backgroundImage: `url(${teamImage})` }}
                    aria-hidden="true"
                />
                <div className="careers-hero__content">
                    <div className="careers-hero__eyebrow">
                        <span className="careers-eyebrow-pulse" />
                        We're Hiring
                    </div>
                    <h1>We're more than just a workplace.<br /><span className="careers-hero__accent">We're a family.</span></h1>
                    <p className="careers-hero__desc">
                        We know that finding a meaningful and rewarding job can be a long journey. Our goal
                        is to make that process as easy as possible — and to create a work environment
                        you'll look forward to every day. Start your journey with us.
                    </p>
                    <div className="careers-hero__actions">
                        <button type="button" className="careers-hero__cta" onClick={scrollToOpenings}>
                            View Openings
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    {/* Mini stats */}
                    <div className="careers-hero__stats">
                        <div className="careers-hero__stat"><strong>150+</strong><span>Team Members</span></div>
                        <div className="careers-hero__stat-divider" />
                        <div className="careers-hero__stat"><strong>6+</strong><span>Years Growing</span></div>
                        <div className="careers-hero__stat-divider" />
                        <div className="careers-hero__stat"><strong>3</strong><span>Locations</span></div>
                    </div>
                </div>
            </header>

            {/* ── WHY JOIN US ── */}
            <section className="careers-why">
                <div className="careers-why__inner">
                    <h2 className="careers-section-title">Why Join Us?</h2>
                    <p className="careers-section-sub">Be part of a team that values growth, innovation, and people</p>
                    <div className="careers-why__grid">
                        {[
                            { icon: '🚀', title: 'Fast Growth',       desc: 'Accelerate your career with real ownership and mentorship from day one.' },
                            { icon: '🌍', title: 'Global Projects',   desc: 'Work on Salesforce projects for leading global enterprises across industries.' },
                            { icon: '🤝', title: 'Great Culture',     desc: 'We remove red tape — communication flows freely across all levels.' },
                            { icon: '🏅', title: 'Certifications',    desc: 'We invest in your learning with paid Salesforce certifications and training.' },
                        ].map((item) => (
                            <div key={item.title} className="careers-why__card">
                                <div className="careers-why__icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUBMIT RESUME ── */}
            <section id="openings" className="careers-openings">
                <div className="careers-openings__inner">
                    <div className="careers-openings__header">
                        <div>
                            <h2 className="careers-section-title">Submit Your Resume</h2>
                            <p className="careers-section-sub">We are always looking for great talent. Send us your details and we will reach out when a suitable opportunity opens.</p>
                        </div>
                    </div>

                    <CareersForm />
                </div>
            </section>

            {/* ── BACK TO TOP ── */}
            {showBackToTop && (
                <button type="button" className="careers-back-to-top" onClick={scrollToTop} aria-label="Back to top">
                    ↑
                </button>
            )}
        </div>
    );
};

export default CareersPage;