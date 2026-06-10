import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import { motion } from 'framer-motion';
import {
  Check,
  Sun,
  Home as HomeIcon,
  Lightbulb,
  ShieldCheck,
  Building2,
  LayoutGrid,
  Settings
} from 'lucide-react';
import '../styles/home.css';

// Import images
import Img1 from '../../assets/FirstPage/Img1.png';
import img2 from '../../assets/FirstPage/img2.png';
import img3 from '../../assets/FirstPage/img3.png';
import img4 from '../../assets/FirstPage/img4.png';
import WhyChooseEnergyBusiness from '../../assets/FirstPage/WhyChooseEnergyBusiness.png';
import md_image from '../../assets/FirstPage/md_image.png';
import hrifysmalllogo from '../../assets/FirstPage/hrifysmalllogo.jpg';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true }
  };

  return (
    <main>
      <Hero />

      {/* About Section */}
      <motion.section
        className="about-intro"
        {...fadeInUp}
      >
        <div className="container">
          <p className="about-text-bold"> <br /> <br />
            Hrify Energy Business is a trusted solar energy solutions provider, committed to
            delivering high-quality, cost-effective, and eco-friendly solar power systems.
            We help homes and businesses reduce electricity costs while contributing to a
            cleaner and greener future through advanced solar technology.
          </p>
          <br />
          <div className="cta-wrapper">
            <Link to="/contact" className="btn btn-consultation">Get a Free Solar Consultation</Link>
          </div>
        </div>
      </motion.section>

      {/* Stats Cards Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              { icon: <HomeIcon size={24} />, count: "500+", label: "Happy Homes" },
              { icon: <Lightbulb size={24} />, count: "95% less", label: "Electricity bills" },
              { icon: <ShieldCheck size={24} />, count: "25+ yrs", label: "Panel Warranty" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card cyan-card"
                variants={fadeInUp}
              >
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h3>{stat.count}</h3>
                  <p>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            className="service-list"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Sun size={18} />,
                title: "Residential Solar Systems",
                text: "Custom solar solutions designed to power your home efficiently, reduce monthly electricity bills, and increase long-term savings."
              },
              {
                icon: <Building2 size={18} />,
                title: "Commercial & Industrial Solar",
                text: "High-capacity solar installations for offices, factories, and commercial spaces to improve energy efficiency and sustainability."
              },
              {
                icon: <LayoutGrid size={18} />,
                title: "Solar Rooftop Solutions",
                text: "Space-optimized rooftop solar systems with maximum energy output and long-term reliability."
              },
              {
                icon: <Settings size={18} />,
                title: "Solar Installation & Maintenance",
                text: "End-to-end services including site inspection, system design, installation, and ongoing maintenance support."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
              >
                <div className="service-header">
                  {service.icon} <span>{service.title}</span>
                </div>
                <div className="service-body">
                  <p className="service-highlight">{service.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="gallery-section">
        <div className="container">
          <motion.div
            className="gallery-row"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[Img1, img2, img3, img4].map((img, index) => (
              <motion.div
                key={index}
                className="gallery-image-box"
                variants={fadeInUp}
              >
                <img src={img} alt={`Solar Panel ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-flex">
            <motion.div
              className="why-choose-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Why Choose Hrify Energy Business?</h2>
              <ul className="why-choose-bullet">
                <li><Check size={16} /> High-quality solar panels & inverters</li>
                <li><Check size={16} /> Experienced solar experts & technicians</li>
                <li><Check size={16} /> Cost-effective and customized solutions</li>
                <li><Check size={16} /> On-time installation & reliable service</li>
                <li><Check size={16} /> Eco-friendly & government-approved systems</li>
              </ul>
            </motion.div>
            <motion.div
              className="why-choose-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={WhyChooseEnergyBusiness} alt="Why Choose Us Graphic" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="md-section">
        <div className="container">
          <div className="md-grid">
            <motion.div
              className="md-profile"
              {...fadeInUp}
            >
              <div className="md-image-container">
                <img src={md_image} alt="Managing Director" className="md-image" />
              </div>
              <div className="md-details">
                <p className="md-name">J.Jayakrishnan M.E., MBA.</p>
                <p className="md-title">Managing Director</p>
                <img src={hrifysmalllogo} alt="Hrify Logo" className="md-hrify-logo" />
              </div>
            </motion.div>
            <div className="md-vision-mission">
              <motion.div
                className="vm-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="vm-heading">VISION</h3>
                <p>To become a leading solar energy company by empowering communities and businesses with innovative and reliable solar power solutions.</p>
              </motion.div>
              <motion.div
                className="vm-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="vm-heading">MISSION</h3>
                <p>To make clean and renewable solar energy accessible and affordable for everyone, while promoting sustainable living and energy independence.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
