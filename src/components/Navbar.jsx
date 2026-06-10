import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

// Import images
import Navbar_logo from '../../assets/FirstPage/Navbar_logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={Navbar_logo} alt="Hrify Energy Logo" className="logo" />
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></li>
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
            onClick={() => window.innerWidth <= 768 && setDropdownOpen(!dropdownOpen)}
          >
            <span className="nav-link dropdown-trigger">
              Services <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
            </span>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <li><Link to="/free-home-visit" className="dropdown-link" onClick={closeMobileMenu}>Free Home Visit</Link></li>
                  <li><Link to="/personalized-quote" className="dropdown-link" onClick={closeMobileMenu}>Personalised Quote</Link></li>
                  <li><Link to="/govt-paperwork" className="dropdown-link" onClick={closeMobileMenu}>Govt PaperWork & Subsidy Assistance</Link></li>
                  <li><Link to="/installation-service" className="dropdown-link" onClick={closeMobileMenu}>High Quality installations in 24 hrs</Link></li>
                  <li><Link to="/grid-connection" className="dropdown-link" onClick={closeMobileMenu}>Connection to the Grid</Link></li>
                  <li><Link to="/redeem-subsidy" className="dropdown-link" onClick={closeMobileMenu}>Redeem your Subsidy</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li><Link to="/calculator" className="nav-link" onClick={closeMobileMenu}>Solar Calculator</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
