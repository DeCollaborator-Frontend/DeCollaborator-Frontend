import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { GuestNavbar } from "./components/Navbar.jsx";
import { BasicInfoBrand } from "./components/Forms/SettingsForms/BasicInfo.jsx";
import {
  BrandSignUpForm,
  GeneralSignUpForm,
  IndividualSignUpForm,
} from "./components/Forms/AuthenticationForms/SignUpForm.jsx";
import {
  DashboardGridCard,
  DashboardListCard,
} from "./components/Cards/DashboardCards.jsx";
import PrivacySecurity from "./pages/User_Dashboard_Pages/SettingsPages/PrivacySecurity.jsx";
import VerificationPage from "./pages/User_Dashboard_Pages/SettingsPages/VerificationPage.jsx";
import CollabDetailsForm, {
  CollabContactDetails,
} from "./components/Forms/CollabForms/CollabDetailsForm.jsx";
import Search from "./pages/Search/Search.jsx";

export default function App() {
  return (
    <>
      <div className="bg-black h-full">
        <Search />
      </div>
    </>
  );
}
