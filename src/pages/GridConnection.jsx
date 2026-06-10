import { motion } from 'framer-motion';
import '../styles/serviceDetail.css';
import Banner_7 from '../../assets/Banner_7.png';
import img_7 from '../../assets/img_7.png';

const GridConnection = () => {
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
                    <img src={Banner_7} alt="Connection to the Grid Hero" className="sd-hero-img" />
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
                        Connection to the Grid
                    </motion.h1>
                </div>
                <motion.div
                    className="sd-blue-banner"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ originX: 0.5 }}
                >
                    <p>Your Solar Subsidy, Made Simple</p>
                </motion.div>
            </section>

            {/* Description Section */}
            <motion.section className="sd-description" {...fadeInUp}>
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Grid connection enables your solar power system to seamlessly integrate with the local electricity
                            network, allowing you to use solar energy efficiently while maintaining uninterrupted power supply.
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
                            style={{ fontSize: '14px' }}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p><strong>Net Metering Advantage:</strong> Earn credits for surplus power supplied to the grid, reducing your electricity bills.</p>
                            <br />
                            <p><strong>Reliable Power Supply:</strong> Enjoy continuous electricity without dependency on batteries.</p>
                            <br />
                            <p><strong>Cost-Effective Solution:</strong> Lower installation and maintenance costs compared to off-grid systems.</p>
                            <br />
                            <p><strong>Optimized Energy Usage:</strong> Smart inverters automatically balance solar and grid power for maximum efficiency.</p>
                        </motion.div>
                        <motion.div
                            className="sd-features-right"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="sd-img-wrapper" style={{ border: 'none' }}>
                                <img src={img_7} alt="Grid Connection Diagram" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GridConnection;
