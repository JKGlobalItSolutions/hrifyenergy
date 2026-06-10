import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';
import img from '../../assets/img_1.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bill: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you soon.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="contact-main">
      <div className="container contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Book a Free Home Visit today!</h1>
          <p>Schedule a FREE solar consultation at home!</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="form-tagline">We're here to help - Reach out anytime</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="bill"
                  placeholder="What is your Bi-Monthly Electricity Bill?"
                  value={formData.bill}
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit-container">
                <button type="submit" className="btn-submit">Submit</button>
              </div>

              <div className="form-agreement">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreed">I agree to the Terms and Condition</label>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="contact-image-box"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={img} alt="Solar Technicians" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
