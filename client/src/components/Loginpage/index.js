import React, { useState } from "react";
import "./index.css";

export default function Login() {
  const [isForgot, setIsForgot] = useState(false);
  const handlelistener = () => {
    
  }

  return (
    <div className="login-container">
      <div className={`login-box ${isForgot ? "slide" : ""}`}>
        {/* Image Section */}
        <div className="login-image">
          <img src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?uid=R175547614&ga=GA1.1.1224038525.1740066881&semt=ais_hybrid" alt="Login" />
        </div>

        {/* Login Form Section */}
        <div className="login-form">
          <h2>EzySign Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handlelistener}>Login</button>
          <a href="#" onClick={() => setIsForgot(!isForgot)}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

