import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/INFOAP/">Home</Link>
      <Link to="/INFOAP/contact">Contact</Link>
      <Link to="/INFOAP/form">Form</Link>
    </div>
  );
};

export default Navbar;
