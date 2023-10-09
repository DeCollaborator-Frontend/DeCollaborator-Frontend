import React from "react";
import {
  Level1,
  Level2,
} from "../../../components/Forms/SettingsForms/Verification";

const VerificationPage = () => {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-[#E8E1DC] text-[56px] text-center">
          Verification Settingss
        </h1>
        <p className="text-[#959595] text-[20px] text-center">
          Complete all necessary verifications on your account
        </p>
      </div>
      <div className="border-4 border-[#242222] rounded-xl px-28 py-10">
        <Level1 />
        <Level2 />
      </div>
    </>
  );
};

export default VerificationPage;
