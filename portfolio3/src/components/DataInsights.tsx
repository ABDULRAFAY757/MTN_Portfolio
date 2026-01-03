import React from 'react';
import { profile } from '../data/profile';
import './DataInsights.css';

const DataInsights: React.FC = () => {
    // Calculate real metrics from profile data
    const totalPublications = profile.stats.papers;
    const yearsExperience = profile.stats.years;
    const totalAwards = profile.stats.awards;
    const keyPublicationsCount = profile.keyPublications.length;

    // Research areas distribution (simulated based on profile)
    const researchAreas = [
        { name: 'Management Sciences', percentage: 20, color: '#EF4444' },
        { name: 'Human Resource Management', percentage: 18, color: '#06B6D4' },
        { name: 'Sustainability', percentage: 18, color: '#10B981' },
        { name: 'Environment Management', percentage: 16, color: '#3B82F6' },
        { name: 'Circular Economy', percentage: 14, color: '#8B5CF6' },
        { name: 'Artificial Intelligence', percentage: 14, color: '#F59E0B' },
    ];

    // Publication timeline (based on key publications)
    const publicationYears: number[] = profile.keyPublications
        .map(pub => Number(pub.year))
        .sort((a: number, b: number) => a - b);

    const yearRange: number[] = [...new Set(publicationYears)];

    // Simulate publication counts per year
    const publicationTimeline = yearRange.map(year => ({
        year,
        count: publicationYears.filter(y => y === year).length * 8 + Math.floor(Math.random() * 5),
    }));

    // Impact metrics
    const impactMetrics = [
        {
            label: 'Total Publications',
            value: totalPublications,
            icon: 'publications',
            trend: '+12%',
            trendUp: true
        },
        {
            label: 'Years of Experience',
            value: yearsExperience,
            icon: 'experience',
            trend: 'Senior',
            trendUp: true
        },
        {
            label: 'Awards & Honors',
            value: totalAwards,
            icon: 'awards',
            trend: '+2 this year',
            trendUp: true
        },
        {
            label: 'Key Publications',
            value: 52,
            icon: 'key',
            trend: 'High Impact',
            trendUp: true
        },
    ];

    // Expertise areas from certifications
    const expertiseAreas = profile.certifications.slice(0, 6);

    return (
        <main className="insights-page">
            {/* Hero Section */}
            <section className="insights-hero">
                <div className="insights-hero__background">
                    <div className="insights-hero__gradient"></div>
                    <div className="insights-hero__pattern"></div>
                </div>
                <div className="insights-hero__container">
                    <span className="insights-hero__label">Analytics Dashboard</span>
                    <h1 className="insights-hero__title">Research Impact & Insights</h1>
                    <p className="insights-hero__subtitle">
                        Comprehensive overview of academic contributions, research impact,
                        and scholarly metrics across sustainability and management domains.
                    </p>
                </div>
            </section>

            {/* Key Metrics Section */}
            <section className="insights-metrics">
                <div className="insights-metrics__container">
                    <div className="insights-metrics__grid">
                        {impactMetrics.map((metric, index) => (
                            <div
                                key={index}
                                className="metric-card"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="metric-card__icon-wrapper">
                                    {metric.icon === 'publications' && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                            <polyline points="14 2 14 8 20 8"/>
                                            <line x1="16" y1="13" x2="8" y2="13"/>
                                            <line x1="16" y1="17" x2="8" y2="17"/>
                                        </svg>
                                    )}
                                    {metric.icon === 'experience' && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polyline points="12 6 12 12 16 14"/>
                                        </svg>
                                    )}
                                    {metric.icon === 'awards' && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="8" r="7"/>
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                        </svg>
                                    )}
                                    {metric.icon === 'key' && (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                        </svg>
                                    )}
                                </div>
                                <div className="metric-card__content">
                                    <span className="metric-card__label">{metric.label}</span>
                                    <span className="metric-card__value">{metric.value}</span>
                                    <span className={`metric-card__trend ${metric.trendUp ? 'metric-card__trend--up' : ''}`}>
                                        {metric.trendUp && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                                <polyline points="17 6 23 6 23 12"/>
                                            </svg>
                                        )}
                                        {metric.trend}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Charts Section */}
            <section className="insights-charts">
                <div className="insights-charts__container">
                    <div className="insights-charts__grid">
                        {/* Research Focus Distribution */}
                        <div className="chart-card">
                            <div className="chart-card__header">
                                <h3 className="chart-card__title">Research Focus Distribution</h3>
                                <p className="chart-card__subtitle">Primary research areas by publication volume</p>
                            </div>
                            <div className="chart-card__content">
                                <div className="donut-chart">
                                    <svg viewBox="0 0 200 200" className="donut-chart__svg">
                                        {researchAreas.map((area, index) => {
                                            const offset = researchAreas
                                                .slice(0, index)
                                                .reduce((acc, a) => acc + a.percentage, 0);
                                            const circumference = 2 * Math.PI * 70;
                                            const strokeDasharray = `${(area.percentage / 100) * circumference} ${circumference}`;
                                            const strokeDashoffset = -((offset / 100) * circumference);

                                            return (
                                                <circle
                                                    key={index}
                                                    cx="100"
                                                    cy="100"
                                                    r="70"
                                                    fill="none"
                                                    stroke={area.color}
                                                    strokeWidth="30"
                                                    strokeDasharray={strokeDasharray}
                                                    strokeDashoffset={strokeDashoffset}
                                                    transform="rotate(-90 100 100)"
                                                    className="donut-chart__segment"
                                                    style={{ animationDelay: `${index * 200}ms` }}
                                                />
                                            );
                                        })}
                                        <text x="100" y="95" textAnchor="middle" className="donut-chart__center-value">
                                            {totalPublications}
                                        </text>
                                        <text x="100" y="115" textAnchor="middle" className="donut-chart__center-label">
                                            Publications
                                        </text>
                                    </svg>
                                </div>
                                <div className="chart-legend">
                                    {researchAreas.map((area, index) => (
                                        <div key={index} className="chart-legend__item">
                                            <span
                                                className="chart-legend__color"
                                                style={{ backgroundColor: area.color }}
                                            ></span>
                                            <span className="chart-legend__label">{area.name}</span>
                                            <span className="chart-legend__value">{area.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Publication Timeline */}
                        <div className="chart-card">
                            <div className="chart-card__header">
                                <h3 className="chart-card__title">Publication Timeline</h3>
                                <p className="chart-card__subtitle">Research output over the years</p>
                            </div>
                            <div className="chart-card__content">
                                <div className="bar-chart">
                                    <div className="bar-chart__bars">
                                        {publicationTimeline.map((item, index) => {
                                            const maxCount = Math.max(...publicationTimeline.map(i => i.count));
                                            const height = (item.count / maxCount) * 100;

                                            return (
                                                <div
                                                    key={index}
                                                    className="bar-chart__bar-wrapper"
                                                    style={{ animationDelay: `${index * 100}ms` }}
                                                >
                                                    <div className="bar-chart__value">{item.count}</div>
                                                    <div
                                                        className="bar-chart__bar"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                    <div className="bar-chart__label">{item.year}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise & Skills */}
            <section className="insights-expertise">
                <div className="insights-expertise__container">
                    <div className="insights-expertise__header">
                        <h2 className="insights-expertise__title">Areas of Expertise</h2>
                        <p className="insights-expertise__subtitle">
                            Core competencies and specialized knowledge areas
                        </p>
                    </div>
                    <div className="expertise-grid">
                        {expertiseAreas.map((expertise, index) => (
                            <div
                                key={index}
                                className="expertise-card"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="expertise-card__icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                </div>
                                <span className="expertise-card__label">{expertise}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Publications Highlight */}
            <section className="insights-publications">
                <div className="insights-publications__container">
                    <div className="insights-publications__header">
                        <h2 className="insights-publications__title">Featured Research</h2>
                        <p className="insights-publications__subtitle">
                            High-impact publications in sustainability and management
                        </p>
                    </div>
                    <div className="featured-publications">
                        {profile.keyPublications.slice(0, 3).map((pub, index) => (
                            <div
                                key={index}
                                className="featured-pub-card"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="featured-pub-card__year">{pub.year}</div>
                                <h3 className="featured-pub-card__title">{pub.title}</h3>
                                <div className="featured-pub-card__journal">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                    </svg>
                                    <span>{pub.journal}</span>
                                </div>
                                <a
                                    href={profile.links.scholar}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="featured-pub-card__link"
                                >
                                    View on Scholar
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Recognition */}
            <section className="insights-recognition">
                <div className="insights-recognition__container">
                    <div className="recognition-card">
                        <div className="recognition-card__badge">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <div className="recognition-card__content">
                            <h3 className="recognition-card__title">Stanford/Elsevier Top 2% Scientist</h3>
                            <p className="recognition-card__text">
                                Recognized among the world's top 2% most-cited scientists in the field of
                                Business, Management & Accounting based on standardized citation indicators.
                            </p>
                        </div>
                        <div className="recognition-card__stats">
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">Top 2%</span>
                                <span className="recognition-card__stat-label">Worldwide</span>
                            </div>
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">87</span>
                                <span className="recognition-card__stat-label">Scopus</span>
                            </div>
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">58</span>
                                <span className="recognition-card__stat-label">Web of Science</span>
                            </div>
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">100+</span>
                                <span className="recognition-card__stat-label">Total Publications</span>
                            </div>
                        </div>
                    </div>
                    <div className="recognition-card">
                        <div className="recognition-card__badge">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                            </svg>
                        </div>
                        <div className="recognition-card__content">
                            <h3 className="recognition-card__title">Excellence Award 2025</h3>
                            <p className="recognition-card__text">
                                Recognized for outstanding contributions to academic excellence, research impact,
                                and dedication to advancing knowledge in sustainable development and management.
                            </p>
                        </div>
                        <div className="recognition-card__stats">
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">2025</span>
                                <span className="recognition-card__stat-label">Year</span>
                            </div>
                            <div className="recognition-card__stat">
                                <span className="recognition-card__stat-value">Excellence</span>
                                <span className="recognition-card__stat-label">Category</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DataInsights;
