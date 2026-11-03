import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import Story from './pages/Story';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const { lang } = useLanguage();

  return (
    <Router>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to={`/${lang}`} replace />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/work" element={<Work />} />
          <Route path="/:lang/story" element={<Story />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
