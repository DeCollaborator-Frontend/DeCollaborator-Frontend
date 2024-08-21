import React from "react";
import {
  ChangePassword,
  DeleteAccount,
  PrivacyForm,
  TwoFA,
} from "../../../components/Forms/SettingsForms/PrivacyForms";
import { UserNavbar } from "../../../components/Navbar";

const PrivacySecurity = () => {
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[56px] text-[#E8E1DC]">
          Privacy & Security
        </h1>
        <p className="text-center text-[20px] text-[#959595]">
          Set interaction boundaries, change your password, and more.
        </p>
      </div>
      <div className="rounded-xl border-4 border-[#242222] px-28 py-10">
        <PrivacyForm />
        <ChangePassword />
        <TwoFA />
        <DeleteAccount />
      </div>
    </>
  );
};

export default PrivacySecurity;
