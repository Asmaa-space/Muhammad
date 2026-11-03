import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="nav-header">
      <div className="logo">
        <Link to={`/${lang}`} style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          M. Alsharif
        </Link>
      </div>
      <nav className="nav-links">
        <Link to={`/${lang}/work`}>{t('nav.work')}</Link>
        <Link to={`/${lang}/story`}>{t('nav.story')}</Link>
        <Link to={`/${lang}/about`}>{t('nav.about')}</Link>
        <Link to={`/${lang}/contact`}>{t('nav.contact')}</Link>
        <button onClick={toggleLanguage} className="lang-btn">
          {lang === 'en' ? 'عربي' : 'EN'}
        </button>
      </nav>
    </header>
  );
}