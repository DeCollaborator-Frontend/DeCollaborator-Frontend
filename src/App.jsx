import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

import Search from "./pages/Search/Search.jsx";
import SignInPage from "./pages/Authentication_Pages/SignInPage.jsx";
import SignUpPage from "./pages/Authentication_Pages/SignUpPage.jsx";
import CollabCreation from "./pages/User_Dashboard_Pages/Collabs/CollabCreation.jsx";
import ResetPasswordPage from "./pages/Authentication_Pages/ResetPasswordPage.jsx";
import Main from "./pages/User_Dashboard_Pages/Main.jsx";
import ProposalsCard from "./components/Cards/ProposalsCard.jsx";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function App() {
  return (
    <PrimeReactProvider>
      <div className="h-full bg-black">
        <Search />
      </div>
    </PrimeReactProvider>
  );
}
