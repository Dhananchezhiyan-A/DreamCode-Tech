import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import heroImage from '../assests/images/one.jpeg';
import './ResourcesPage.css';

const featuredPosts = [
    {
        id: 'business-rules-engine',
        date: 'Jun 2025',
        title: 'Salesforce Business Rules Engine',
        excerpt: 'Why Decision-Making Is Holding Your Business Back',
        tag: 'Platform',
    },
    {
        id: 'hyperforce',
        date: 'Jun 2025',
        title: 'Hyperforce',
        excerpt: 'The Strategic Salesforce Tool for Data Regulation & Compliance in Global Enterprises',
        tag: 'Cloud',
    },
    {
        id: 'ai-partner-guide',
        date: 'Apr 2026',
        title: 'Best Salesforce AI Implementation Partner: Mid-Sized vs Large SI Guide',
        excerpt: 'Most AI projects fail before production. Learn how mid-sized partners deliver faster, more practical outcomes.',
        tag: 'AI',
    },
];

const allBlogs = [
    {
        id: 'crm-overruns',
        date: 'May 2026',
        title: '10 Causes of Salesforce CRM Project Overruns in 2026',
        excerpt: 'Budget blowouts and timeline slips are preventable. Here are the top causes we see across enterprise CRM programs.',
        tag: 'Implementation',
    },
    {
        id: 'ai-partner-guide',
        date: 'Apr 2026',
        title: 'Best Salesforce AI Implementation Partner: Mid-Sized vs Large SI Guide',
        excerpt: 'Most AI projects fail before production. Learn how mid-sized partners deliver faster, more practical outcomes.',
        tag: 'AI',
    },
    {
        id: 'data-cloud-unify',
        date: 'Jun 2025',
        title: 'Unify Customer Data with Salesforce Data Cloud',
        excerpt: 'Break down silos and build a trusted customer 360 with Data Cloud ingestion, identity resolution, and activation.',
        tag: 'Data',
    },
    {
        id: 'business-rules-engine',
        date: 'Jun 2025',
        title: 'Salesforce Business Rules Engine',
        excerpt: 'Why Decision-Making Is Holding Your Business Back',
        tag: 'Platform',
    },
    {
        id: 'hyperforce',
        date: 'Jun 2025',
        title: 'Hyperforce',
        excerpt: 'The Strategic Salesforce Tool for Data Regulation & Compliance in Global Enterprises',
        tag: 'Cloud',
    },
    {
        id: 'agentforce-enterprise',
        date: 'Feb 2026',
        title: 'Agentforce: What Enterprises Should Know',
        excerpt: 'A practical guide to deploying autonomous AI agents safely within your Salesforce org.',
        tag: 'AI',
    },
    {
        id: 'spring-release',
        date: 'Mar 2026',
        title: 'Salesforce Spring Release Highlights',
        excerpt: 'Key platform updates, AI features, and migration considerations from the latest Salesforce release.',
        tag: 'Platform',
    },
    {
        id: 'mulesoft-integration',
        date: 'Jan 2026',
        title: 'MuleSoft Integration Patterns for Salesforce',
        excerpt: 'API-led connectivity strategies that keep your CRM synchronized with ERP, billing, and legacy systems.',
        tag: 'Integration',
    },
];

const sectionAliases = {
    blogs: 'blogs',
    blog: 'blogs',
    featured: 'featured',
    'case-studies': 'blogs',
    'white-papers': 'blogs',
    webinars: 'blogs',
    ebooks: 'blogs',
    docs: 'blogs',
    faqs: 'blogs',
    support: 'blogs',
    connect: 'connect',
};

const categories = ['all', 'AI', 'Implementation', 'Integration', 'Platform', 'Data', 'Cloud'];

const TreeLeft = () => (
    <svg className="resources-connect__tree-left" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="90,10 140,140 40,140" fill="#4aac8a" opacity="0.55" />
        <polygon points="90,60 150,200 30,200" fill="#3d9a7a" opacity="0.65" />
        <rect x="80" y="200" width="20" height="50" fill="#5c3d1e" opacity="0.70" />
        <polygon points="40,60 85,170 -5,170" fill="#52b896" opacity="0.75" />
        <polygon points="40,110 90,230 -10,230" fill="#45a688" opacity="0.80" />
        <rect x="30" y="228" width="18" height="35" fill="#6b4226" opacity="0.75" />
    </svg>
);

