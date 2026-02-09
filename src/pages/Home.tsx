import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { INFLUENCERS, PROTOCOLS, RECENT_RESEARCH } from '../data/longevity';

const Home: React.FC = () => {
  const topInfluencers = INFLUENCERS.slice(0, 3);
  const topProtocols = PROTOCOLS.filter(p => p.evidenceScore >= 70).slice(0, 4);
  const recentResearch = RECENT_RESEARCH.slice(0, 3);

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
              <div className="stat-label">Protocols Tracked</div>
            </div>
            <div className="stat">
              <div className="stat-value">{RECENT_RESEARCH.length}</div>
              <div className="stat-label">Recent Studies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Influencers */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Voices in Longevity</h2>
            <Link to="/influencers" className="section-link">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-3">
            {topInfluencers.map(influencer => (
              <Link to={`/influencers#${influencer.id}`} key={influencer.id} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <img src={influencer.avatar} alt={influencer.name} className="card-avatar" />
                    <div>
                      <h3 className="card-title">{influencer.name}</h3>
                      <p className="card-subtitle">{influencer.title}</p>
                    </div>
                  </div>
                  <p className="card-bio">{influencer.bio}</p>
                  <div className="tags">
                    {influencer.specialties.slice(0, 3).map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Protocols */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Evidence-Based Protocols</h2>
            <Link to="/protocols" className="section-link">
              Explore all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-2">
            {topProtocols.map(protocol => (
              <Link to={`/protocols#${protocol.id}`} key={protocol.id} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge badge-primary">{protocol.category}</span>
                    <span className={`evidence-badge evidence-${protocol.evidenceLevel}`}>
                      <span className="evidence-score">{protocol.evidenceScore}</span>/100
                    </span>
                  </div>
                  <h3 className="card-title">{protocol.name}</h3>
                  <p className="card-bio" style={{ marginBottom: '1rem' }}>{protocol.description.slice(0, 150)}...</p>
                  <div className="tags">
                    {protocol.benefits.slice(0, 3).map(b => (
                      <span key={b} className="tag">{b}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Research */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Research</h2>
            <Link to="/research" className="section-link">
              Browse all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {recentResearch.map((item) => (
              <div key={item.id} className="research-item" style={{ padding: '1.5rem' }}>
                <div className="research-meta">
                  <span className="badge badge-secondary">{item.journal}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.date}</span>
                </div>
                <h3 className="research-title">{item.title}</h3>
                <p className="research-summary">{item.summary}</p>
                <div className="tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', textAlign: 'center' }}>
        <div className="container">
          <Zap size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h2 className="section-title mb-2">Stay Ahead of the Science</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Get curated updates on longevity research, new protocols, and insights from the field's leading voices.
          </p>
          <div className="flex gap-2 justify-center" style={{ flexWrap: 'wrap' }}>
            <Link to="/influencers" className="nav-link" style={{ background: 'var(--primary)', color: '#000', display: 'inline-flex' }}>
              Explore People
            </Link>
            <Link to="/protocols" className="nav-link" style={{ background: 'var(--surface-light)', display: 'inline-flex' }}>
              Browse Protocols
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
