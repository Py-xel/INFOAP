import { motion } from 'framer-motion';

/* COMPONENTS */
import Navbar from '../nav/Navbar';
import Footer from '../nav/Footer';

/* STYLES */
import '../../styles/thankyou.scss';

const ThankYou = () => {
  const topAnim = {
    hidden: { opacity: 0, y: -150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <div className="thankyou-container">
      <Navbar />
      <motion.div className="thankyou-message" variants={topAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
        <div className="text-container">
          <i className="fa-solid fa-heart" />
          <h1>Köszönjük jelenetkezésed!</h1>
          <p>Jelentkezésedet megkaptuk és hamarosan értesíteni fogunk.</p>
          <a href="/">Vissza a főoldalra</a>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ThankYou;
