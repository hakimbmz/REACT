import { useState, useEffect, Fragment } from "react";
import { Link, Route } from "react-router-dom";
import UpdateAgent from "./UpdateAgent";

function AllAgents() {
  const [listOfAgents, setListOfAgents] = useState([]);

  useEffect(() => {
    getAgents();
  }, [listOfAgents]);

  async function deleteAgent(id) {
    await fetch("http://localhost:8080/api/registration/deleteAgent/" + id, {
      method: "delete",
    });
  }



  async function getAgents() {
    const response = await fetch(
      "http://localhost:8080/api/registration/show/Agents"
    );
    const data = await response.json();
    setListOfAgents(data);
  }
  const table = listOfAgents.map((agent) => {
    return (
      <tr key={agent.id}>
        <td></td>
        <td>{agent.id}</td>
        <td>{agent.firstName}</td>
        <td>{agent.lastName}</td>
        <td>{agent.email}</td>
        <td>
          <button
            onClick={() => deleteAgent(agent.id)}
            className="ui inverted red button"
          >
            supprimer
          </button>
        </td>
        <td>
        <Link className="ui inverted green button"  to={`/agents/${agent.id}`}>
        modifier
        </Link>
         
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <h2>Liste des agents</h2>
      <table className="ui striped table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>EMAIL</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </Fragment>
  );
}

export default AllAgents;
