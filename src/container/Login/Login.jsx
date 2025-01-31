import React from "react";
import "./Login.css";
import { useState } from "react";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="form-container form-body">
      <div className="form-box">
        <h2>🍽️ Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" id="login-btn">
            Login
          </button>
        </form>

        <p className="switch-link">
          Don't have an account? <span onClick={onSwitch}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
