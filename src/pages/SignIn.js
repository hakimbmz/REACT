import { useState, Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../components/Input";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(null);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/registration/search/" + email + "/" + password
    );
    const userIs = await response.text();
    setUserRole(userIs);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler} className="ui segment ">
        <Input
          id="Email"
          type="email"
          placeholder="please enter your email  "
          value={email}
          onChange={emailHandler}
        />

        <Input
          id="Password"
          type="password"
          placeholder="please enter your password  "
          value={password}
          onChange={passwordHandler}
        />

        <button type="submit" className="ui primary button">
          Se connecter{" "}
        </button>
        <Link to="/signup">Oublier mot de passe ?</Link>
      </form>
      {userRole === "DONNEUR" && <Navigate to="/Donneur" />}
      {userRole === "AGENT" && <Navigate to="/AGENT" />}
      {userRole === "ADMIN" && <Navigate to="/ADMIN" />}
      {userRole !== ("DONNEUR" && "AGENT" && "ADMIN" && null) && (
        <div className="ui red label ">Incorrect email or password </div>
      )}
    </Fragment>
  );
}

export default SignIn;
