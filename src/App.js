import { Route ,Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import SignIn from "./pages/SignIn";
import Donneur from "./pages/Donneur" ;
import Agent from "./pages/Agent" ;
import Admin from "./pages/Admin" ;
import SignUpForm from "./pages/SignUpForm";
import React , {useState} from "react";
import About from "./pages/About";
import Home from "./pages/Home.js";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const onLogin=()=>{
    console.log('t');
    setIsLoggedIn(true)
  }

  const onLogout=()=>{
    console.log('out');
    setIsLoggedIn(false)
  }
  
    return (
      <div>
        <NavBar loggedIn={isLoggedIn} login={onLogin} logout={onLogout}/>
         <Routes>
          <Route  path="/"  element={<Home/>}/>
          <Route  path="/home"  element={<Home/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUpForm/>}/>
          <Route  path="/DONNEUR" element={<Donneur/>}/>
          <Route  path="/AGENT" element={<Agent/>}/>
          <Route  path="/ADMIN" element={<Admin/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route path="*" element={<SignIn/>}/>
        </Routes>
      </div>
      );
}

export default App;