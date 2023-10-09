import { Routes, Route } from "react-router-dom";
import ProposalsCard from "./components/Cards/ProposalsCard";
import { SignInForm } from "./components/Forms/AuthenticationForms/SignInForm";
import SignInPage from "./pages/Authentication_Pages/SignInPage";
import ResetPassword from "./components/Forms/UpdateInformationForms/ResetPasswordForm";
import ResetPasswordPage from "./pages/Authentication_Pages/ResetPasswordPage";
import {
  GeneralSignUpForm,
  IndividualSignUpForm,
} from "./components/Forms/AuthenticationForms/SignUpForm";
import SignUpPage from "./pages/Authentication_Pages/SignUpPage";
import {
  AssociatesData,
  IncomingRequestData,
  NoAssociatesResults,
  OutgoingRequestsData,
} from "./components/Cards/AssociatesCards";
import img from "./assests/images/Avatar/01.png";
import CollabDetailsForm, {
  CollabContactDetails,
} from "./components/Forms/CollabForms/CollabDetailsForm";
import FaqAccordion from "./components/Accordion";
import ChatWithUs, {
  ContactUsForm,
} from "./components/Forms/SettingsForms/ContactUsForm";
import HelpSettingsPage from "./pages/User_Dashboard_Pages/SettingsPages/Help";
import {
  ChangePassword,
  DeleteAccount,
  PrivacyForm,
  TwoFA,
} from "./components/Forms/SettingsForms/PrivacyForms";
import PrivacySecurity from "./pages/User_Dashboard_Pages/SettingsPages/PrivacySecurity";

export default function App() {
  return (
    <div className="h-full p-10 bg-[#020205]">
      <PrivacySecurity />
    </div>
  );
}
