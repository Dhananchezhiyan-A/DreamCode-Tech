import React, { useState } from 'react';
import './WhyChooseUs.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const benefits = [
  {
    id: 1,
    number: '01',
    title: 'Proven Track Record',
    description: '3+ years of consistent excellence',
    icon: '⚡',
    dotColor: '#1a50d4',
    numGrad: ['#1246c8', '#4b8fe8'],
    pillStroke: '#a5c0ff',
    pillFill: ['#e8f0ff', '#c7d9ff'],
    textColor: '#3a5cbf',
  },
  {
    id: 2,
    number: '02',
    title: 'Measurable Results',
    description: '15 successful projects delivered',
    icon: '📈',
    dotColor: '#2060e0',
    numGrad: ['#1e5ae8', '#5a9aee'],
    pillStroke: '#90b8f8',
    pillFill: ['#ddeeff', '#b8d8ff'],
    textColor: '#3a5cbf',
  },
  {
    id: 3,
    number: '03',
    title: 'Certified & Secure',
    description: 'ISO 9001, SOC 2, ISO 27001',
    icon: '🛡️',
    dotColor: '#0e7dd4',
    numGrad: ['#0e7dd4', '#3ab0f0'],
    pillStroke: '#7dd0f8',
    pillFill: ['#d4efff', '#a8dcff'],
    textColor: '#3a5cbf',
  },
  {
    id: 4,
    number: '04',
    title: 'Innovation Leaders',
    description: 'Multiple industry awards',
    icon: '🚀',
    dotColor: '#0284c7',
    numGrad: ['#0284c7', '#22d0f0'],
    pillStroke: '#5ecef8',
    pillFill: ['#c8f0ff', '#96e0ff'],
    textColor: '#3a5cbf',
  },
  {
    id: 5,
    number: '05',
    title: 'Expert Team',
    description: ' certified specialists',
    icon: '🏅',
    dotColor: '#0ea5e9',
    numGrad: ['#0ea5e9', '#06d0d4'],
    pillStroke: '#7dd3fc',
    pillFill: ['#d4efff', '#a8dcff'],
    textColor: '#3a5cbf',
  },
];

// Pre-calculated junction points on circle edge (cx=152,cy=250,r=112)
// and dot positions (x=330, y per row)
const spokes = [
  { jx: 216, jy: 158, dx: 330, dy: 90,  path: 'M 216,158 C 270,148 300,110 330,90'  },
  { jx: 254, jy: 203, dx: 330, dy: 175, path: 'M 254,203 C 285,195 308,183 330,175' },
  { jx: 264, jy: 250, dx: 330, dy: 250, path: 'M 264,250 L 330,250'                  },
  { jx: 254, jy: 297, dx: 330, dy: 330, path: 'M 254,297 C 285,308 308,322 330,330' },
  { jx: 216, jy: 342, dx: 330, dy: 415, path: 'M 216,342 C 270,355 300,393 330,415' },
];

