import React from "react";
import Navbar from "./Components/Navbar";
import FooterBar from "./Components/Footer";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
