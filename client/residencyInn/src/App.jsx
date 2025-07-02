import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"
import AddRoom from "./components/room/AddRoom"
import ExistingRooms from "./components/room/ExistingRooms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import BookingSuccess from "./components/booking/BookingSuccess";
import Checkout from "./components/booking/Checkout";
import Bookings from "./components/booking/Bookings";
import FindBooking from "./components/booking/FindBooking";


function App(){
  return(
   <>
   <main>
    <Router>
      <Navbar />
      <Routes>
						<Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom/>}/>
						<Route path="/existing-rooms" element={<ExistingRooms/>}/>
						<Route path="/add-room" element={<AddRoom/>}/>
						<Route path="/browse-all-rooms" element={<RoomListing/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/book-room/:roomId" element={<Checkout/>}/>
            <Route path="/booking-success" element={<BookingSuccess/>} />
            <Route path="/existing-bookings" element={<Bookings/>} />
            <Route path="/find-booking" element={<FindBooking/>} />

      </Routes>
    </Router>
   </main>
  <Footer />
  </>
)}

export default App