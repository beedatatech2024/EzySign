import React from "react";
import Navbar from "./Components/Navbar";
import FooterBar from "./Components/Footer";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentSigner from "./Components/DocumentSigner";
import AuthPage from "./Pages/AuthPage";
import Secure from "./Components/Secure";

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path="/auth" element={<AuthPage />} />
      <Route element={<Secure />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ds" element={<DocumentSigner />} />
      </Route>
    </Routes>
    <FooterBar />

  </Router>
  );
}

export default App;
