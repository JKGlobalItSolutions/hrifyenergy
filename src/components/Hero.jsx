import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.p
          className="hero-top-text"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Trusted Solar Company
        </motion.p>
      </div>
      <motion.div
        className="hero-bottom-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Powering a Greener Tomorrow with Solar Energy</h1>
      </motion.div>
    </section>
  );
};

export default Hero;
