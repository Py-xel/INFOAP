/* STYLES */
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text-container">
        <span>2024 MIT License. Made with </span>
        <i className="far fa-heart" />
        <a className="github-link" href="https://github.com/Py-xel/INFOAP">
          {' '}
          Szalánczy Szilárd
        </a>
      </div>
    </div>
  );
};

export default Footer;
