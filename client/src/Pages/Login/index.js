import React, { useState } from "react";
import "./index.css";

export default function Login() {
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    // Simulated authentication (Replace with API call)
    console.log("Logging in with:", { email, password });
    setMessage("Login successful!");
  };

  // Handle Forgot Password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }

    // Simulated password reset (Replace with API call)
    console.log("Reset link sent to:", email);
    setMessage("Password reset link sent to your email.");
  };

  return (
    <div className="login-container">
      <div className={`login-box ${isForgot ? "slide" : ""}`}>
        {/* Image Section */}
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?uid=R175547614&ga=GA1.1.1224038525.1740066881&semt=ais_hybrid"
            alt="Login"
          />
        </div>

        {/* Login / Forgot Password Form Section */}
        <div className="login-form">
          <h2>{isForgot ? "Forgot Password" : "EzySign Login"}</h2>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          {!isForgot && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          {isForgot ? (
            <button onClick={handleForgotPassword}>Reset Password</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}

          <a href="#" onClick={() => setIsForgot(!isForgot)}>
            {isForgot ? "Back to Login" : "Forgot Password?"}
          </a>
        </div>
      </div>
    </div>
  );
}
