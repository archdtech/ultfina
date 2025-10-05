import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import HomeV1 from './pages/HomeV1';
import HomeV0 from './pages/HomeV0';
import Scale from './pages/Scale';
import Studio from './pages/Studio';
import Programs from './pages/Programs';
import Programsv2 from './pages/Programsv2';
import NordicScaleProgram from './pages/programs/NordicScaleProgram';
import GlobalCompetenceProgram from './pages/programs/GlobalCompetenceProgram';
import TradePromotionProgram from './pages/programs/TradePromotionProgram';
import Portfolio from './pages/Portfolio';
import Insights from './pages/Insights';
import NordicScalingGuide from './pages/insights/NordicScalingGuide';
import CoOwnershipSuccess from './pages/insights/CoOwnershipSuccess';
import Careers from './pages/Careers';
import ApplyFounder from './pages/ApplyFounder';
import ApplyPartner from './pages/ApplyPartner';
import Nobon from './pages/portfolio/Nobon';
import Paytota from './pages/portfolio/Paytota';
import Paytack from './pages/portfolio/Paytack';
import B2and from './pages/portfolio/B2and';
import Pricetify from './pages/portfolio/Pricetify';
import DesignSystem from './pages/DesignSystem';
import Sitemap from './pages/Sitemap';
import About from './pages/About';
import Contact from './pages/Contact';
import ContactTest from './pages/ContactTest';
import CEOCofounder from './pages/careers/CEOCofounder';
import COOCofounder from './pages/careers/COOCofounder';
import VentureBuilder from './pages/careers/VentureBuilder';
import SeniorConsultant from './pages/careers/SeniorConsultant';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/v1" element={<HomeV1 />} />
          <Route path="/v0" element={<HomeV0 />} />
          <Route path="/scale" element={<Scale />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programsv2" element={<Programsv2 />} />
          <Route path="/programs/nordic-scale-program" element={<NordicScaleProgram />} />
          <Route path="/programs/global-competence-program" element={<GlobalCompetenceProgram />} />
          <Route path="/programs/trade-promotion-program" element={<TradePromotionProgram />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/nobon" element={<Nobon />} />
          <Route path="/portfolio/paytota" element={<Paytota />} />
          <Route path="/portfolio/paytack" element={<Paytack />} />
          <Route path="/portfolio/b2and" element={<B2and />} />
          <Route path="/portfolio/pricetify" element={<Pricetify />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/nordic-scaling-guide" element={<NordicScalingGuide />} />
          <Route path="/insights/co-ownership-success" element={<CoOwnershipSuccess />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/ceo-cofounder" element={<CEOCofounder />} />
          <Route path="/careers/coo-cofounder" element={<COOCofounder />} />
          <Route path="/careers/venture-builder" element={<VentureBuilder />} />
          <Route path="/careers/senior-consultant" element={<SeniorConsultant />} />
          <Route path="/apply-founder" element={<ApplyFounder />} />
          <Route path="/apply-partner" element={<ApplyPartner />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-test" element={<ContactTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;