import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterBar from "./components/footer";
import About from "./components/About";
// import Contact from "./components/contact";
import Login from "./components/Loginpage";

function App() {
  return (
    <div>
     <Navbar />
     <About />
      <FooterBar />
      <Login />
    </div>
  );
}

export default App;
