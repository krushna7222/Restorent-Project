import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Booking.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Get token from localStorage
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          // If no user, set dummy data
          toast.info("⚠️ User is not logged in. Showing dummy data.");
          setBookings([
            {
              id: 1,
              name: "Dummy User",
              date: new Date().toISOString(),
              time: "07:00 PM",
              guests: 2,
            },
            {
              id: 2,
              name: "Demo Guest",
              date: new Date(Date.now() + 86400000).toISOString(),
              time: "08:30 PM",
              guests: 6,
            },
            {
              id: 3,
              name: "Demo Guest",
              date: new Date(Date.now() - 86400000).toISOString(),
              time: "08:30 PM",
              guests: 4,
            },
            {
              id: 4,
              name: "Dummy User",
              date: new Date(Date.now() - 86400000).toISOString(),
              time: "07:00 PM",
              guests: 3,
            },
            {
              id: 5,
              name: "Demo Guest",
              date: new Date().toISOString(),
              time: "08:30 PM",
              guests: 9,
            },
            {
              id: 6,
              name: "Demo Guest",
              date: new Date(Date.now() + 86400000).toISOString(),
              time: "08:30 PM",
              guests: 5,
            },
          ]);
          setLoading(false);
          return;
        }

        const userData = JSON.parse(storedUser);
        const token = userData?.data;

        if (!token) {
          toast.error("❌ Token missing in user data. Showing dummy data.");
          setBookings([
            {
              id: 1,
              name: "Dummy User",
              date: new Date().toISOString(),
              time: "07:00 PM",
              guests: 2,
            },
          ]);
          setLoading(false);
          return;
        }

        // Call API with Authorization header
        const res = await fetch("http://localhost:8000/api/v1/my-booking", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!res.ok) {
          toast.error("❌ Failed to fetch bookings. Showing dummy data.");
          setBookings([
            {
              id: 1,
              name: "Fallback User",
              date: new Date().toISOString(),
              time: "06:00 PM",
              guests: 3,
            },
          ]);
          setLoading(false);
          return;
        }

        const data = await res.json();
        console.log("Fetched bookings:", data.data);
        setBookings(data.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("❌ Error fetching bookings. Showing dummy data.");
        setBookings([
          {
            id: 1,
            name: "Error User",
            date: new Date().toISOString(),
            time: "05:00 PM",
            guests: 1,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const getStatusClass = (date) => {
    const today = new Date();
    const bookingDate = new Date(date);

    today.setHours(0, 0, 0, 0);
    bookingDate.setHours(0, 0, 0, 0);

    if (bookingDate.getTime() < today.getTime()) return "expired";
    if (bookingDate.getTime() === today.getTime()) return "today";
    return "upcoming";
  };

  if (loading) return <p className="loading">Loading bookings...</p>;

  return (
    <div className="mybooking-container">
      <div className="header">
        <h2>My Bookings</h2>
        <button className="book-btn" onClick={() => navigate("/booktable")}>
          Book Table
        </button>
      </div>

      {bookings.length === 0 ? (
        <p className="no-booking">No bookings found</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className={`booking-card ${getStatusClass(booking.date)}`}
            >
              <h3>{booking.name}</h3>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Time: {booking.time}</p>
              <p>Guests: {booking.guests}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Booking.css";

// const Booking = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         // Get token from localStorage
//         const storedUser = localStorage.getItem("user");
//         if (!storedUser) {
//           console.error("No user token found");
//           setLoading(false);
//           return;
//         }

//         const userData = JSON.parse(storedUser);
//         const token = userData?.data;

//         if (!token) {
//           console.error("Token missing in user data");
//           setLoading(false);
//           return;
//         }

//         // Call API with Authorization header
//         const res = await fetch("http://localhost:8000/api/v1/my-booking", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token,
//           },
//         });

//         if (!res.ok) {
//           console.error("Failed to fetch bookings");
//           setLoading(false);
//           return;
//         }

//         const data = await res.json();
//         console.log("Fetched bookings:", data.data);
//         setBookings(data.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const getStatusClass = (date) => {
//     const today = new Date();
//     const bookingDate = new Date(date);

//     today.setHours(0, 0, 0, 0);
//     bookingDate.setHours(0, 0, 0, 0);

//     if (bookingDate.getTime() < today.getTime()) return "expired";
//     if (bookingDate.getTime() === today.getTime()) return "today";
//     return "upcoming";
//   };

//   if (loading) return <p className="loading">Loading bookings...</p>;

//   return (
//     <div className="mybooking-container">
//       <div className="header">
//         <h2>My Bookings</h2>
//         <button className="book-btn" onClick={() => navigate("/booktable")}>
//           Book Table
//         </button>
//       </div>

//       {bookings.length === 0 ? (
//         <p className="no-booking">No bookings found</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking) => (
//             <div
//               key={booking.id}
//               className={`booking-card ${getStatusClass(booking.date)}`}
//             >
//               <h3>{booking.name}</h3>
//               <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
//               <p>Time: {booking.time}</p>
//               <p>Guests: {booking.guests}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;
