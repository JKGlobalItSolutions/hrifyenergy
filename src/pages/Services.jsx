import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/services.css';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service');

  const services = [
    'Free Home Visit',
    'Personalised Quote',
    'Govt PaperWork & Subsidy Assistance',
    'High Quality installations in 24 hrs',
    'Connection to the Grid',
    'Redeem your Subsidy'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectService = (service) => {
    setSelectedService(service);
    setIsOpen(false);

    // Use slightly better navigation than window.location.href if possible
    // but keeping current logic to avoid breaking routes
    const routes = {
      'Free Home Visit': '/free-home-visit',
      'Personalised Quote': '/personalized-quote',
      'Govt PaperWork & Subsidy Assistance': '/govt-paperwork',
      'High Quality installations in 24 hrs': '/installation-service',
      'Connection to the Grid': '/grid-connection',
      'Redeem your Subsidy': '/redeem-subsidy'
    };

    if (routes[service]) {
      window.location.href = routes[service];
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="services-page">
      <div className="container services-container">
        <motion.h1 {...fadeInUp}>Our Services</motion.h1>
        <motion.p
          className="services-subtitle"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience a seamless transition to solar with our comprehensive end-to-end services.
        </motion.p>

        <motion.div
          className="dropdown-wrapper"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className={`custom-dropdown ${isOpen ? 'is-open' : ''}`}
            onClick={toggleDropdown}
          >
            <div className="dropdown-header">
              <span className={`selected-text ${selectedService === 'Select a service' ? 'placeholder' : ''}`}>
                {selectedService}
              </span>
              <ChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="dropdown-list-container"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="dropdown-list">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className={`dropdown-item ${selectedService === service ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectService(service);
                        }}
                      >
                        <span className="item-text">{service}</span>
                        {selectedService === service && <Check className="check-icon" size={16} />}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="services-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>
            From the initial <strong>free home visit</strong> to the final <strong>subsidy redemption</strong>,
            Hrify Energy handles everything. We ensure <strong>high-quality installations</strong> within
            24 hours and manage all <strong>government paperwork</strong> so you can enjoy
            clean energy without the hassle.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Services;
