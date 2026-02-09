import React, { useState } from 'react';
import { FileText, ExternalLink, Tag, Search } from 'lucide-react';
import { RECENT_RESEARCH } from '../data/longevity';

const Research: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResearch = RECENT_RESEARCH.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
    r.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allTags = Array.from(new Set(RECENT_RESEARCH.flatMap(r => r.tags)));

  return (
    <div className="research">
      <section className="hero" style={{ padding: '3rem 0' }}>
        <div className="container">
          <FileText size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '2.5rem' }}>Research Intelligence</h1>
          <p style={{ maxWidth: '700px' }}>
            Curated peer-reviewed studies, clinical trials, and breakthrough discoveries 
            shaping the longevity science landscape.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Search & Filter */}
          <div className="card mb-4" style={{ padding: '1.5rem' }}>
            <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search studies, journals, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    background: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>
            <div className="tags mt-2">
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginRight: '0.5rem' }}>Filter by:</span>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(searchTerm.includes(tag) ? '' : tag)}
                  className={`tag ${searchTerm.toLowerCase().includes(tag.toLowerCase()) ? 'badge-primary' : ''}`}
                  style={{ cursor: 'pointer', border: 'none' }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Research List */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {filteredResearch.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No studies found matching your search.
              </div>
            ) : (
              filteredResearch.map(item => (
                <div key={item.id} className="research-item" id={item.id} style={{ scrollMarginTop: '100px' }}>
                  <div className="research-meta">
                    <span className="badge badge-secondary">{item.journal}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {item.date}
                    </span>
                    {item.url && (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem' }}
                      >
                        <ExternalLink size={12} />
                        View Paper
                      </a>
                    )}
                  </div>
                  
                  <h3 className="research-title">{item.title}</h3>
                  
                  <p className="research-summary">{item.summary}</p>

                  <div className="research-findings">
                    <h4>Key Findings</h4>
                    <ul>
                      {item.keyFindings.map((finding, i) => (
                        <li key={i}>{finding}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tags mt-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
