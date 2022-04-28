import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <div className="ui secondary pointing menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/about"
      >
        {" "}
        About us{" "}
      </NavLink>
      <div className="right menu">
        {!props.loggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/signin"
          >
            Login
          </NavLink>
        )}
        {props.loggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            Logout
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
