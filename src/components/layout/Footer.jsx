import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import logo from '../../assests/images/logo.png';

// ── Icons ───────────────────────────────────────────────────────
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 100-4 2 2 0 000 4z"/>
  </svg>
);

const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────

export default function Footer() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const [ctaRef,  ctaVisible]  = useScrollAnimation({ threshold: 0.15 });
  const [col1Ref, col1Visible] = useScrollAnimation({ threshold: 0.1 });
  const [col2Ref, col2Visible] = useScrollAnimation({ threshold: 0.1 });
  const [col3Ref, col3Visible] = useScrollAnimation({ threshold: 0.1 });
  const [col4Ref, col4Visible] = useScrollAnimation({ threshold: 0.1 });
  const [botRef,  botVisible]  = useScrollAnimation({ threshold: 0.5 });

  return (
    <footer className="footer">

      {/* ── CTA Banner — ONLY on home page ─────────────────────── */}
      {isHomePage && (
        <div ref={ctaRef} className={`footer-cta anim anim-up ${ctaVisible ? 'anim-visible' : ''}`}>
          <div className="footer-cta-text">
            <p className="footer-cta-eyebrow">Ready to transform your CRM?</p>
            <h2 className="footer-cta-heading">
              Let's build something<br />
              <span>exceptional together.</span>
            </h2>
          </div>
          <div className="footer-cta-actions">
            <Link to="/contact" className="footer-cta-btn footer-cta-btn--primary">
              Book a Free Demo <IconArrow />
            </Link>
          </div>
        </div>
      )}

      {/* ── Top grid ───────────────────────────────────────────── */}
      <div className="footer-top">

        {/* Col 1 — Brand + nav links */}
        <div ref={col1Ref} className={`footer-col footer-col--brand anim anim-up anim-d1 ${col1Visible ? 'anim-visible' : ''}`}>
          <div className="footer-logo">
            <img src={logo} alt="DreamCode Technologies" className="footer-logo-img" />
          </div>

          <nav className="footer-col--nav">
            <Link to="/about" className="footer-nav-link">About Us</Link>
            <Link to="/services" className="footer-nav-link">Explore Our Services</Link>
            <Link to="/partner" className="footer-nav-link">Partners</Link>
            <Link to="/career" className="footer-nav-link">Careers</Link>
          </nav>
        </div>

        {/* Col 2 — Popular Links */}
        <div ref={col2Ref} className={`footer-col anim anim-up anim-d2 ${col2Visible ? 'anim-visible' : ''}`}>
          <p className="footer-col-heading">Popular Links</p>
          <ul className="footer-list">
            <li><Link to="/services" className="footer-link">Engagement Model</Link></li>
            <li><Link to="/services" className="footer-link">Education Cloud</Link></li>
            <li><Link to="/services" className="footer-link">Agentforce</Link></li>
            <li><Link to="/services" className="footer-link">Financial Services Cloud</Link></li>
            <li><Link to="/services" className="footer-link">Health Cloud</Link></li>
            <li><Link to="/services" className="footer-link">Public Sector</Link></li>
            <li><Link to="/services" className="footer-link">Financial Services</Link></li>
            <li><Link to="/services" className="footer-link">Healthcare</Link></li>
          </ul>
        </div>

        {/* Col 3 — Resources + Contact Us */}
        <div ref={col3Ref} className={`footer-col anim anim-up anim-d3 ${col3Visible ? 'anim-visible' : ''}`}>
          <p className="footer-col-heading">Resources</p>
          <ul className="footer-list">
            <li><Link to="/resources" className="footer-link">Featured</Link></li>
            <li><Link to="/resources" className="footer-link">All Blogs</Link></li>
            <li><Link to="/partner" className="footer-link">Partners</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>

          <p className="footer-col-heading footer-col-heading--spaced">Contact Us</p>
          <ul className="footer-list">
            <li>
              <span className="footer-contact-label">Email:</span>
              <a href="mailto:info@dreamcodetech.com" className="footer-link footer-link--teal">
                info@dreamcodetech.com
              </a>
            </li>
            <li>
              <span className="footer-contact-label">Website:</span>
              <a href="https://dreamcodetech.com" target="_blank" rel="noreferrer" className="footer-link footer-link--teal">
                https://dreamcodetech.com
              </a>
            </li>
            <li>
              <span className="footer-contact-label">Phone:</span>
              <a href="tel:+918220627183" className="footer-link footer-link--teal">
                +91 8667608772
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Company Logo Only */}
        <div ref={col4Ref} className={`footer-col footer-col--logo-only anim anim-up anim-d4 ${col4Visible ? 'anim-visible' : ''}`}>
          <div className="footer-logo-large">
            <img src={logo} alt="DreamCode Technologies" className="footer-logo-large-img" />
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      {/* ── Disclaimer ─────────────────────────────────────────── */}
      <div className="footer-disclaimer">
        <p className="footer-disclaimer-title">Disclaimer</p>
        <p className="footer-disclaimer-text">
          I authorize DreamCode Technologies and its representatives to Call, SMS, Email, RCS, or WhatsApp me to provide information about their products and offers. This consent overrides any registration for DNC / NDNC.
        </p>
      </div>

      <div className="footer-divider" />

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div ref={botRef} className={`footer-bottom anim anim-fade ${botVisible ? 'anim-visible' : ''}`}>
        <p className="footer-copy">
          © 2026 DreamCode Technologies, Inc. &nbsp;|&nbsp;
          <a href="/privacy" className="footer-privacy">Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="/terms" className="footer-privacy">Terms and Conditions</a>
        </p>
        <div className="footer-bottom-right">
          <a
            href="https://www.linkedin.com/company/dreamcode-technologies"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a
            href="https://twitter.com/dreamcodetech"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
            aria-label="Twitter / X"
          >
            <IconTwitter />
          </a>
        </div>
      </div>

    </footer>
  );
}