const TreeRight = () => (
    <svg className="resources-connect__tree-right" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="90,10 140,140 40,140" fill="#4aac8a" opacity="0.55" />
        <polygon points="90,60 150,200 30,200" fill="#3d9a7a" opacity="0.65" />
        <rect x="80" y="200" width="20" height="50" fill="#5c3d1e" opacity="0.70" />
        <polygon points="140,60 185,170 95,170" fill="#52b896" opacity="0.75" />
        <polygon points="140,110 190,230 90,230" fill="#45a688" opacity="0.80" />
        <rect x="130" y="228" width="18" height="35" fill="#6b4226" opacity="0.75" />
    </svg>
);

const BlogCard = ({ post, featured = false }) => (
    <article className={`resources-blog-card${featured ? ' resources-blog-card--featured' : ''}`}>
        <div className="resources-blog-card__pattern" aria-hidden="true" />
        <div className="resources-blog-card__content">
            <div className="resources-blog-card__meta">
                <span className="resources-blog-card__date">{post.date}</span>
                <span className="resources-blog-card__tag">{post.tag}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`} className="resources-blog-card__link">
                Read Article <i className="fa-solid fa-arrow-right" />
            </a>
        </div>
    </article>
);

const ResourcesPage = () => {
    const { section } = useParams();
    const [featuredStart, setFeaturedStart] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [activeCategory, setActiveCategory] = useState('all');
    const [formStatus, setFormStatus] = useState('idle');
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        reason: '',
        message: '',
    });
    const [notRobot, setNotRobot] = useState(false);

    const visibleFeatured = 3;
    const canFeaturedPrev = featuredStart > 0;
    const canFeaturedNext = featuredStart < featuredPosts.length - visibleFeatured;

    useEffect(() => {
        const id = section ? sectionAliases[section] || section : null;
        if (!id) return;
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [section]);

    const parseDate = (dateStr) => {
        const months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
        const [month, year] = dateStr.split(' ');
        return new Date(parseInt(year), months[month]);
    };

    const filteredBlogs = allBlogs
        .filter((post) => {
            if (!searchQuery.trim()) return true;
            const query = searchQuery.toLowerCase();
            return post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query);
        })
        .filter((post) => {
            if (activeCategory === 'all') return true;
            return post.tag === activeCategory;
        })
        .sort((a, b) => {
            if (sortBy === 'newest') return parseDate(b.date) - parseDate(a.date);
            if (sortBy === 'oldest') return parseDate(a.date) - parseDate(b.date);
            return a.title.localeCompare(b.title);
        });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!notRobot) newErrors.robot = 'Please confirm you are not a robot';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                firstName: '', lastName: '', email: '', phone: '', company: '', reason: '', message: '',
            });
            setNotRobot(false);
            setErrors({});
        }, 1500);
    };

    return (
        <div className="resources-page">
            {/* ── HERO ── NO BLUE OVERLAY ── */}
            <section className="resources-hero" id="overview">
                <div className="resources-hero__bg" style={{ backgroundImage: `url(${heroImage})` }} />
                <div className="resources-hero__inner">
                    <div className="resources-hero__text">
                        <span className="resources-hero__eyebrow">Knowledge Hub</span>
                        <h1>
                            Resources & <span>Insights</span>
                        </h1>
                        <p>
                            In-depth guides, case studies, and expert perspectives to help you 
                            transform your business with Salesforce. From implementation strategies 
                            to industry best practices — everything you need to succeed.
                        </p>
                        <div className="resources-hero__actions">
                            <a href="#featured" className="resources-hero__btn resources-hero__btn--primary">
                                Explore Featured
                            </a>
                            <a href="#blogs" className="resources-hero__btn resources-hero__btn--ghost">
                                Browse All Blogs
                            </a>
                        </div>
                        <div className="resources-hero__stats">
                            <div className="resources-hero__stat">
                                <strong>25+</strong>
                                <span>Expert Guides</span>
                            </div>
                            <div className="resources-hero__stat">
                                <strong>2026</strong>
                                <span>Latest Trends</span>
                            </div>
                            <div className="resources-hero__stat">
                                <strong>Free</strong>
                                <span>Always Accessible</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ── */}
            <section className="resources-featured" id="featured">
                <div className="resources-featured__header">
                    <div>
                        <h2>Featured Posts</h2>
                        <p className="resources-featured__sub">Hand-picked insights from our experts</p>
                    </div>
                    <div className="resources-featured__arrows">
                        <button
                            type="button"
                            className={`resources-arrow${!canFeaturedPrev ? ' disabled' : ''}`}
                            onClick={() => setFeaturedStart((i) => Math.max(0, i - 1))}
                            disabled={!canFeaturedPrev}
                            aria-label="Previous featured posts"
                        >
                            <i className="fa-solid fa-chevron-left" />
                        </button>
                        <button
                            type="button"
                            className={`resources-arrow${!canFeaturedNext ? ' disabled' : ''}`}
                            onClick={() => setFeaturedStart((i) => Math.min(featuredPosts.length - visibleFeatured, i + 1))}
                            disabled={!canFeaturedNext}
                            aria-label="Next featured posts"
                        >
                            <i className="fa-solid fa-chevron-right" />
                        </button>
                    </div>
                </div>
                <div className="resources-featured__track">
                    {featuredPosts.slice(featuredStart, featuredStart + visibleFeatured).map((post) => (
                        <BlogCard key={post.id} post={post} featured />
                    ))}
                </div>
            </section>

            {/* ── ALL BLOGS ── */}
            <section className="resources-blogs" id="blogs">
                <div className="resources-blogs__top">
                    <div>
                        <h2>All Blogs</h2>
                        <p className="resources-blogs__count">{filteredBlogs.length} articles available</p>
                    </div>
                    <div className="resources-blogs__controls">
                        <div className="resources-blogs__filters">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`resources-filter${activeCategory === cat ? ' active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat === 'all' ? 'All' : cat}
                                </button>
                            ))}
                        </div>
                        <div className="resources-search">
                            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                            <input
                                type="search"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search blogs"
                            />
                        </div>
                        <select className="resources-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="title">Title A-Z</option>
                        </select>
                    </div>
                </div>

                <div className="resources-blogs__grid">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((post) => (
                            <BlogCard key={`${post.id}-${post.date}`} post={post} />
                        ))
                    ) : (
                        <div className="resources-blogs__empty">
                            <i className="fa-solid fa-magnifying-glass" />
                            <p>No blogs match your search.</p>
                            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CONNECT WITH US ── CONTACT FORM ── */}
            <section className="resources-connect" id="connect">
                <div className="resources-connect__inner">
                    <div className="resources-connect__header">
                        <h2>Connect with Us</h2>
                        <p>Ready to elevate your business? Contact us today to discuss how we can help you achieve your goals!</p>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="contact-success">
                            <div className="contact-success-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <h2>Thank You!</h2>
                            <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
                            <button
                                className="contact-btn contact-btn--primary"
                                onClick={() => setFormStatus('idle')}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <div className="contact-form-wrapper">
                            <div className="contact-form-header">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we'll get back to you shortly.</p>
                            </div>

                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
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
                                            <option>Sales Cloud</option>
                                            <option>Service Cloud</option>
                                            <option>Marketing Cloud</option>
                                            <option>Agentforce</option>
                                            <option>Salesforce CPQ</option>
                                            <option>Education Cloud</option>
                                            <option>Health Cloud</option>
                                            <option>Financial Services Cloud</option>
                                            <option>Custom Development</option>
                                            <option>Other</option>
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
                                    <button
                                        type="submit"
                                        className="contact-btn contact-btn--primary"
                                        onClick={handleSubmit}
                                        disabled={formStatus === 'submitting'}
                                    >
                                        {formStatus === 'submitting' ? (
                                            <span className="contact-btn-loading">
                                                <span className="contact-spinner" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>Send Message →</>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </section>        </div>
    );
};

export default ResourcesPage;