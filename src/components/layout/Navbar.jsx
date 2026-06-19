import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assests/images/logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Custom Software Development", to: "/services/custom-software" },
      { label: "Mobile App Development",    to: "/services/mobile-app" },
      { label: "UI/UX Development",         to: "/services/ui-ux" },
      { label: "Cloud Services",              to: "/services/cloud" },
      { label: "Application Support",         to: "/services/app-support" },
      { label: "Dedicated Teams",             to: "/services/dedicated-teams" },
      { label: "Sales Cloud",                 to: "/services/sales-cloud" },
      { label: "Service Cloud",               to: "/services/service-cloud" },
      { label: "Marketing Cloud",             to: "/services/marketing-cloud" },
      { label: "Platform & Integration",      to: "/services/platform-integration" },
      { label: "Analytics & AI",              to: "/services/analytics-ai" },
      { label: "Support & Maintenance",       to: "/services/support-maintenance" },
    ],
  },
  { label: "Resources", to: "/resources" },
  { label: "Career",   to: "/career" },
  { label: "Partner",  to: "/partner" },
  { label: "Contact",  to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const isServicesActive = () => location.pathname.startsWith("/services");

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="DCT Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link) => {
          const hasChildren = link.children && link.children.length > 0;

          if (hasChildren) {
            return (
              <li
                key={link.label}
                className="nav-item-dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={isServicesActive() ? "nav-link active" : "nav-link"}
                  onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      setMobileServicesOpen(!mobileServicesOpen);
                    }
                  }}
                >
                  <Link
                    to={link.to}
                    className="nav-link-main"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        setMobileServicesOpen(!mobileServicesOpen);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {link.label}
                    <svg
                      className={`chevron ${servicesOpen || mobileServicesOpen ? "open" : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </Link>
                  {isServicesActive() && <span className="nav-underline" />}
                </div>

                {/* Mega Dropdown */}
                <div
                  className={`mega-dropdown ${
                    servicesOpen || mobileServicesOpen ? "open" : ""
                  }`}
                >
                  <div className="mega-dropdown-inner">
                    <div className="mega-dropdown-header">
                      <h4>Our Services</h4>
                      <p>Comprehensive solutions for your digital transformation</p>
                    </div>
                    <div className="mega-dropdown-grid">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className={`mega-link ${
                            isActive(child.to) ? "active" : ""
                          }`}
                          onClick={() => {
                            setServicesOpen(false);
                            setMobileServicesOpen(false);
                            setMenuOpen(false);
                          }}
                        >
                          <span className="mega-link-dot"></span>
                          <span className="mega-link-text">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={link.label}>
              <Link
                to={link.to}
                className={isActive(link.to) ? "nav-link active" : "nav-link"}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {isActive(link.to) && <span className="nav-underline" />}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA Button - Now links to Contact page */}
      <div className="navbar-cta">
        <Link to="/contact">
          <button className="btn-contact">Contact Us</button>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}