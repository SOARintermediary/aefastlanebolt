import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CompanyFormation from './pages/CompanyFormation';
import VisaServices from './pages/VisaServices';
import ProServices from './pages/ProServices';
import HrSolutions from './pages/HrSolutions';
import Blog from './pages/Blog';
import FreeZoneVsMainland from './pages/blog/FreeZoneVsMainland';
import MainlandBusinessLicense from './pages/blog/MainlandBusinessLicense';
import StartingBusinessForeigner from './pages/blog/StartingBusinessForeigner';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <PricingTable />
                <ContactForm />
              </main>
            } />
            <Route path="/company-formation" element={<CompanyFormation />} />
            <Route path="/visa-services" element={<VisaServices />} />
            <Route path="/pro-services" element={<ProServices />} />
            <Route path="/hr-solutions" element={<HrSolutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/free-zone-vs-mainland" element={<FreeZoneVsMainland />} />
            <Route path="/blog/mainland-business-license-dubai" element={<MainlandBusinessLicense />} />
            <Route path="/blog/starting-business-uae-foreigner" element={<StartingBusinessForeigner />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;