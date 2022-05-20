import { Fragment, useState  } from "react";
import { Navigate } from "react-router-dom";
import Input from "./Input";

function AddAgent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombreOfUsers, setNombreOfUsers] = useState(0);

 



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

  async function onSubmitHandler(event) {
    event.preventDefault();
    await fetch(
      "http://localhost:8080/api/registration/registerAgent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      }
    );

  setTimeout(()=>{

   getUsers();
  },1000)

  async function getUsers(){ const response = await fetch( "http://localhost:8080/api/stats/allUsers");
  const data= await response.json();
  setNombreOfUsers(data)}
  }
  return (
    <Fragment>
      <h2>Ajouter un agent </h2>
    <form className="ui segment" onSubmit={onSubmitHandler}>
      <Input id="firstname" type="text" onChange={firstnameHandler} />

      <Input id="lastname" type="text" onChange={lastnameHandler} />

      <Input id="email" type="email" onChange={emailHandler} />

      <Input id="password" type="password" onChange={passwordHandler} />

      <div>
        <button className="ui primary button submit" type="submit">
          submit
        </button>
        
      </div>
      {nombreOfUsers!==0  && <Navigate to='/admin'/>   }
    </form>
    </Fragment>
  );
}

export default AddAgent;
