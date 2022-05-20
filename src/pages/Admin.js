import { Link } from "react-router-dom";
import stat from "../assets/graph.png"
import liste from "../assets/liste.png"
import add from "../assets/more.png"
import "./Admin.css";

const { Fragment } = require("react");

function Admin() {
  return (
    <Fragment>
      
        <div className="sidebar">
          <header>Welcome !</header>
          <Link to="/stats" >
           <img src={stat} className="fonts"   />
            <span>Statistique </span>
          </Link>
          <Link to="/agents">
          <img  src={liste} className="fonts"
          />
            <span>List-Agent</span>
          </Link>
          <Link to="/addagent">
        <img src={add} className="fonts" />
            <span>Add Agent</span>
          </Link>
        </div>

    </Fragment>
  );
}

export default Admin;
