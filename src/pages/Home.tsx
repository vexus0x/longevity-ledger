import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, FlaskConical, FileText, ExternalLink, Calendar } from 'lucide-react';
import { INFLUENCERS, PROTOCOLS, RECENT_RESEARCH } from '../data/longevity';

const Home: React.FC = () => {
  const topInfluencers = INFLUENCERS.slice(0, 4);
  const featuredProtocols = PROTOCOLS.filter(p => p.evidenceScore >= 70).slice(0, 4);
  const recentResearch = RECENT_RESEARCH.slice(0, 4);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>The Longevity Ledger</h1>
          <p>
            Evidence-based intelligence on longevity protocols, research breakthroughs, 
            and the pioneers shaping the future of human healthspan.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="stat-value">{INFLUENCERS.length}</div>
              <div className="stat-label">Key Voices</div>
            </div>
            <div className="stat">
              <div className="stat-value">{PROTOCOLS.length}</div>
              <div className="stat-label">Protocols</div>
            </div>
            <div className="stat">
              <div className="stat-value">{RECENT_RESEARCH.length}</div>
              <div className="stat-label">Studies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Influencers Feed - Newsfeed Style */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Latest from the Field</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Insights from longevity pioneers
              </p>
            </div>
            <Link to="/influencers" className="section-link">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-2">
            {topInfluencers.map(influencer => (
              <Link to={`/influencers#${influencer.id}`} key={influencer.id} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', gap: '1rem', padding: '1.25rem' }}>
                  <img 
                    src={influencer.avatar} 
                    alt={influencer.name} 
                    style={{ 
                      width: '80px', 
                      height: '80px', 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      border: '2px solid var(--border)'
                    }} 
                  />
                  <div style={{ flex: 1 }}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{influencer.name}</h3>
                      <span className="badge badge-primary">{influencer.followers}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      {influencer.title}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text)' }}>
                      <span style={{ fontStyle: 'italic' }}>"{influencer.quote}"</span>
                    </p>
                    <div className="tags mt-1">
                      {influencer.protocols.slice(0, 2).map(p => (
                        <span key={p} className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/influencers" className="nav-link" style={{ display: 'inline-flex', background: 'var(--surface-light)' }}>
              Explore All Pioneers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Cards */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Protocols</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Evidence-rated interventions
              </p>
            </div>
            <Link to="/protocols" className="section-link">
              Browse all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-2">
            {featuredProtocols.map(protocol => (
              <Link to={`/protocols#${protocol.id}`} key={protocol.id} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="flex justify-between items-center mb-2">
                    <span 
                      className="badge" 
                      style={{ 
                        background: `${protocol.category === 'drug' ? 'rgba(239,68,68,0.15)' : protocol.category === 'supplement' ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.15)'}`,
                        color: protocol.category === 'drug' ? 'var(--danger)' : protocol.category === 'supplement' ? 'var(--primary)' : 'var(--secondary)'
                      }}
                    >
                      {protocol.category}
                    </span>
                    <span className={`evidence-badge evidence-${protocol.evidenceLevel}`}>
                      <span className="evidence-score">{protocol.evidenceScore}</span>/100
                    </span>
                  </div>
                  <h3 className="card-title">{protocol.name}</h3>
                  <p className="card-bio" style={{ marginBottom: '1rem' }}>{protocol.description.slice(0, 120)}...</p>
                  <div className="tags">
                    {protocol.benefits.slice(0, 3).map(b => (
                      <span key={b} className="tag">{b}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/protocols" className="nav-link" style={{ display: 'inline-flex', background: 'var(--background)' }}>
              Explore All Protocols <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Newsfeed */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Research Updates</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Latest peer-reviewed studies
              </p>
            </div>
            <Link to="/research" className="section-link">
              Browse all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {recentResearch.map(item => (
              <div key={item.id} className="research-item" style={{ padding: '1.5rem' }}>
                <div className="research-meta">
                  <span className="badge badge-secondary">{item.journal}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <Calendar size={12} /> {item.date}
                  </span>
                  {item.url && (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--primary)' }}
                    >
                      Source <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <h3 className="research-title">{item.title}</h3>
                <p className="research-summary">{item.summary}</p>
                <div className="research-findings" style={{ marginTop: '0.75rem' }}>
                  <ul>
                    {item.keyFindings.slice(0, 2).map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>
                <div className="tags mt-1">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/research" className="nav-link" style={{ display: 'inline-flex', background: 'var(--surface-light)' }}>
              View All Research <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', textAlign: 'center' }}>
        <div className="container">
          <Zap size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h2 className="section-title mb-2">Stay Ahead of the Science</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Curated updates on longevity research, new protocols, and insights from the field's leading voices.
          </p>
          <div className="flex gap-2 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link to="/influencers" className="nav-link" style={{ background: 'var(--primary)', color: '#000', display: 'inline-flex' }}>
              <Users size={16} style={{ marginRight: '0.5rem' }} /> Explore People
            </Link>
            <Link to="/protocols" className="nav-link" style={{ background: 'var(--surface-light)', display: 'inline-flex' }}>
              <FlaskConical size={16} style={{ marginRight: '0.5rem' }} /> Browse Protocols
            </Link>
            <Link to="/research" className="nav-link" style={{ background: 'var(--surface-light)', display: 'inline-flex' }}>
              <FileText size={16} style={{ marginRight: '0.5rem' }} /> Research Feed
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
