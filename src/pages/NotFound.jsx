/* ─────────────────────────────────────────────────────────
   DROP-IN REPLACEMENTS for PartnersPage.jsx
   Copy the two const blocks below into your file.
───────────────────────────────────────────────────────── */

/* ── 1. PARTNER ECOSYSTEM LOGOS ────────────────────────── */
const ecosystemPartners = [
    {
        id: 'salesforce',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Cloud shape */}
                <ellipse cx="110" cy="28" rx="32" ry="22" fill="#00A1E0"/>
                <ellipse cx="82"  cy="36" rx="22" ry="18" fill="#00A1E0"/>
                <ellipse cx="138" cy="36" rx="22" ry="18" fill="#00A1E0"/>
                <rect x="62" y="36" width="96" height="20" fill="#00A1E0"/>
                {/* Wordmark — well-spaced below cloud */}
                <text
                    x="110" y="74"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#00A1E0"
                    fontFamily="'Inter','Arial',sans-serif"
                    letterSpacing="-0.5"
                >salesforce</text>
            </svg>
        ),
    },
    {
        id: 'zoho',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Four coloured squares */}
                <rect x="14"  y="16" width="40" height="40" rx="9" fill="#E62A2A"/>
                <rect x="62"  y="16" width="40" height="40" rx="9" fill="#F4A624"/>
                <rect x="110" y="16" width="40" height="40" rx="9" fill="#1B9641"/>
                <rect x="158" y="16" width="40" height="40" rx="9" fill="#0A5CBF"/>
                {/* Letters */}
                <text x="34"  y="44" textAnchor="middle" fontSize="26" fontWeight="900" fill="#fff" fontFamily="Arial,sans-serif">Z</text>
                <text x="82"  y="44" textAnchor="middle" fontSize="26" fontWeight="900" fill="#fff" fontFamily="Arial,sans-serif">O</text>
                <text x="130" y="44" textAnchor="middle" fontSize="26" fontWeight="900" fill="#fff" fontFamily="Arial,sans-serif">H</text>
                <text x="178" y="44" textAnchor="middle" fontSize="26" fontWeight="900" fill="#fff" fontFamily="Arial,sans-serif">O</text>
                {/* Sub-label */}
                <text x="110" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#888" fontFamily="Arial,sans-serif" letterSpacing="3">ZOHO</text>
            </svg>
        ),
    },
    {
        id: 'docusign',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Circle icon */}
                <circle cx="36" cy="45" r="30" fill="#1D4ED8"/>
                <path d="M22 45 L32 55 L52 33" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                {/* Wordmark */}
                <text x="76" y="38" fontSize="22" fontWeight="800" fill="#0D3494" fontFamily="'Inter','Arial',sans-serif">Docu</text>
                <text x="76" y="62" fontSize="22" fontWeight="800" fill="#0D3494" fontFamily="'Inter','Arial',sans-serif" fontStyle="italic">Sign</text>
            </svg>
        ),
    },
    {
        id: 'sap',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Main pill */}
                <rect x="10" y="20" width="160" height="50" rx="10" fill="#0070F2"/>
                <text x="90" y="54" textAnchor="middle" fontSize="36" fontWeight="900" fill="#fff" fontFamily="Arial,sans-serif">SAP</text>
                {/* Arrow */}
                <polygon points="178,30 210,45 178,60" fill="#0070F2"/>
            </svg>
        ),
    },
    {
        id: 'informatica',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Circle */}
                <circle cx="34" cy="45" r="30" fill="#FF6D00"/>
                <text x="34" y="56" textAnchor="middle" fontSize="38" fontWeight="900" fill="#fff" fontFamily="Georgia,serif" fontStyle="italic">i</text>
                {/* Wordmark stacked */}
                <text x="76" y="38" fontSize="20" fontWeight="700" fill="#FF6D00" fontFamily="'Inter','Arial',sans-serif">Infor-</text>
                <text x="76" y="62" fontSize="20" fontWeight="700" fill="#FF6D00" fontFamily="'Inter','Arial',sans-serif">matica</text>
            </svg>
        ),
    },
    {
        id: 'mulesoft',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Concentric circles icon */}
                <circle cx="34" cy="45" r="30" fill="#00A2DF"/>
                <circle cx="34" cy="45" r="18" fill="#fff"/>
                <circle cx="34" cy="45" r="10" fill="#00A2DF"/>
                {/* Wordmark */}
                <text x="76" y="38" fontSize="22" fontWeight="800" fill="#00A2DF" fontFamily="'Inter','Arial',sans-serif">Mule</text>
                <text x="76" y="62" fontSize="22" fontWeight="800" fill="#00A2DF" fontFamily="'Inter','Arial',sans-serif">Soft</text>
            </svg>
        ),
    },
    {
        id: 'ownbackup',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* Square icon */}
                <rect x="6" y="10" width="56" height="70" rx="12" fill="#2563EB"/>
                <path d="M12 45 Q34 18 56 45 Q34 72 12 45Z" fill="#fff"/>
                {/* Wordmark stacked */}
                <text x="74" y="38" fontSize="20" fontWeight="800" fill="#2563EB" fontFamily="'Inter','Arial',sans-serif">Own</text>
                <text x="74" y="62" fontSize="20" fontWeight="800" fill="#2563EB" fontFamily="'Inter','Arial',sans-serif">Backup</text>
            </svg>
        ),
    },
    {
        id: 'aws',
        logo: (
            <svg viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',maxWidth:180,maxHeight:80}}>
                {/* AWS wordmark */}
                <text x="14" y="56" fontSize="54" fontWeight="900" fill="#232F3E" fontFamily="Arial,sans-serif">aws</text>
                {/* Orange smile underline */}
                <path d="M10 68 Q110 90 210 68" stroke="#FF9900" strokeWidth="6" fill="none" strokeLinecap="round"/>
                <polygon points="204,60 214,68 204,76" fill="#FF9900"/>
            </svg>
        ),
    },
];


