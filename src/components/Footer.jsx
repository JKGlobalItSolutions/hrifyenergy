import { Facebook, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

// Import images
import logo from '../../assets/FirstPage/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <img src={logo} alt="Hrify Energy Logo" className="footer-logo" />
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="footer-right" style={{ textAlign: "center", justifyContent: "center" }}>
          <div className="footer-info" style={{ textAlign: "center" }}>
            <p className="footer-tagline">Hrify Energy Business - Harness the Power of the Sun ☀️</p>
            <p className="footer-separator">------</p>
            <div className="footer-cta-section">
              <h3>Call to Action Section</h3>
              <p>Switch to Solar. Save Money. Save the Planet.</p>
              <p>Start your solar journey today with Hrify Energy Business.</p>
              <p className="footer-contact">📞 8438438413 , 8807880764 | 📧 hrify.energy@gmail.com</p>
            </div>
          </div>
        </div>
      </div> <br />
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright 2026 | www.hrifyenergy.com | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
