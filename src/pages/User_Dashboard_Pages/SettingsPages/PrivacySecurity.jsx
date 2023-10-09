import React from "react";
import {
  ChangePassword,
  DeleteAccount,
  PrivacyForm,
  TwoFA,
} from "../../../components/Forms/SettingsForms/PrivacyForms";

const PrivacySecurity = () => {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[#E8E1DC] text-[56px] text-center">
          Privacy & Security
        </h1>
        <p className="text-[#959595] text-[20px] text-center">
          Set interaction boundaries, change your password, and more.
        </p>
      </div>
      <div className="border-4 border-[#242222] rounded-xl px-28 py-10">
        <PrivacyForm />
        <ChangePassword />
        <TwoFA />
        <DeleteAccount />
      </div>
    </>
  );
};

export default PrivacySecurity;
