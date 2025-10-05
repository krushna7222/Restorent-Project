import React, { useState } from "react";
import "./Subscribe.css";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/v1/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // console.log(response.data);
        throw new Error(response.data);
      }

      const data = await response.json();
      console.log("✅ Suscribed:", data);
      toast.success("Suscribed Successful!");
    } catch (error) {
      console.error("❌ Error during Suscribe:", error);
      toast.error("Suscribe Failed!");
    }
  };

  return (
    <section id="subscribe">
      <div>
        <h1>Subscribe To Our NewsLetter</h1>
        <p>And Never Miss Latest Updates!</p>
        <form>
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
