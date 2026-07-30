import React, { useState } from 'react';
import './SalesforceEcosystem.css';
import dreamcodeLogo from '../../assests/images/logo.png';
import slackLogo from '../../assests/images/slack.png';
import salesLogo from '../../assests/images/sales.png';
import serviceLogo from '../../assests/images/service.png';
import marketingLogo from '../../assests/images/mark.webp';
import tableauLogo from '../../assests/images/tableau.webp';
import educationLogo from '../../assests/images/eduction.png';
import healthLogo from '../../assests/images/health.png';
import manufacturingLogo from '../../assests/images/manfacturing.png';
import microsoftLogo from '../../assests/images/microsoft.png';
import outlookLogo from '../../assests/images/outlook.jpg';
import ncinoLogo from '../../assests/images/ncino.png';
import cibLogo from '../../assests/images/cib.webp';
import stripeLogo from '../../assests/images/stripe.webp';
import zelleLogo from '../../assests/images/zelle.webp';

const accelerators = [
  {
    category: 'Microsoft',
    cards: [
      { name: 'O365 Files Connect', appIcon: microsoftLogo },
      { name: 'Outlook Connect',    appIcon: outlookLogo   },
    ],
  },
  {
    category: 'Financial Services Cloud',
    cards: [
      { name: 'nCino to FSC', appIcon: ncinoLogo },
      { name: 'CIB on FSC',   appIcon: cibLogo   },
    ],
  },
  {
    category: 'Payments Gateway',
    cards: [
      { name: 'Stripe', appIcon: stripeLogo },
      { name: 'Zelle',  appIcon: zelleLogo  },
    ],
  },
];

const customer360Items = [
  { label: 'Agentforce',               icon: null, isAgentforce: true },
  { label: 'Slack',                    icon: slackLogo         },
  { label: 'Sales',                    icon: salesLogo         },
  { label: 'Services',                 icon: serviceLogo       },
  { label: 'Marketing',                icon: marketingLogo     },
  { label: 'Tableau',                  icon: tableauLogo       },
  { label: 'Health Cloud',             icon: healthLogo        },
  { label: 'Manufacturing Cloud',      icon: manufacturingLogo },
  { label: 'Education Cloud',          icon: educationLogo     },
];

const platformItems = {
  left: ['AppExchange', 'Experience\nCloud', 'Data\nCloud'],
  right: ['Einstein\nAnalytics', 'Flow\nAutomation', 'Security\nShield']
};

function AgentforceIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="10" r="5" stroke="white" strokeWidth="1.8" />
      <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="14" r="2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <circle cx="21" cy="14" r="2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
    </svg>
  );
}

function AccelIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 13h7l-1 7 8-11h-7l1-7z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function C360Icon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.7" />
      <circle cx="11" cy="11" r="3" fill="white" opacity="0.6" />
      <path d="M3 11h16M11 3a12 8 0 0 1 0 16M11 3a12 8 0 0 0 0 16" stroke="white" strokeWidth="1.4" opacity="0.7" />
    </svg>
  );
}

export default function SalesforceEcosystem() {
  const [openAccel, setOpenAccel] = useState(true);
  const [openC360,  setOpenC360]  = useState(true);
    
  return (
    <section className="eco-section">

      <div className="eco-heading-wrap">
        <h2 className="eco-heading">
          Our Salesforce{' '}
          <span className="eco-heading-accent">Ecosystem Expertise</span>
        </h2>
      </div>

      <div className="eco-outer-card">

        {/* ACCELERATORS */}
        <div className="eco-accel-layer">
          <div
            className="eco-layer-bar eco-layer-bar--accel"
            onClick={() => setOpenAccel((v) => !v)}
          >
            <div className="eco-bar-icon-wrap"><AccelIcon /></div>
            <span className="eco-bar-title">Accelerators</span>
            <span className={openAccel ? 'eco-caret eco-caret--up' : 'eco-caret'}>▲</span>
          </div>

          {openAccel && (
            <div className="eco-accel-content">
              {accelerators.map((group) => (
                <div key={group.category} className="eco-accel-group">
                  <div className="eco-accel-cat">{group.category}</div>
                  <div className="eco-accel-cards">
                    {group.cards.map((card) => (
                      <div key={card.name} className="eco-accel-card">
                        <div className="eco-accel-card-icons">
                          <div className="eco-accel-app-icon">
                            <img src={card.appIcon} alt={card.name} className="eco-accel-app-img" />
                          </div>
                          <span className="eco-accel-plus">+</span>
                          <div className="eco-sf-logo">
                            <img
                              src={dreamcodeLogo}
                              alt="Dreamcode Technologies"
                              className="eco-dreamcode-logo"
                            />
                          </div>
                        </div>
                        <div className="eco-accel-card-name">{card.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CUSTOMER 360 */}
          <div className="eco-c360-layer">
            <div
              className="eco-layer-bar eco-layer-bar--c360"
              onClick={() => setOpenC360((v) => !v)}
            >
              <div className="eco-bar-icon-wrap"><C360Icon /></div>
              <span className="eco-bar-title">Customer 360</span>
              <span className={openC360 ? 'eco-caret eco-caret--up' : 'eco-caret'}>▲</span>
            </div>

            {openC360 && (
              <div className="eco-c360-grid">
                {customer360Items.map((item) => (
                  <div key={item.label} className="eco-c360-item">
                    <div className="eco-c360-icon-wrap">
                      {item.isAgentforce ? (
                        <div className="eco-c360-agentforce-icon">
                          <AgentforceIcon />
                        </div>
                      ) : (
                        <img src={item.icon} alt={item.label} className="eco-c360-img" />
                      )}
                    </div>
                    <span className="eco-c360-label">{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SALESFORCE PLATFORM */}
        <div className="eco-sf-platform">
          <div className="eco-sf-platform-row">
            <div className="eco-sf-side">
              {platformItems.left.map((item) => (
                <div key={item} className="eco-sf-item">
                  {item.split('\n').map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              ))}
            </div>
            <div className="eco-sf-center">
              <div className="eco-sf-title">Salesforce Platform</div>
            </div>
            <div className="eco-sf-side eco-sf-side--right">
              {platformItems.right.map((item) => (
                <div key={item} className="eco-sf-item">
                  {item.split('\n').map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="eco-mulesoft-row">
            <svg viewBox="0 0 800 56" preserveAspectRatio="none" className="eco-mulesoft-svg">
              <path
                d="M0,28 L310,28 Q340,28 355,10 L400,10 Q415,28 445,28 L800,28"
                stroke="#4B8FE8"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 3"
              />
            </svg>
            <div className="eco-mulesoft-badge">
              <span className="eco-mulesoft-icon">M</span>
              <span>MuleSoft Integration</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}