import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();
  
  const doors = [
    { id: 1, title: 'Software Engineering', desc: 'Building robust scalable systems.' },
    { id: 2, title: 'Product Management', desc: 'Defining features and driving value.' },
    { id: 3, title: 'Project Management', desc: 'Delivering outcomes on schedule.' },
    { id: 4, title: 'Leadership', desc: 'Guiding teams and organizations.' }
  ];

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>{t('work.title')}</h2>
      
      <div className="doors-grid">
        {doors.map(door => (
          <div key={door.id} className="door-container">
            <div className="door-frame">
              <h3 style={{ color: 'var(--charcoal)', marginBottom: '1rem' }}>{door.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{door.desc}</p>
            </div>
            <div className="door-3d">
              <h3 style={{ padding: '0 1rem', textAlign: 'center' }}>0{door.id}<br/>{door.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}