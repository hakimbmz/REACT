import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./pages/SignIn";
import Agent from "./pages/Agent";
import Admin from "./pages/Admin";
import SignUpForm from "./pages/SignUpForm";
import React, { Fragment, useEffect, useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AddAgent from "./components/AddAgent";
import AllAgents from "./components/AllAgents";
import Notification from "./pages/Notification";
import Stats from "./components/Stats";
import UpdateAgent from "./components/UpdateAgent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("isLogged");
    if (value === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLogged", "1");
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLogged", "0");
  };

  return (
    <Fragment>
      <NavBar loggedIn={isLoggedIn} login={onLogin} logout={onLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn setLoginTrue={onLogin} />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="/admin" element={<Admin logout={onLogout} />} />
        <Route path="/addagent" element={<AddAgent />} />
        <Route path="/agents" element={<AllAgents />} />
        <Route path="/agents/:id" element={<UpdateAgent />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/about" element={<About />} />
        <Route path="/notif" element={<Notification />} />
        <Route path="/updateAgent" element={<UpdateAgent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
