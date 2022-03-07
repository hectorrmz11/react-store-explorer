import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <section>
        <Link to="/">
          <h2>Store Explorer</h2>
        </Link>
      </section>
    </header>
  );
};

export default Header;
