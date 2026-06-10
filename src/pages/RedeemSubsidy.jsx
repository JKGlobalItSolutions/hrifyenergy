import { motion } from 'framer-motion';
import '../styles/serviceDetail.css';
import Banner_8 from '../../assets/Banner_8.png';
import img_8 from '../../assets/img_8.png';

const RedeemSubsidy = () => {
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
                    <img src={Banner_8} alt="Redeem your Subsidy Hero" className="sd-hero-img" />
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
                        Redeem your Subsidy
                    </motion.h1>
                </div>
                <motion.div
                    className="sd-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Maximum Savings. Minimum Effort</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="sd-description" {...fadeInUp}>
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Take advantage of government-supported solar subsidy programs and reduce your installation cost
                            significantly. Hrify Energy Business guides you through the entire subsidy process, ensuring a smooth,
                            transparent, and hassle-free experience from application to approval.
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
                            <h3>Benefits of Redeeming Your Subsidy</h3>
                            <br />
                            <p>• Lower upfront installation cost</p>
                            <p>• Faster return on investment</p>
                            <p>• Increased affordability of solar adoption</p>
                            <p>• Government-approved and compliant systems</p>
                        </motion.div>
                        <motion.div
                            className="sd-features-right"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="sd-img-wrapper">
                                <img src={img_8} alt="Subsidy Benefits Illustration" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RedeemSubsidy;
