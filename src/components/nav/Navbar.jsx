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
        <Link to="/INFOAP/">Főoldal</Link>
        <Link to="/INFOAP/contact">Kapcsolat</Link>
        <Link to="/INFOAP/form">Csatlakozz</Link>
      </div>
    </div>
  );
};

export default Navbar;
