import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { GuestNavbar } from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <GuestNavbar />
      <Homepage />
    </>
  );
}
