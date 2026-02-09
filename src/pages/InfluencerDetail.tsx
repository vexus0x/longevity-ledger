import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Twitter, Globe, ExternalLink, Calendar, Users, TrendingUp, Award } from 'lucide-react';
import { INFLUENCERS, PROTOCOLS } from '../data/longevity';

const InfluencerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const influencer = INFLUENCERS.find(i => i.id === id);
  
  if (!influencer) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>Influencer not found</h1>
        <Link to="/influencers" className="nav-link" style={{ display: 'inline-flex', marginTop: '1rem' }}>
          <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to People
        </Link>
      </div>
    );
  }

  // Get protocols associated with this influencer
  const associatedProtocols = PROTOCOLS.filter(p => 
    influencer.protocols.some(ip => p.name.toLowerCase().includes(ip.toLowerCase().split(' ')[0]))
  );

  return (
    <div className="influencer-detail">
      {/* Hero Header */}
      <section 
        style={{ 
          padding: '4rem 0',
          background: 'linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)',
          borderBottom: '1px solid var(--border)'
        }}
      >
        <div className="container">
          <Link to="/influencers" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to People
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <img 
              src={influencer.avatar} 
              alt={influencer.name}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--primary)'
              }}
            />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{influencer.name}</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {influencer.title}
              </p>
              <div className="tags mb-2">
                <span className="badge badge-primary">{influencer.followers}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '700px' }}>
                {influencer.bio}
              </p>
              <div className="quote" style={{ marginTop: '1.5rem', maxWidth: '600px' }}>
                "{influencer.quote}"
              </div>
              
              <div className="flex gap-2 mt-2">
                {influencer.twitter && (
                  <a 
                    href={`https://twitter.com/${influencer.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ display: 'inline-flex' }}
                  >
                    <Twitter size={16} style={{ marginRight: '0.5rem' }} />
                    {influencer.twitter}
                  </a>
                )}
                {influencer.website && (
                  <a 
                    href={influencer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ display: 'inline-flex', background: 'var(--surface-light)' }}
                  >
                    <Globe size={16} style={{ marginRight: '0.5rem' }} />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Award size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{ fontSize: '1.5rem' }}>Specialties</h2>
          </div>
          <div className="grid grid-3">
            {influencer.specialties.map(specialty => (
              <div key={specialty} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <TrendingUp size={32} style={{ color: 'var(--primary)', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem' }}>{specialty}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Known Protocols */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Users size={24} style={{ color: 'var(--secondary)' }} />
            <h2 style={{ fontSize: '1.5rem' }}>Known Protocols & Approaches</h2>
          </div>
          <div className="grid grid-2">
            {influencer.protocols.map(protocol => (
              <div key={protocol} className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{protocol}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {influencer.name.split(' ')[0]}'s documented approach to longevity through this protocol.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Protocol Database Entries */}
      {associatedProtocols.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Calendar size={24} style={{ color: 'var(--accent)' }} />
              <h2 style={{ fontSize: '1.5rem' }}>Related Protocols in Our Database</h2>
            </div>
            <div className="grid grid-2">
              {associatedProtocols.map(protocol => (
                <Link to={`/protocols#${protocol.id}`} key={protocol.id} style={{ textDecoration: 'none' }}>
                  <div className="card">
                    <div className="flex justify-between items-center mb-1">
                      <span 
                        className="badge" 
                        style={{ 
                          background: `${protocol.category === 'drug' ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)'}`,
                          color: protocol.category === 'drug' ? 'var(--danger)' : 'var(--primary)'
                        }}
                      >
                        {protocol.category}
                      </span>
                      <span className={`evidence-badge evidence-${protocol.evidenceLevel}`}>
                        {protocol.evidenceScore}/100
                      </span>
                    </div>
                    <h3 className="card-title">{protocol.name}</h3>
                    <p className="card-bio" style={{ fontSize: '0.9rem' }}>{protocol.description.slice(0, 120)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Updates Placeholder */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <ExternalLink size={24} style={{ color: 'var(--text-muted)' }} />
            <h2 style={{ fontSize: '1.5rem' }}>Latest Updates</h2>
          </div>
          <div className="card">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <Calendar size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Real-time updates coming soon</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                We're building connections to track {influencer.name.split(' ')[0]}'s latest posts, podcasts, and announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerDetail;
