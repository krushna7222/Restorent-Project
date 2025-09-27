import "./Register.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = ({ onSwitch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/v1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("✅ Registration success:", data);

      toast.success("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.error("❌ Error during registration:", error);
      toast.error("Registration Failed!");
    }
  };

  return (
    <div className="form-container form-body">
      <div className="form-box">
        <h2>🍕 Join Us Today!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              type="text"
              placeholder="Enter your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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

          <button type="submit" id="submit-btn">
            Register
          </button>
        </form>

        <p className="switch-link">
          Already have an account? <span onClick={onSwitch}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

// import "./Register.css";
// import React from "react";
// import { useState } from "react";

// const Register = ({ onSwitch }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Registration Successful!");
//   };

//   return (
//     <div className="form-container form-body">
//       <div className="form-box">
//         <h2>🍕 Join Us Today!</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

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

//           <button type="submit" id="submit-btn">
//             Register
//           </button>
//         </form>

//         <p className="switch-link">
//           Already have an account? <span onClick={onSwitch}>Login</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
