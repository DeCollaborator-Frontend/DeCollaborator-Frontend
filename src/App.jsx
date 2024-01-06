import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import { GuestNavbar } from "./components/Navbar.jsx";
import { BasicInfoBrand } from "./components/Forms/SettingsForms/BasicInfo.jsx";
import {
  BrandSignUpForm,
  GeneralSignUpForm,
  IndividualSignUpForm,
} from "./components/Forms/AuthenticationForms/SignUpForm.jsx";

export default function App() {
  return (
    <>
      <div className="bg-black h-full">
        <BrandSignUpForm />
      </div>
    </>
  );
}
