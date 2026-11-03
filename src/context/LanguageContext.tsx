import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.story": "My Story",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm Muhammad Alsharif.",
    "hero.desc": "I work at the intersection of software engineering, technology, and project management, turning ideas into meaningful solutions.",
    "hero.cta": "Explore Projects",
    "work.title": "Disciplines",
    "story.title": "Career Timeline",
    "about.title": "About Me",
    "contact.title": "Let's Talk"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.work": "الأعمال",
    "nav.story": "قصتي",
    "nav.about": "عني",
    "nav.contact": "تواصل معي",
    "hero.greeting": "مرحبًا، أنا محمد الشريف.",
    "hero.desc": "أعمل عند تقاطع هندسة البرمجيات والتقنية وإدارة المشاريع، وأسعى لتحويل الأفكار إلى حلول ذات أثر ملموس.",
    "hero.cta": "استكشف المشاريع",
    "work.title": "المجالات",
    "story.title": "التسلسل الزمني",
    "about.title": "نبذة عني",
    "contact.title": "دعنا نتحدث"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('preferredLang') as Language) || 'en';
  });

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}