import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Phone, Mail, MousePointer2, User } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/calculator.css';
import banner from '../../assets/SecondPage/Banner_2.png';

const SolarCalculator = () => {
  const [billAmount, setBillAmount] = useState(2500);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="calc-main">
      {/* Calculator Hero */}
      <section className="calc-hero">
        <div className="calc-hero-img-container">
          <img src={banner} alt="Solar Savings" className="calc-hero-img" />
          <motion.div
            className="calc-hero-title-bar"
            style={{ marginBottom: '30px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Calculate Your Solar Savings Instantly</h1>
          </motion.div>
        </div>
      </section>

      {/* Calculator Form Section */}
      <section className="calc-form-section">
        <div className="container">
          <motion.div className="calc-header" {...fadeInUp}>
            <h2>Solar Savings Calculator</h2>
            <p>Calculate how much you can save by switching to solar energy with Hrify Energy Business</p>
          </motion.div>

          <motion.div className="calc-input-box" {...fadeInUp}>
            <div className="input-group">
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                min="2500"
                max="50000"
              />
              <button className="btn-calculate">Calculate</button>
            </div>
            <p className="input-hint">Please enter amount between ₹2,500 and ₹50,000</p>
          </motion.div>

          {/* Results Dashboard */}
          <motion.div className="results-dashboard" {...fadeInUp}>
            <div className="results-grid">
              <div className="results-left">
                <div className="results-illustration">
                  <img src="/assets/SecondPage/img_1.png" alt="Savings Data" />
                </div>
              </div>

              <div className="results-right">
                <div className="results-illustration">
                  <img src="/assets/SecondPage/img_2.png" alt="Bill Comparison" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="calc-cta-btn-wrapper" {...fadeInUp}>
            <Link to="/contact" className="btn-book">Book Solar Consultation Now!!!</Link>
          </motion.div>

          <motion.div className="full-width-image" {...fadeInUp}>
            <img src="/assets/SecondPage/img_3.png" alt="Full Width Image" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-banner-section">
        <div className="container">
          <motion.div className="cta-banner-content" {...fadeInUp}>
            <h2>Call to Action</h2>
            <h3>Ready to Switch to Solar?</h3>
            <p>Get a detailed site assessment and exact quote from our solar experts.</p>
            <div className="cta-links">
              <span className="cta-link"><MousePointer2 size={14} /> Book Free Site Visit</span>
              <span className="cta-link"><User size={14} /> Talk to a Solar Expert</span>
            </div>
          </motion.div>
          <motion.div
            className="cta-contact-strip"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span><Phone size={14} /> 8438438413 , 8807880764</span>
            <span className="cta-strip-separator">|</span>
            <span><Mail size={14} /> hrify.energy@gmail.com</span>
          </motion.div>
          <motion.div className="cta-features" {...fadeInUp}>
            <p>[Quick & easy estimation][Accurate solar sizing guidance][Cost & savings transparency][Helps plan your solar investment]</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container testimonial-container">
          <ChevronLeft className="nav-arrow" size={32} />
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonial-content">
              <h3>Testimonial</h3>
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
              </div>
              <p>
                "Modernized our energy needs and helped us save money which we
                never thought possible. From day one their team was professional,
                from site inspection to installation we had no issues and very
                helpful staff we had for site visits and installation. Their
                crew was extremely expert, clear with our solar investment,
                and we are happy to recommend them to our family and work
                colleagues."
                - Thank you
              </p>
            </div>
          </motion.div>
          <ChevronRight className="nav-arrow" size={32} />
        </div>
      </section>
    </main>
  );
};

export default SolarCalculator;
