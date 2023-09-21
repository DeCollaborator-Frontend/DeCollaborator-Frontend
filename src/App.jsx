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

export default function App() {
  return (
    <div className="bg-[#242222] m-5 h-full px-5 rounded-lg">
      <table className="w-full ">
        <tr className="w-full border-b mx-5">
          <AssociatesData
            firstname={"Korode"}
            lastname={"Okesanya"}
            role={"CTO"}
            brand={"Decolaborator"}
            avatar={img}
          />
        </tr>
        <tr className="w-full border-b">
          <AssociatesData
            firstname={"Korode"}
            lastname={"Okesanya"}
            role={"CTO"}
            brand={"Decolaborator"}
            avatar={img}
          />
        </tr>
        <tr className="w-full border-b">
          <AssociatesData
            firstname={"Korode"}
            lastname={"Okesanya"}
            role={"CTO"}
            brand={"Decolaborator"}
            avatar={img}
          />
        </tr>
        <tr className="w-full border-b">
          <AssociatesData
            firstname={"Korode"}
            lastname={"Okesanya"}
            role={"CTO"}
            brand={"Decolaborator"}
            avatar={img}
          />
        </tr>
      </table>
    </div>
  );
}
