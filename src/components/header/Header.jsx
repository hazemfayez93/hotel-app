import { Link } from "react-router-dom";
import { ReactComponent as LeafIcon } from "../../assets/icons/leaf-solid.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <span className="header-logo-text">NL</span>
        <LeafIcon className="header-logo-text-leaf" />
      </Link>
      <Link className="header-button" to="search">
        <span className="header-button-text">Book Now</span>
      </Link>
    </header>
  );
};

export default Header;
