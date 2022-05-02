import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <div className="ui secondary pointing menu">
      <NavLink
        className={({ isActive }) => (isActive ? "active item":"")}
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active item" :"")}
      >
        About us
      </NavLink>
      <div className="right menu">
        {!props.loggedIn && (
          <NavLink
            className={({ isActive }) => (isActive ? "active item" :"")}
            to="/signin"
          >
            Login
          </NavLink>
        )}
        {props.loggedIn && (
          <NavLink onClick={props.logout}
            className={({ isActive }) => (isActive ? "active item" :"" )}
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
