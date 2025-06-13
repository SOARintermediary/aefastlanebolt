import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import ContactForm from './components/contact/ContactForm';
import Footer from './components/footer/Footer';
import FeatureGrid from './components/features/FeatureGrid';
import Blog from './pages/Blog';

const AppContent = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div 
        className={`min-h-screen bg-white ${isRTL ? 'font-arabic' : 'font-sans'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={isRTL ? 'ar' : 'en'}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className={isRTL ? 'text-right' : 'text-left'}>
              <Hero />
              <Services />
              <FeatureGrid />
              <ContactForm />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;