/* ── 2. CERT BADGE COMPONENT ────────────────────────────── */
const CERT_CONFIG = [
    { label: 'Salesforce Certified Platform Developer II',   color1: '#1246C8', color2: '#0A2472', symbol: '{ }',  ring: '#7DD3FC' },
    { label: 'Salesforce Certified Platform Developer I',    color1: '#1A5CD8', color2: '#1246C8', symbol: '{ }',  ring: '#93C5FD' },
    { label: 'Salesforce Certified OmniStudio Developer',    color1: '#0A2472', color2: '#0e1f5e', symbol: '◈',    ring: '#60A5FA' },
    { label: 'MuleSoft Certified Developer I',               color1: '#00A2DF', color2: '#0077B6', symbol: '⊙',    ring: '#BAE6FD' },
    { label: 'Salesforce Certified JavaScript Developer I',  color1: '#1246C8', color2: '#0A2472', symbol: 'JS',   ring: '#FDE68A' },
    { label: 'Salesforce Certified Administrator',           color1: '#0EA5E9', color2: '#0369A1', symbol: '★',    ring: '#7DD3FC' },
    { label: 'Salesforce Certified Application Architect',   color1: '#7C3AED', color2: '#4C1D95', symbol: '◆',    ring: '#C4B5FD' },
    { label: 'Salesforce Certified System Architect',        color1: '#DC2626', color2: '#7F1D1D', symbol: '⬡',    ring: '#FCA5A5' },
];

/* CertBadge — fixed viewBox + centred layout */
const CertBadge = ({ config, idx, active }) => (
    <div className={`partners-certs__badge${active ? ' active' : ''}`}>
        <div className="partners-certs__hex-wrap">
            {/* viewBox 0 0 140 160 — badge fills it, no clipping */}
            <svg viewBox="0 0 140 160" width="120" height="138" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={`cg-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"   stopColor={config.color1}/>
                        <stop offset="100%" stopColor={config.color2}/>
                    </linearGradient>
                    <filter id={`glow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3.5" result="blur"/>
                        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>

                {/* Outer glow ring */}
                <polygon
                    points="70,4 132,38 132,122 70,156 8,122 8,38"
                    fill="none"
                    stroke={config.ring}
                    strokeWidth="3"
                    opacity="0.45"
                />
                {/* Main hex body */}
                <polygon
                    points="70,12 126,44 126,116 70,148 14,116 14,44"
                    fill={`url(#cg-${idx})`}
                    filter={`url(#glow-${idx})`}
                />
                {/* Inner bevel ring */}
                <polygon
                    points="70,22 116,48 116,112 70,138 24,112 24,48"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.5"
                />

                {/* SF-style cloud icon */}
                <ellipse cx="70" cy="38" rx="16" ry="11" fill="rgba(255,255,255,0.28)"/>
                <ellipse cx="56" cy="43" rx="11" ry="9"  fill="rgba(255,255,255,0.28)"/>
                <ellipse cx="84" cy="43" rx="11" ry="9"  fill="rgba(255,255,255,0.28)"/>
                <rect    x="46" y="43" width="48" height="10" fill="rgba(255,255,255,0.28)"/>

                {/* Symbol — vertically centred in lower half */}
                <text
                    x="70" y="102"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="30"
                    fontWeight="900"
                    fill="#fff"
                    fontFamily="'Inter','Arial',monospace"
                    filter={`url(#glow-${idx})`}
                >{config.symbol}</text>
            </svg>
        </div>
        <span className="partners-certs__label">{config.label}</span>
    </div>
);