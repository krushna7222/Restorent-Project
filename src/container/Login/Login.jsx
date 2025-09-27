import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log(response.data);
        throw new Error(response.data);
      }

      const data = await response.json();
      console.log("✅ Login success:", data);

      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("❌ Error during login:", error);
      toast.error("Login Failed!");
    }
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

// import React from "react";
// import "./Login.css";
// import { useState } from "react";

// const Login = ({ onSwitch }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Login Successful!");
//   };

//   return (
//     <div className="form-container form-body">
//       <div className="form-box">
//         <h2>🍽️ Welcome Back!</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" id="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="switch-link">
//           Don't have an account? <span onClick={onSwitch}>Sign Up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
