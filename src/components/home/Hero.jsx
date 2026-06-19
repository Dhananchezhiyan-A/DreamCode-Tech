import React, { useState, useEffect } from "react";
import "./Hero.css";

/* ── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* MAIN HERO SECTION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="hero-main">
        {/* Decorative blobs */}
        <div className="hero-blob hero-blob--1" />
        <div className="hero-blob hero-blob--2" />
        <div className="hero-blob hero-blob--3" />

        {/* Dot grid overlay */}
        <div className="hero-dots" aria-hidden="true" />

        {/* Content Grid */}
        <div className="hero-container">
          {/* ── Left: Copy ───────────────────────────────── */}
          <div className="hero-copy">
            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span className="eyebrow-pulse" />
              Salesforce Consulting Partner
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Transform Your Business<br />
              with <span className="headline-accent">Expert Salesforce</span><br />
              Solutions
            </h1>

            {/* Subheading */}
            <p className="hero-sub">
              From implementation to ongoing support, we deliver measurable
              results — faster adoption, deeper insights, and real ROI for
              enterprises of every size.
            </p>

            {/* CTA buttons */}
            <div className="hero-actions">
              <button className="btn-primary">
                Get Your Free Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="hero-trust">
              <span className="trust-item">✦ Salesforce Certified</span>
              <span className="trust-divider" />
              <span className="trust-item">✦ ISO 27001</span>
              <span className="trust-divider" />
              <span className="trust-item">✦ 5-Star Partner</span>
            </div>
          </div>

          {/* ── Right: Salesforce Ecosystem Wheel ─────────────────────────── */}
          <div className="hero-visual">
            {/* Glow ring behind ecosystem card */}
            <div className="visual-glow" />
            <div className="ecosystem-card">
              <img 
                src="/images/hero.png" 
                alt="Salesforce Ecosystem Overview"
                className="ecosystem-image"
                onError={(e) => {
                  console.error("Image failed to load. Check the file path.");
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}