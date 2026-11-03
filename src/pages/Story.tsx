import { useLanguage } from '../context/LanguageContext';

export default function Story() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <h2 style={{ marginTop: '2rem', marginBottom: '3rem' }}>{t('story.title')}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--charcoal)' }}>Arena eLeague</h3>
          <p style={{ color: 'var(--accent)', fontWeight: 'bold', margin: '0.5rem 0' }}>Founder & Developer</p>
          <p>Founded a university e-sports platform scaling to over 850 users, focusing on robust system architecture and real-time tournament tracking.</p>
        </div>
        
        <div style={{ padding: '2rem', background: 'var(--white)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--charcoal)' }}>Qimam Fellowship</h3>
          <p style={{ color: 'var(--accent)', fontWeight: 'bold', margin: '0.5rem 0' }}>Fellow 2026</p>
          <p>Selected for the prestigious Qimam Fellowship, bridging tech with strategic management and leadership.</p>
        </div>
      </div>
    </div>
  );
}