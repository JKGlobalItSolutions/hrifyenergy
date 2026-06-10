import { motion } from 'framer-motion';
import '../styles/serviceDetail.css';
import Banner_4Up from '../../assets/Banner_4Up.png';
import Banner_4Down from '../../assets/Banner_4Down.png';
import img_4 from '../../assets/img_4.png';

const PersonalizedQuote = () => {
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
                className="sd-hero-stacked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={Banner_4Up} alt="Personalized Quote Banner Top" className="sd-full-banner" />
                <img src={Banner_4Down} alt="Personalized Quote Banner Bottom" className="sd-full-banner" />
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
                        Personalized Quote
                    </motion.h1>
                </div>
                <motion.div
                    className="sd-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Based on your energy requirements, our team will create a custom proposal for you.</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="sd-description" {...fadeInUp}>
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Based on your energy requirements, our team will create a customized solar proposal that
                            includes system sizing, cost estimates, projected savings, and installation timelines—ensuring
                            the best solution for your needs.
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
                                Based on your energy requirements, our team will
                                create a custom solar proposal tailored to your
                                property and consumption patterns. The proposal
                                includes system design, estimated costs, savings
                                analysis, and performance projections, giving you
                                a clear understanding of your investment and
                                long-term benefits.
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
                                <img src={img_4} alt="Personalized Solar Plan" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PersonalizedQuote;
