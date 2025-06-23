import { Link } from "react-router-dom";
import "./css/Header.css";
function NavBar() {
  return (
    <div className="header">
      <div>
        <Link className="link">
          <h2>LOGO </h2>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/About">About</Link>
          </li>
          <li>
            <Link className="link" to="/Contact">Contact</Link>
          </li>
                    <li>
            <Link className="link" to="/College">College</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
