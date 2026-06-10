import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import SolarCalculator from './pages/SolarCalculator.jsx';
import Contact from './pages/Contact.jsx';
import FreeHomeVisit from './pages/FreeHomeVisit.jsx';
import PersonalizedQuote from './pages/PersonalizedQuote.jsx';
import GovtPaperwork from './pages/GovtPaperwork.jsx';
import InstallationService from './pages/InstallationService.jsx';
import GridConnection from './pages/GridConnection.jsx';
import RedeemSubsidy from './pages/RedeemSubsidy.jsx';

function App() {
  return (
    <Router basename="/Hrify-energy">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<SolarCalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-home-visit" element={<FreeHomeVisit />} />
          <Route path="/personalized-quote" element={<PersonalizedQuote />} />
          <Route path="/govt-paperwork" element={<GovtPaperwork />} />
          <Route path="/installation-service" element={<InstallationService />} />
          <Route path="/grid-connection" element={<GridConnection />} />
          <Route path="/redeem-subsidy" element={<RedeemSubsidy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
