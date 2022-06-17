import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Navigation from "./Navigation";

import Beds from "../pages/Beds/Beds";
import Bookings from "../pages/Bookings/Bookings";
import Data from "../pages/Data/Data";
import Schedule from "../pages/Schedule/Schedule";
import Error from "../pages/Error/Error";
const NavigationRoute = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/data" element={<Data />} />
          <Route path="/schedule" element={<Schedule />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default NavigationRoute;
