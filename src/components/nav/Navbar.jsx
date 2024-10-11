import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/form">Form</Link>
    </div>
  );
};

export default Navbar;
