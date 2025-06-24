import { Link, Outlet } from "react-router-dom";
import "./css/Header.css";
function NavBar() {
  return (
    <>
      <div className="header">
        <div>
          <Link className="link">
            <h2>LOGO </h2>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/india/user/About">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/india/user/Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/College">
                College
              </Link>
            </li>
                        <li>
              <Link className="link" to="/Users">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
