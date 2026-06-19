import React, { useState } from 'react';
import './sucess.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Zap } from 'lucide-react';

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

export default function SuccessStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 });
  const [tabsRef,   tabsVisible]   = useScrollAnimation({ threshold: 0.1 });
  const [cardRef,   cardVisible]   = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className="ss-section">
      <div className="ss-section-inner">

        {/* Header — two-column: heading left, subhead + stats right */}
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
              <span className="ss-tab-initials">{s.initials}</span>
              {s.client}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className={`ss-card anim anim-up ${cardVisible ? 'anim-visible' : ''}`}
        >
          {/* Card Header */}
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

          {/* Challenge / Solution */}
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

          {/* Metrics */}
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