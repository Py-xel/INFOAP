import { Link } from 'react-router-dom';

/* STYLES */
import '../../styles/navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <i className="fab fa-teamspeak" />
        <span className="name">passion project</span>
      </a>
      <div className="links">
        <Link to="/">Főoldal</Link>
        <Link to="/contact">Kapcsolat</Link>
        <Link to="/form">Csatlakozz</Link>
      </div>
    </div>
  );
};

export default Navbar;
