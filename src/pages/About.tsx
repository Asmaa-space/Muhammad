import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>{t('about.title')}</h2>
      
      <div 
        className="ability-card-wrapper" 
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`ability-card ${flipped ? 'is-flipped' : ''}`}>
          <div className="card-face card-front">
            <h2 style={{ marginBottom: '1rem', color: 'var(--charcoal)' }}>Muhammad Alsharif</h2>
            <h3 style={{ color: 'var(--gray)', fontWeight: '400' }}>Software Engineer</h3>
            <p style={{ marginTop: '1rem', color: 'var(--accent)', fontWeight: 'bold' }}>Qimam Fellow 2026</p>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#ccc' }}>Tap to flip</p>
          </div>
          <div className="card-face card-back">
            <h3 style={{ marginBottom: '1.5rem' }}>Verified Skills</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.9 }}>
              <li>Frontend Development (React, Vue)</li>
              <li>Backend Architecture (Node, SQL)</li>
              <li>Project & Product Management</li>
              <li>UI/UX Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}