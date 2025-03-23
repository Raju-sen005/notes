import "./App.css";
import Background from "./components/Background.js";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking.js";
import Terms from "./pages/Terms.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <Navbar title="Ticket-Booking" />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Background />
      </Router>
    </>
  );
}

export default App;
