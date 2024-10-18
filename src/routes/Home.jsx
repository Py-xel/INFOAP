import { ErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';

/* COMPONENTS */
import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/nav/Footer';

/* ASSETS */
import still_here from '../assets/still_here.mp4';
import ashen_one from '../assets/ashen_one.png';
import wall_e from '../assets/wall-e.png';
import location_dot from '../assets/location_dot.png';

/* STYLES */
import '../styles/home.scss';
import '../styles/activities.scss';
import '../styles/games.scss';
import '../styles/movies.scss';
import '../styles/location.scss';
import '../styles/join.scss';

const Home = () => {
  /* ANIMATIONS */
  const animation_delay = 0.2;

  const activityAnim = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: animation_delay,
      },
    },
  };
  const leftAnim = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: animation_delay,
      },
    },
  };
  const rightAnim = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: animation_delay,
      },
    },
  };
  const topAnim = {
    hidden: { opacity: 0, y: -150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        delay: animation_delay,
      },
    },
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div className="home-page">
        <div className="video-container">
          <video className="hero_video" src={still_here} controls={false} autoPlay={true} preload="true" muted={true} loop={true} disablePictureInPicture={true}></video>
          <div className="overlay">
            <div className="text-container">
              <h1>
                A hobbi-ranjongók <span className="highlight">legnagyobb</span> központja
              </h1>
              <p>Csatlakozz Magyarország legkedveltebb hobbi-közösségéhez!</p>
              <a className="animated-button" href="/form">
                <span className="button-text">Csatlakozz most!</span>
                <i className="fas fa-arrow-right arrow"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="activities-container">
          <motion.div className="activities">
            {['Film esték', 'Beszélgetés', 'Játékok', 'Találkozások'].map((activity, index) => (
              <motion.div key={index} className={`activity-${index + 1}`} variants={activityAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                <div className="icon-container">
                  {index === 0 && <i className="fa-solid fa-film"></i>}
                  {index === 1 && <i className="fa-solid fa-comments"></i>}
                  {index === 2 && <i className="fa-solid fa-gamepad"></i>}
                  {index === 3 && <i className="fa-solid fa-location-dot"></i>}
                </div>
                <h1>{activity}</h1>
                <span>
                  {index === 0 && 'Csatlakozz hozzánk hangulatos moziestekre, ahol a nevetés és a történetmesélés életre kel!'}
                  {index === 1 && 'Légy részese kellemes csevegéseknek, melyek összehozzák a barátokat és az új ismerősöket.'}
                  {index === 2 && 'Játssz velünk! Akár társasjátékok, akár videojátékok, itt mindenki talál magának csapatot!'}
                  {index === 3 && 'Ismerdd meg újonnan szerzett barátaid közelebbről, hetente szervezett találkozásoknál!'}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div className="games-container">
          <motion.div className="games" initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
            <motion.img src={ashen_one} variants={leftAnim} whileHover={{ scale: 1.03 }} />
            <motion.div variants={rightAnim} className="games-text-container">
              <h1>Hódítsunk együtt!</h1>
              <span
                className="
                games-description">
                Sikereinket és kudarcainkat, barátokkal legjobb megosztani. Együtt szembeszállunk az előttünkálló kihívásokkal legyen az bármilyen játék!
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="movies-container">
          <motion.div className="movies" initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
            <motion.div variants={leftAnim} className="movies-text-container">
              <h1>Gyere filmezzünk!</h1>
              <span className="movies-description">
                Közös moziesténk kihagyhataltan élmény mindenki számára, úgyhogy vedd kezedbe kedvenc harapnivalód és merülj el velünk egy felejthetetlen filmmaratonban!
              </span>
            </motion.div>
            <motion.img src={wall_e} variants={rightAnim} whileHover={{ scale: 1.03 }} />
          </motion.div>
        </motion.div>
        <motion.div className="location-container">
          <motion.div className="location" initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
            <motion.img src={location_dot} variants={leftAnim} whileHover={{ scale: 1.03 }} />
            <motion.div variants={rightAnim} className="location-text-container">
              <h1>Találkozzunk!</h1>
              <span className="location-description">Hetente szervezett találkozásaink tökéletes alkalmat nyújtanak újonnan szerzett barátaid megismerésére! </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="join-container">
          <div className="join-text-container">
            <motion.h1 variants={topAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
              Mire vársz, csatlakozz!
            </motion.h1>
            <a className="animated-button" href="/form">
              <span className="button-text">Csatlakozz most!</span>
              <i className="fas fa-arrow-right arrow"></i>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
