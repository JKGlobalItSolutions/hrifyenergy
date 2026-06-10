import { motion } from 'framer-motion';
import '../styles/serviceDetail.css';
import Banner_6 from '../../assets/Banner_6.png';
import img_6 from '../../assets/img_6.png';

const InstallationService = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="sd-main">
            {/* Hero Section */}
            <motion.section
                className="sd-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="sd-hero-container">
                    <img src={Banner_6} alt="High-Quality Installation Hero" className="sd-hero-img" />
                </div>
            </motion.section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <motion.h1
                        className="sd-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        High-Quality Installation in 24 hours
                    </motion.h1>
                </div>
                <motion.div
                    className="sd-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Driven by Innovation. Powered by Solar.</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="sd-description" {...fadeInUp}>
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Your rooftop solar system will be installed promptly, cleanly, and professionally by our certified
                            experts, ensuring minimal disruption and maximum performance from day one.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Content Section */}
            <section className="sd-content-section">
                <div className="container">
                    <div className="sd-grid">
                        <motion.div
                            className="sd-text-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p>
                                Your rooftop solar system will be installed
                                promptly, cleanly, and professionally by trained
                                technicians who follow strict quality and safety
                                standards, ensuring a smooth installation process
                                and long-term energy savings.
                            </p>
                        </motion.div>
                        <motion.div
                            className="sd-features-right"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="sd-img-wrapper">
                                <img src={img_6} alt="Solar Installation Progress" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InstallationService;
