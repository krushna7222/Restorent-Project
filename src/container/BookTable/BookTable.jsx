// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./BookTable.css";
// import { useNavigate } from "react-router-dom";

// const BookTable = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     guests: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Populate email from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const userData = JSON.parse(storedUser);
//       if (userData?.data) {
//         setFormData((prev) => ({ ...prev, email: userData.data }));
//       }
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const storedUser = localStorage.getItem("user");
//       const token = storedUser ? JSON.parse(storedUser)?.data : null;

//       const res = await fetch("http://localhost:8000/api/v1/book-table", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           ...(token && { Authorization: token }),
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         const result = await res.json();
//         console.log("Booking success:", result);

//         toast.success("✅ Your table has been booked successfully!");
//         setFormData((prev) => ({
//           ...prev,
//           name: "",
//           phone: "",
//           date: "",
//           time: "",
//           guests: "",
//         }));
//         navigate("/mybooking");
//       } else {
//         toast.error("❌ Failed to book table. Try again.");
//       }
//     } catch (error) {
//       console.error("Error booking table:", error);
//       toast.error("❌ Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="book-table-container">
//       <div className="book-table-box">
//         <h2>Book a Table</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             readOnly // make it readonly
//           />

//           <label>Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />

//           <label>Time</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />

//           <label>Number of Guests</label>
//           <input
//             type="number"
//             name="guests"
//             min="1"
//             value={formData.guests}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Booking..." : "Book Now"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookTable;

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookTable.css";
import { useNavigate } from "react-router-dom";

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Get token from localStorage if required
      const storedUser = localStorage.getItem("user");
      const token = storedUser ? JSON.parse(storedUser)?.data : null;

      const res = await fetch("http://localhost:8000/api/v1/book-table", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: token }),
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Booking success:", result);

        toast.success("✅ Your table has been booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
        });
      } else {
        toast.error("❌ Failed to book table. Try again.");
      }
      navigate("/mybooking");
    } catch (error) {
      console.error("Error booking table:", error);
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-table-container">
      <div className="book-table-box">
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label>Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
