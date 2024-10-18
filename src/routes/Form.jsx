import { ErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';
import { useState } from 'react';

/* COMPONENTS */
import Fallback from '../components/error/Fallback';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/nav/Footer';
import ConfirmForm from '../components/form/ConfirmForm';

/* ASSETS */
import logo from '../assets/icon.png';
import hime from '../assets/hime.png';
import leaves from '../assets/leaves.png';

/* STYLES */
import '../styles/form.scss';

const Form = () => {
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
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: 'easeInOut',
      },
    },
  };

  const [selectedSource, setSelectedSource] = useState('');
  const [miscText, setMiscText] = useState('');
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [miscHobby, setMiscHobby] = useState('');

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleMiscChange = (event) => {
    setMiscText(event.target.value);
  };

  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies((prev) => (checked ? [...prev, value] : prev.filter((hobby) => hobby !== value)));
  };

  const handleMiscHobbyChange = (event) => {
    setMiscHobby(event.target.value);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleSubmitClick = () => {
    const form = document.querySelector('.styled-form');
    if (form.checkValidity()) {
      setFormIsValid(true);
      setIsFormOpen(true); // Updated variable
    } else {
      form.reportValidity();
    }
  };

  const handleCancel = () => {
    setIsFormOpen(false); // Updated variable
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Navbar />
      <div className="form-page">
        <motion.div className="logo-container" variants={topAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
          <img className="logo" src={logo} alt="Logo" />
          <span>A Passion Project-hez való csatlakozás meghívásos alapon működik. A meghívó kiküldéséhez kérjük töltsd ki az alábbi űrlapot!</span>
        </motion.div>
        <motion.div className="form-container" variants={bottomAnim} initial="hidden" whileInView={'visible'} viewport={{ once: true }}>
          <img className="hime" src={hime} alt="Hime" />
          <form className="styled-form">
            <div className="form-group">
              <label htmlFor="question1">
                {'Elérhetőség'}
                <span className="required-asterisk">*</span>
              </label>
              <input type="email" id="question1" name="email" required placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="question2">
                {'Név'}
                <span className="required-asterisk">*</span>
              </label>
              <input type="text" id="question2" name="name" required placeholder="Név" />
            </div>
            <div className="form-group">
              <label htmlFor="question3">
                {'Kor'}
                <span className="required-asterisk">*</span>
              </label>
              <input type="number" id="question3" name="age" min="18" max="99" required placeholder=">18" />
            </div>
            <div className="form-group">
              <label htmlFor="question4">
                {'Pár szóban írd le miért szeretnél a Passion Project tagja lenni'}
                <span className="required-asterisk">*</span>
              </label>
              <textarea id="question4" name="reason" required placeholder="Azért szeretnék a Passion Project tagja lenni, mert..."></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="question5">
                {'Honnan hallottál rólunk?'}
                <span className="required-asterisk">*</span>
              </label>
              <select id="question5" name="source" value={selectedSource} onChange={handleSourceChange} required>
                <option value="friends">Barátok</option>
                <option value="internet">Internet</option>
                <option value="advertising">Reklámok</option>
                <option value="misc">Egyéb</option>
              </select>
            </div>
            {selectedSource === 'misc' && (
              <div className="form-group">
                <label htmlFor="miscText">
                  {'Kérjük, pontosíts!'}
                  <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  id="miscText"
                  name="miscText"
                  value={miscText}
                  onChange={handleMiscChange}
                  placeholder="Kérjük írd le, hogy pontosan honnan hallottál rólunk"
                  required={selectedSource === 'misc'}
                />
              </div>
            )}
            <div className="form-group">
              <label>
                {'Hobbik (több is választható)'}
                <span className="required-asterisk">*</span>
              </label>
              <div>
                <label>
                  <input type="checkbox" name="games" value="Gaming" onChange={handleHobbyChange} />
                  Gaming
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="movies" value="Filmek/Sorozatok" onChange={handleHobbyChange} />
                  Filmek/Sorozatok
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="Books" value="Könyvek" onChange={handleHobbyChange} />
                  Könyvek
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="anime" value="Anime" onChange={handleHobbyChange} />
                  Anime
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="misc" value="misc" onChange={handleHobbyChange} />
                  Egyéb
                </label>
              </div>
            </div>
            {selectedHobbies.includes('misc') && (
              <div className="form-group">
                <label htmlFor="miscHobby">
                  {'Egyéb hobbi'}
                  <span className="required-asterisk">*</span>
                </label>
                <input type="text" id="miscHobby" name="miscHobby" value={miscHobby} onChange={handleMiscHobbyChange} placeholder="Kérjük írd le egyéb hobbid" required />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="question7">{'Mik a személyes vagy kreatív céljaid a következő évre nézve?'}</label>
              <textarea id="question7" name="goals"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="question8">{'Van még valami, amit szeretnél megosztani velünk?'}</label>
              <textarea id="question8" name="comments" />
            </div>
            <button type="button" onClick={handleSubmitClick}>
              Beküldés
            </button>
          </form>
          <img className="leaves" src={leaves} alt="Leaves" />
        </motion.div>
      </div>
      <Footer />
      <ConfirmForm isOpen={isFormOpen} onConfirm={handleSubmitClick} onCancel={handleCancel} />
    </ErrorBoundary>
  );
};

export default Form;
