import { ErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';

/* COMPONENTS */
import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/nav/Footer';
import Map from '../components/map/Map';

/* STYLES */
import '../styles/contact.scss';

const Contact = () => {
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
  const bottomAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div className="invite-container">
        <motion.div className="invite-text-container" variants={topAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
          <h1>Találkozzunk!</h1>
          <span>
            Várunk szeretettel a hetente megszervezett találkozóinkra minden péntek délután 17:30 és 19:00 között! Amennyiben tagja vagy a Passion Project csapatának, úgy minden találkozás előtt
            email-ben értesítünk a megszervezésről.
          </span>
          <p>Cím: 1138 Budapest, Margit sziget | Zenélő Szökőkút</p>
          <p>
            Bármilyen kérdésben keressetek a{' '}
            <a className="email" href="mailto:hamisemail@gmail.com">
              hamisemail@gmail.com
            </a>
            -on.
          </p>
        </motion.div>
      </div>
      <motion.div className="map-container" variants={bottomAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
        <Map />
      </motion.div>
      <Footer />
    </ErrorBoundary>
  );
};

export default Contact;
