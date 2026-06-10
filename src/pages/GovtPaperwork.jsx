import { motion } from 'framer-motion';
import '../styles/serviceDetail.css';
import Banner_5 from '../../assets/Banner_5.png';
import img_5 from '../../assets/img_5.png';

const GovtPaperwork = () => {
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
                    <img src={Banner_5} alt="Govt Paperwork Hero" className="sd-hero-img" />
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
                        Govt Paperwork & Subsidy Assistance
                    </motion.h1>
                </div>
                <motion.div
                    className="sd-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Paperwork Managed. Solar Simplified.</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="sd-description" {...fadeInUp}>
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Our team manages the complete documentation process and works closely with the local EB
                            office to ensure timely approvals, clear communication, and uninterrupted progress throughout
                            your solar installation journey.
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
                                Our team manages the complete documentation
                                process and works closely with the local EB office
                                to ensure timely approvals, clear communication,
                                and uninterrupted progress throughout your solar
                                installation journey.
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
                                <img src={img_5} alt="Subsidy Assistance" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GovtPaperwork;
