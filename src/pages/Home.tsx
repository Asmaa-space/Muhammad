import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Home() {
  const { lang, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, [lang]);

  return (
    <div className="container" ref={heroRef} style={{ display: 'flex', alignItems: 'center', height: '80vh' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 className="hero-element" style={{ marginBottom: '1.5rem' }}>{t('hero.greeting')}</h1>
        <p className="hero-element" style={{ fontSize: '1.5rem', maxWidth: '600px' }}>{t('hero.desc')}</p>
        <Link to={`/${lang}/work`} className="btn-primary hero-element">
          {t('hero.cta')}
        </Link>
      </div>
    </div>
  );
}