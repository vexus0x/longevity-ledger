import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Twitter, Globe, Quote, ArrowRight } from 'lucide-react';
import { INFLUENCERS } from '../data/longevity';

const Influencers: React.FC = () => {
  return (
    <div className="influencers">
      <section className="hero" style={{ padding: '3rem 0' }}>
        <div className="container">
          <Users size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '2.5rem' }}>Longevity Pioneers</h1>
          <p style={{ maxWidth: '700px' }}>
            The scientists, entrepreneurs, and advocates reshaping our understanding of aging. 
            These voices are driving the longevity revolution forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {INFLUENCERS.map(influencer => (
              <Link 
                to={`/influencers/${influencer.id}`} 
                key={influencer.id}
                style={{ textDecoration: 'none' }}
              >
                <div 
                  id={influencer.id} 
                  className="card" 
                  style={{ 
                    scrollMarginTop: '100px',
                    cursor: 'pointer'
                  }}
                >
                  <div className="card-header">
                    <img src={influencer.avatar} alt={influencer.name} className="card-avatar" />
                    <div style={{ flex: 1 }}>
                      <h3 className="card-title">{influencer.name}</h3>
                      <p className="card-subtitle">{influencer.title}</p>
                      <div className="flex gap-1 mt-1">
                        <span className="badge badge-primary">{influencer.followers}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="card-bio">{influencer.bio}</p>

                  <div className="mb-2">
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Specialties</strong>
                    <div className="tags mt-1">
                      {influencer.specialties.slice(0, 3).map(s => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-2">
                    <strong style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Known For</strong>
                    <div className="tags mt-1">
                      {influencer.protocols.map(p => (
                        <span key={p} className="badge badge-secondary">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="quote">
                    <Quote size={16} style={{ marginRight: '0.5rem', color: 'var(--primary)' }} />
                    {influencer.quote}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-2">
                      {influencer.twitter && (
                        <a 
                          href={`https://twitter.com/${influencer.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                          style={{ display: 'inline-flex', fontSize: '0.8rem' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Twitter size={14} style={{ marginRight: '0.25rem' }} />
                          {influencer.twitter}
                        </a>
                      )}
                      {influencer.website && (
                        <a 
                          href={influencer.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nav-link"
                          style={{ display: 'inline-flex', fontSize: '0.8rem', background: 'var(--surface-light)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe size={14} style={{ marginRight: '0.25rem' }} />
                          Website
                        </a>
                      )}
                    </div>
                    <span className="nav-link" style={{ display: 'inline-flex', fontSize: '0.8rem', background: 'var(--primary)', color: '#000' }}>
                      View Profile <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Influencers;
