import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Twitter, Globe, ExternalLink, 
  Award, TrendingUp, Clock, Play, BookOpen,
  MessageCircle, Heart, Share2, Zap, Target, Brain, Activity
} from 'lucide-react';
import { INFLUENCERS, PROTOCOLS, RECENT_RESEARCH } from '../data/longevity';

// Simulated real-time data
const TWITTER_FEEDS: Record<string, { date: string; content: string; likes: number; retweets: number }[]> = {
  'bryan-johnson': [
    { date: '2h', content: 'Blueprint Update: 47 months of data now. Biological age holding at 28.', likes: 2340, retweets: 456 },
    { date: '1d', content: 'New study confirms: younger blood plasma factors reverse aging markers in mice.', likes: 1890, retweets: 312 },
    { date: '3d', content: 'The future of longevity is in personalized biomarker tracking. Data is destiny.', likes: 3420, retweets: 678 },
  ],
  'david-sinclair': [
    { date: '5h', content: 'Exciting new data on epigenetic reprogramming. We\'re getting closer.', likes: 4521, retweets: 892 },
    { date: '2d', content: 'NAD+ levels decline with age. NMN supplementation shows promise in new trials.', likes: 3200, retweets: 543 },
    { date: '4d', content: 'Lifespan Podcast just hit 10M downloads! Thank you for listening.', likes: 2890, retweets: 234 },
  ],
  'peter-attia': [
    { date: '8h', content: 'The Drive podcast episode on rapamycin safety is now live.', likes: 1567, retweets: 234 },
    { date: '2d', content: 'Zone 2 training: The single most important exercise for longevity.', likes: 4100, retweets: 876 },
    { date: '5d', content: 'New paper on cardiovascular aging. Thread below 🧵', likes: 2890, retweets: 456 },
  ],
  'gary-brecka': [
    { date: '3h', content: '3A Protocol update: Blood work analysis for 500+ members.', likes: 987, retweets: 123 },
    { date: '1d', content: 'Your mitochondria are the key to everything. Optimize them first.', likes: 2340, retweets: 345 },
    { date: '2d', content: 'New podcast episode: Why most supplements are a waste of money.', likes: 1780, retweets: 234 },
  ],
};

const PODCAST_APPEARANCES: Record<string, { title: string; platform: string; date: string; url: string }[]> = {
  'bryan-johnson': [
    { title: 'The Blueprint Protocol', platform: 'Lex Fridman', date: '2025-11', url: '#' },
    { title: 'Blueprint Results Update', platform: 'Huberman Lab', date: '2025-09', url: '#' },
    { title: 'Joe Rogan Experience', platform: 'Joe Rogan', date: '2025-06', url: '#' },
  ],
  'david-sinclair': [
    { title: 'The Future of Aging', platform: 'The Drive', date: '2025-12', url: '#' },
    { title: 'Huberman Lab', platform: 'Huberman Lab', date: '2025-10', url: '#' },
    { title: 'Tim Ferriss Show', platform: 'Tim Ferriss', date: '2025-08', url: '#' },
  ],
};

const ACHIEVEMENTS: Record<string, { title: string; year: string; description: string }[]> = {
  'bryan-johnson': [
    { title: 'Founded Blueprint', year: '2021', description: 'Launched the most ambitious longevity project ever' },
    { title: 'Sold Braintree', year: '2013', description: 'Exit to PayPal for $800M' },
    { title: 'Founded Kernel', year: '2018', description: 'Neurotechnology company for brain-computer interfaces' },
  ],
  'david-sinclair': [
    { title: 'Discovered Sirtuins', year: '1999', description: 'Breakthrough discovery in aging research' },
    { title: 'Published Lifespan', year: '2019', description: 'NYT bestselling book on longevity science' },
    { title: 'Harvard Co-Director', year: '2017', description: 'Led Center for Biology of Aging' },
  ],
};

const InfluencerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const influencer = INFLUENCERS.find(i => i.id === id);
  const [activeTab, setActiveTab] = useState<'overview' | 'feeds' | 'media' | 'timeline'>('overview');

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

  const twitterFeeds = TWITTER_FEEDS[id!] || [];
  const podcastAppearances = PODCAST_APPEARANCES[id!] || [];
  const achievements = ACHIEVEMENTS[id!] || [];
  const associatedProtocols = PROTOCOLS.filter(p => 
    influencer.protocols.some(ip => p.name.toLowerCase().includes(ip.toLowerCase().split(' ')[0]))
  );
  
  // Find mentions in research
  const researchMentions = RECENT_RESEARCH.filter(r =>
    r.summary.toLowerCase().includes(influencer.name.toLowerCase().split(' ').pop() || '') ||
    r.tags.some(t => influencer.specialties.some(s => s.toLowerCase().includes(t.toLowerCase())))
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'drug': return <Activity size={18} />;
      case 'supplement': return <Zap size={18} />;
      case 'lifestyle': return <Brain size={18} />;
      default: return <Target size={18} />;
    }
  };

  return (
    <div className="influencer-detail">
      {/* Immersive Hero Header */}
      <section 
        style={{ 
          minHeight: '60vh',
          background: `linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
                      linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
                      var(--surface)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }} />
        
        <div className="container" style={{ padding: '3rem 1.5rem', position: 'relative', zIndex: 1 }}>
          <Link to="/influencers" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Back to People
          </Link>
          
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={influencer.avatar} 
                alt={influencer.name}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid var(--primary)',
                  boxShadow: '0 0 60px rgba(16, 185, 129, 0.3)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'var(--primary)',
                color: '#000',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                LIVE
              </div>
            </div>
            
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                {influencer.name}
              </h1>
              <p style={{ fontSize: '1.35rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                {influencer.title}
              </p>
              
              <div className="tags mb-2" style={{ gap: '0.5rem' }}>
                <span className="badge badge-primary" style={{ padding: '0.4rem 1rem' }}>
                  {influencer.followers} followers
                </span>
                {influencer.specialties.slice(0, 2).map(s => (
                  <span key={s} className="badge badge-secondary" style={{ padding: '0.4rem 0.75rem' }}>
                    {s}
                  </span>
                ))}
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '700px', margin: '1.5rem 0' }}>
                {influencer.bio}
              </p>
              
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                borderLeft: '3px solid var(--primary)',
                padding: '1.25rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text)' }}>
                  "{influencer.quote}"
                </p>
              </div>
              
              <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                {influencer.twitter && (
                  <a 
                    href={`https://twitter.com/${influencer.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ display: 'inline-flex', padding: '0.6rem 1rem' }}
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
                    style={{ display: 'inline-flex', padding: '0.6rem 1rem', background: 'var(--surface-light)' }}
                  >
                    <Globe size={16} style={{ marginRight: '0.5rem' }} />
                    Website
                  </a>
                )}
              </div>
            </div>
            
            {/* Quick Stats */}
            <div style={{ 
              background: 'var(--surface-light)', 
              borderRadius: '16px', 
              padding: '1.5rem',
              minWidth: '200px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                  {achievements.length}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Achievements
                </div>
              </div>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>
                  {influencer.protocols.length}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Protocols
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>
                  {researchMentions.length}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Research
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div style={{ 
        background: 'var(--surface)', 
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: '65px',
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', gap: '0' }}>
          {[
            { id: 'overview', icon: <Award size={16} />, label: 'Overview' },
            { id: 'feeds', icon: <MessageCircle size={16} />, label: 'Live Updates' },
            { id: 'media', icon: <Play size={16} />, label: 'Appearances' },
            { id: 'timeline', icon: <Clock size={16} />, label: 'Timeline' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 1.5rem',
                background: activeTab === tab.id ? 'var(--background)' : 'transparent',
                border: 'none',
                borderBottom: `2px solid ${activeTab === tab.id ? 'var(--primary)' : 'transparent'}`,
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'all 0.2s'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <section className="section">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              {/* Specialties */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Brain size={24} style={{ color: 'var(--primary)' }} />
                  <h2 style={{ fontSize: '1.5rem' }}>Areas of Expertise</h2>
                </div>
                <div className="grid grid-2" style={{ gap: '1rem' }}>
                  {influencer.specialties.map((specialty, i) => (
                    <div 
                      key={specialty} 
                      className="card"
                      style={{ 
                        textAlign: 'center', 
                        padding: '1.5rem',
                        background: `linear-gradient(135deg, rgba(16, 185, 129, ${0.05 + i * 0.02}) 0%, rgba(16, 185, 129, ${0.02 + i * 0.01}) 100%)`
                      }}
                    >
                      <TrendingUp size={28} style={{ color: 'var(--primary)', marginBottom: '0.75rem' }} />
                      <h3 style={{ fontSize: '1rem' }}>{specialty}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Known Protocols */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Activity size={24} style={{ color: 'var(--secondary)' }} />
                  <h2 style={{ fontSize: '1.5rem' }}>Known Protocols & Approaches</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {influencer.protocols.map((protocol, i) => (
                    <div 
                      key={protocol} 
                      className="card"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        padding: '1.25rem',
                        background: `linear-gradient(90deg, rgba(59, 130, 246, ${0.03 + i * 0.02}) 0%, transparent 100%)`
                      }}
                    >
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--secondary)'
                      }}>
                        {getCategoryIcon(protocol.toLowerCase().includes('training') ? 'lifestyle' : 'supplement')}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{protocol}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          {influencer.name.split(' ')[0]}'s documented approach
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Live Updates Tab */}
          {activeTab === 'feeds' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <MessageCircle size={24} style={{ color: 'var(--primary)' }} />
                <h2 style={{ fontSize: '1.5rem' }}>Latest Updates & Activity</h2>
              </div>
              
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {twitterFeeds.map((feed, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: '1.5rem',
                      borderBottom: i < twitterFeeds.length - 1 ? '1px solid var(--border)' : 'none',
                      display: 'flex',
                      gap: '1rem'
                    }}
                  >
                    <img 
                      src={influencer.avatar} 
                      alt={influencer.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 600 }}>{influencer.name}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{feed.date}</span>
                      </div>
                      <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>{feed.content}</p>
                      <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          <Heart size={14} /> {feed.likes.toLocaleString()}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          <Share2 size={14} /> {feed.retweets.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href={`https://twitter.com/${influencer.twitter?.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{ display: 'inline-flex', marginTop: '1.5rem' }}
              >
                <Twitter size={16} style={{ marginRight: '0.5rem' }} />
                View All Posts
              </a>
            </div>
          )}

          {/* Media Appearances Tab */}
          {activeTab === 'media' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Play size={24} style={{ color: 'var(--accent)' }} />
                <h2 style={{ fontSize: '1.5rem' }}>Recent Appearances & Interviews</h2>
              </div>
              
              <div className="grid grid-3" style={{ gap: '1rem' }}>
                {podcastAppearances.map((podcast, i) => (
                  <div 
                    key={i} 
                    className="card"
                    style={{ 
                      cursor: 'pointer',
                      background: `linear-gradient(135deg, rgba(245, 158, 11, ${0.05 + i * 0.02}) 0%, rgba(245, 158, 11, ${0.02 + i * 0.01}) 100%)`
                    }}
                  >
                    <div style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      background: 'var(--surface-light)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <Play size={32} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{podcast.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{podcast.platform}</p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{podcast.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Clock size={24} style={{ color: 'var(--primary)' }} />
                <h2 style={{ fontSize: '1.5rem' }}>Career Timeline & Achievements</h2>
              </div>
              
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                  {/* Timeline Line */}
                  <div style={{
                    position: 'absolute',
                    left: '7px',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(180deg, var(--primary) 0%, var(--surface-light) 100%)'
                  }} />
                  
                  {achievements.map((achievement, i) => (
                    <div 
                      key={i}
                      style={{ 
                        position: 'relative',
                        paddingBottom: i < achievements.length - 1 ? '2rem' : '0',
                        display: 'flex',
                        gap: '1.5rem'
                      }}
                    >
                      {/* Timeline Dot */}
                      <div style={{
                        position: 'absolute',
                        left: '-1.65rem',
                        top: '0',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                        border: '3px solid var(--surface)',
                        boxShadow: '0 0 0 3px var(--primary)'
                      }} />
                      
                      <div style={{ flex: 1 }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: 'var(--primary)',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          marginBottom: '0.5rem'
                        }}>
                          {achievement.year}
                        </span>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{achievement.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Protocols */}
      {associatedProtocols.length > 0 && (
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <BookOpen size={24} style={{ color: 'var(--accent)' }} />
              <h2 style={{ fontSize: '1.5rem' }}>Related Protocols in Our Database</h2>
            </div>
            <div className="grid grid-2" style={{ gap: '1rem' }}>
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

      {/* Research Mentions */}
      {researchMentions.length > 0 && (
        <section className="section">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <ExternalLink size={24} style={{ color: 'var(--secondary)' }} />
              <h2 style={{ fontSize: '1.5rem' }}>Recent Research & Mentions</h2>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {researchMentions.map((item, i) => (
                <div 
                  key={item.id} 
                  style={{ 
                    padding: '1.5rem',
                    borderBottom: i < researchMentions.length - 1 ? '1px solid var(--border)' : 'none'
                  }}
                >
                  <div className="research-meta">
                    <span className="badge badge-secondary">{item.journal}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.date}</span>
                  </div>
                  <h3 className="research-title">{item.title}</h3>
                  <p className="research-summary">{item.summary}</p>
                  <div className="tags mt-1">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InfluencerDetail;
