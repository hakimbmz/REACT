import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import Model from "./Model";
function NavBar(props) {
  const [model, setModel] = useState(false);
  const modelOn = () => {
    setModel(true);
  };
  const modelOff = () => {
    setModel(false);
  };
  return (
    <Fragment>
      {model && (
        <Model
          title="confirm Logout"
          message="are you sue you want to logout "
          onClick={props.logout}
          removeModel={modelOff}
        />
      )}
      <nav>
        <div className="logo">Donation.tn</div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "  active " : "")}
            >
              About us
            </NavLink>
          </li> 
          <li>
       { props.loggedIn &&    <NavLink
              to="/notif"
              className={({ isActive }) => (isActive ? "  active " : "")}
            >
              Notification
            </NavLink>}
          </li>
          <li>
            {!props.loggedIn && (
              <NavLink
                className={({ isActive }) => (isActive ? "  active item" : "")}
                to="/signin"
              >
                Login
              </NavLink>
            )}
            {props.loggedIn && (
              <NavLink onClick={modelOn} to="/">
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavBar;
