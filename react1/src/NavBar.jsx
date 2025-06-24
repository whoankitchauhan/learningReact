import { NavLink, Outlet } from "react-router-dom";
import "./css/Header.css";
function NavBar() {
  return (
    <>
      <div className="header">
        <div>
          <NavLink className="NavLink">
            <h2>LOGO </h2>
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="NavLink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/india/user/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/india/user/Contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/College">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/Users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/Users/list">
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
