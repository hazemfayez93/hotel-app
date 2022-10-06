import "./BannerButton.scss";
import { Link } from "react-router-dom";

const BannerButton = ({ link, children }) => {
  return (
    <Link className="button-dark-link" to={link}>
      <button className="button-dark">
        <span className="button-dark-text">{children}</span>
      </button>
    </Link>
  );
};

export default BannerButton;
