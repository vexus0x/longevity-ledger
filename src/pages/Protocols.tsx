import React from 'react';
import { FlaskConical, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { PROTOCOLS } from '../data/longevity';

const protocols: React.FC = () => {
  const getEvidenceLabel = (level: string) => {
    switch (level) {
      case 'animal': return 'Animal Studies';
      case 'observational': return 'Observational';
      case 'clinical': return 'Clinical Trials';
      case 'proven': return 'Proven';
      default: return level;
    }
  };

  const getEvidenceClass = (level: string) => {
    switch (level) {
      case 'animal': return 'evidence-animal';
      case 'observational': return 'evidence-observational';
      case 'clinical': return 'evidence-clinical';
      case 'proven': return 'evidence-proven';
      default: return '';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'drug': return 'var(--danger)';
      case 'supplement': return 'var(--primary)';
      case 'lifestyle': return 'var(--secondary)';
      case 'hormone': return 'var(--accent)';
      default: return 'var(--text)';
    }
  };

  return (
    <div className="protocols">
      <section className="hero" style={{ padding: '3rem 0' }}>
        <div className="container">
          <FlaskConical size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h1 style={{ fontSize: '2.5rem' }}>Protocol Database</h1>
          <p style={{ maxWidth: '700px' }}>
            Evidence-based guide to longevity interventions. Each protocol rated by 
            scientific evidence level, with benefits, risks, and source references.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {PROTOCOLS.map(protocol => (
              <div key={protocol.id} id={protocol.id} className="card" style={{ scrollMarginTop: '100px' }}>
                <div className="flex justify-between items-center mb-2">
                  <span 
                    className="badge" 
                    style={{ 
                      background: `${getCategoryColor(protocol.category)}20`,
                      color: getCategoryColor(protocol.category)
                    }}
                  >
                    {protocol.category.charAt(0).toUpperCase() + protocol.category.slice(1)}
                  </span>
                  <span className={`evidence-badge ${getEvidenceClass(protocol.evidenceLevel)}`}>
                    <span className="evidence-score">{protocol.evidenceScore}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{getEvidenceLabel(protocol.evidenceLevel)}</span>
                  </span>
                </div>

                <h3 className="card-title" style={{ fontSize: '1.5rem' }}>{protocol.name}</h3>
                <p className="card-bio">{protocol.description}</p>

                {protocol.dosage && (
                  <div className="protocol-meta">
                    <div className="meta-item">
                      <div className="meta-label">Dosage</div>
                      <div className="meta-value">{protocol.dosage}</div>
                    </div>
                    <div className="meta-item">
                      <div className="meta-label">Evidence</div>
                      <div className="meta-value">{getEvidenceLabel(protocol.evidenceLevel)}</div>
                    </div>
                  </div>
                )}

                <div className="mb-2">
                  <h4 style={{ fontSize: '0.875rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle size={14} /> Benefits
                  </h4>
                  <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
                    {protocol.benefits.map((b, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', padding: '0.25rem 0', color: 'var(--text)' }}>
                        • {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.875rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={14} /> Risks & Considerations
                  </h4>
                  <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
                    {protocol.risks.map((r, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', padding: '0.25rem 0', color: 'var(--text-muted)' }}>
                        • {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {protocol.sources && (
                  <div className="mt-2" style={{ 
                    padding: '0.75rem', 
                    background: 'var(--surface-light)', 
                    borderRadius: '8px',
                    fontSize: '0.8rem'
                  }}>
                    <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <ExternalLink size={12} /> Sources
                    </div>
                    <div style={{ color: 'var(--text)' }}>
                      {protocol.sources.join(' • ')}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default protocols;
