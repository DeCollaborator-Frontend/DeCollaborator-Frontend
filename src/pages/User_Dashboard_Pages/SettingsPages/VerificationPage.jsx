import React from "react";
import {
  Level1,
  Level2,
} from "../../../components/Forms/SettingsForms/Verification";
import { UserNavbar } from "../../../components/Navbar";

const VerificationPage = () => {
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[56px] text-[#E8E1DC]">
          Verification Settingss
        </h1>
        <p className="text-center text-[20px] text-[#959595]">
          Complete all necessary verifications on your account
        </p>
      </div>
      <div className="rounded-xl border-4 border-[#242222] px-28 py-10">
        <Level1 />
        <Level2 />
      </div>
    </>
  );
};

export default VerificationPage;
