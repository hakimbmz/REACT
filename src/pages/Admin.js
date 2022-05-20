import { Link } from "react-router-dom";
import stat from "../assets/graph.png"
import liste from "../assets/liste.png"
import add from "../assets/more.png"
import logout from "../assets/logout.png"
import Notification from "../assets/notification.png"
import "./Admin.css";

const { Fragment } = require("react");

function Admin(props) {
  return (
    <Fragment>
      
        <div className="sidebar">
          <header>Welcome !</header>
          <Link to="/stats" >
           <img src={stat} className="fonts" alt=""/>
            <span>Statistique </span>
          </Link>
          <Link to="/agents">
          <img  src={liste} className="fonts" alt=""
          />
            <span>List-Agent</span>
          </Link>
          <Link to="/addagent">
        <img src={add} className="fonts" alt="" />
            <span>Add Agent</span>
          </Link>
          <Link to="/notif">
        <img src={Notification} className="fonts" alt="" />
            <span>Notification</span>
          </Link>
          <a href="/home" onClick={props.logout}>
        <img src={logout} className="fonts" alt="" />
            <span>logout</span>
          </a>
        </div>

    </Fragment>
  );
}

export default Admin;
