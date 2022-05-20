import { Fragment, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Input from "./Input";

function UpdateAgent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const params = useParams();


  async function onUpdateAgent() {
    const response = await fetch(
      "http://localhost:8080/api/registration/Agent/" + params.id
    );
    const data = await response.json();
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setPassword(data.password);
  }
  useEffect(() => {
    onUpdateAgent();
  }, []);

  const firstnameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastnameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function updateAgent() {
    const url = `http://localhost:8080/api/registration/updateAgent/ ${params.id}?firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}`;
    await fetch(url, {
      method: "put",
    });
  }
  async function onSubmitHandler(event) {
    event.preventDefault();
    updateAgent();
    setSubmitted(true);
  }

  return (
    <Fragment>
      <h2>modifier agent ayant l'id {params.id} </h2>
      <form className="ui segment" onSubmit={onSubmitHandler}>
        <Input
          id="firstname"
          type="text"
          onChange={firstnameHandler}
          value={firstName}
        />

        <Input
          id="lastname"
          type="text"
          onChange={lastnameHandler}
          value={lastName}
        />

        <Input id="email" type="email" onChange={emailHandler} value={email} />

        <Input
          id="password"
          type="password"
          onChange={passwordHandler}
          value={password}
        />

        <div>
          <button className="ui primary button submit" type="submit">
            submit changes
          </button>
        </div>
        {submitted!== false   && <Navigate to='/admin'/>   }
      </form>
    </Fragment>
  );
}

export default UpdateAgent;
