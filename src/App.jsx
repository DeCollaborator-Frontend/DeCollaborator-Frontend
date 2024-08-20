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
import { UserNavbar } from "./components/Navbar.jsx";
import SettingsPage from "./pages/User_Dashboard_Pages/SettingsPages/SettingsPage.jsx";
import ProfileSettings from "./pages/User_Dashboard_Pages/SettingsPages/ProfileSettings.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="/settings/profile" element={<ProfileSettings />} />
      </Routes>
    </>
  );
}
