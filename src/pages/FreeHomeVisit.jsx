import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import '../styles/freeHomeVisit.css';
import img_2 from '../../assets/Banner_3.png';
import img_3 from '../../assets/img_3.png';

const FreeHomeVisit = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } },
        viewport: { once: true }
    };

    return (
        <main className="fhv-main">
            {/* Hero Section */}
            <section className="fhv-hero">
                <motion.div
                    className="fhv-hero-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={img_2} alt="Free Home Visit Hero" className="fhv-hero-img" />
                </motion.div>
            </section>

            {/* Header Banner */}
            <section className="fhv-header-banner">
                <div className="container">
                    <motion.h1
                        className="fhv-title"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Free Home Visit
                    </motion.h1>
                </div>
                <motion.div
                    className="fhv-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Our solar expert will visit your home and assess your rooftop for installation.</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="fhv-description" {...fadeInUp}>
                <div className="container">
                    <div className="fhv-description-box">
                        <p>
                            Our certified solar expert will visit your home to conduct a detailed rooftop assessment,
                            evaluating your space, sunlight exposure, and energy needs. We provide a personalized
                            solar plan tailored to your home, along with a clear estimate of potential savings and system size.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Features Section */}
            <section className="fhv-features">
                <div className="container">
                    <div className="fhv-features-grid">
                        <motion.div
                            className="fhv-features-left"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="whileInView"
                            viewport={{ once: true }}
                        >
                            <ul className="fhv-checklist">
                                {[
                                    "Expert guidance from certified solar professionals",
                                    "Accurate assessment of rooftop suitability",
                                    "Customized solar solutions for maximum efficiency",
                                    "Transparent cost & savings estimate",
                                    "Hassle-free installation planning"
                                ].map((item, index) => (
                                    <motion.li key={index} variants={fadeInUp}>
                                        <CheckCircle2 className="fhv-check-icon" size={24} />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            className="fhv-features-right"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="fhv-img-wrapper">
                                <img src={img_3} alt="Solar Installation Assessment" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FreeHomeVisit;
