/* eslint react/prop-types: 0 */

import { Link } from 'react-router-dom';

/* ASSETS */
import '../../styles/confirmform.scss';

const ConfirmForm = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Űrlap beküldése</h2>
        <p>Ezen űrlap beküldésével beleegyezel, hogy megosztod adataid a Passion Project csapatával.</p>
        <Link to="/thankyou">
          <button onClick={onConfirm}>Igen</button>
        </Link>
        <button onClick={onCancel}>Mégsem</button>
      </div>
    </div>
  );
};

export default ConfirmForm;