const WhyChooseUs = () => {
  const [hovered, setHovered] = useState(null);
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="wcu-section" ref={sectionRef}>
      <div className="wcu-wrapper">

        {/* ── Heading ── */}
        <div className={`wcu-header ${sectionVisible ? 'visible' : ''}`}>
          <span className="wcu-eyebrow">Our Strengths</span>
          <h2 className="wcu-title">Why <span>Choose Us?</span></h2>
          <p className="wcu-subtitle">
            We combine deep expertise with a client-first approach to deliver results that matter.
          </p>
        </div>

        {/* ── Diagram ── */}
        <div className={`wcu-diagram ${sectionVisible ? 'visible' : ''}`}>
          <svg
            viewBox="0 0 820 500"
            xmlns="http://www.w3.org/2000/svg"
            className="wcu-svg"
            aria-label="Why Choose Us diagram"
          >
            <defs>
              {/* Circle ring */}
              <linearGradient id="wcu-ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#1246c8"/>
                <stop offset="40%"  stopColor="#4b8fe8"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>

              {/* Spoke colour */}
              <linearGradient id="wcu-spokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#1246c8" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#4b8fe8" stopOpacity="0.2"/>
              </linearGradient>

              {/* Per-pill fills */}
              {benefits.map((b) => (
                <linearGradient key={`pg-${b.id}`} id={`wcu-p${b.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor={b.pillFill[0]}/>
                  <stop offset="100%" stopColor={b.pillFill[1]}/>
                </linearGradient>
              ))}

              {/* Per-bubble fills */}
              {benefits.map((b) => (
                <linearGradient key={`ng-${b.id}`} id={`wcu-n${b.id}`} x1="0%" y1="0%" x2="135%" y2="135%">
                  <stop offset="0%"   stopColor={b.numGrad[0]}/>
                  <stop offset="100%" stopColor={b.numGrad[1]}/>
                </linearGradient>
              ))}

              {/* Pill shadow */}
              <filter id="wcu-ps" x="-4%" y="-20%" width="108%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#1246c8" floodOpacity="0.10"/>
              </filter>

              {/* Circle shadow */}
              <filter id="wcu-cs">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1246c8" floodOpacity="0.13"/>
              </filter>
            </defs>

            {/* ── CIRCLE ── */}
            <circle cx="152" cy="250" r="112" fill="white" filter="url(#wcu-cs)"/>
            <circle cx="152" cy="250" r="112" fill="none" stroke="url(#wcu-ringGrad)" strokeWidth="6"/>
            <circle cx="152" cy="250" r="106" fill="white"/>
            <text x="152" y="226" textAnchor="middle" className="wcu-circle-text-dark">Why</text>
            <text x="152" y="260" textAnchor="middle" className="wcu-circle-text-blue">CHOOSE</text>
            <text x="152" y="292" textAnchor="middle" className="wcu-circle-text-dark">US?</text>

            {/* ── VERTICAL SPINE ── */}
            <line x1="330" y1="88" x2="330" y2="417"
              stroke="url(#wcu-spokeGrad)" strokeWidth="2"/>

            {/* ── SPOKES + JUNCTION DOTS ── */}
            {spokes.map((s, i) => (
              <g key={i}>
                <path
                  d={s.path}
                  fill="none"
                  stroke={benefits[i].dotColor}
                  strokeWidth="2"
                  strokeOpacity="0.55"
                />
                <circle cx={s.jx} cy={s.jy} r="5.5"
                  fill="white"
                  stroke={benefits[i].dotColor}
                  strokeWidth="2.5"
                />
              </g>
            ))}

            {/* ── ROWS ── */}
            {benefits.map((b, i) => {
              const dy = spokes[i].dy;
              const isHovered = hovered === b.id;
              const pillY = dy - 25;

              return (
                <g
                  key={b.id}
                  onMouseEnter={() => setHovered(b.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Horizontal bridge dot→pill */}
                  <line
                    x1="340" y1={dy} x2="368" y2={dy}
                    stroke={b.dotColor}
                    strokeWidth="2"
                    strokeOpacity="0.5"
                  />

                  {/* Pill */}
                  <rect
                    x="368" y={pillY}
                    width="432" height="50"
                    rx="25"
                    fill={`url(#wcu-p${b.id})`}
                    stroke={isHovered ? b.dotColor : b.pillStroke}
                    strokeWidth={isHovered ? 2.5 : 2}
                    filter="url(#wcu-ps)"
                    style={{
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                    }}
                  />

                  {/* Number bubble */}
                  <circle cx="410" cy={dy} r="20" fill={`url(#wcu-n${b.id})`}/>
                  <text
                    x="410" y={dy + 5}
                    textAnchor="middle"
                    className="wcu-num"
                  >
                    {b.number}
                  </text>

                  {/* Divider line */}
                  <line
                    x1="660" y1={pillY + 9}
                    x2="660" y2={pillY + 41}
                    stroke={b.pillStroke}
                    strokeWidth="1.5"
                  />

                  {/* Title */}
                  <text
                    x="442" y={dy - 4}
                    className="wcu-pill-title"
                  >
                    {b.title}
                  </text>

                  {/* Description */}
                  <text
                    x="442" y={dy + 13}
                    className="wcu-pill-desc"
                    fill={b.textColor}
                  >
                    {b.description}
                  </text>

                  {/* Icon */}
                  <text
                    x="765" y={dy + 6}
                    textAnchor="middle"
                    className="wcu-icon"
                    fill={b.dotColor}
                  >
                    {b.icon}
                  </text>
                </g>
              );
            })}

            {/* ── DOTS (on top of everything) ── */}
            {spokes.map((s, i) => (
              <circle
                key={`dot-${i}`}
                cx={s.dx} cy={s.dy}
                r="9"
                fill="white"
                stroke={benefits[i].dotColor}
                strokeWidth="3"
              />
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;