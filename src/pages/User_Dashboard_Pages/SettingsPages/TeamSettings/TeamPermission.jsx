import React, { useState } from "react";
import TeamPermissionSlider from "./TeamPermissionSlider";

const TeamPermission = () => {
  return (
    <>
      <div className="mx-10 rounded-xl bg-[#262626] p-5">
        <div className="border-b-1 mb-5 border-[#a9a9a9] pb-2">
          <h3 className="text-xl font-bold text-[#fefefe]">Team Permission</h3>
          <p className="text-sm text-[#959595]">
            Set the permission level for the team.
          </p>
        </div>
        <div>
          <TeamPermissionSlider />
          <TeamPermissionSlider />
          <TeamPermissionSlider />
          <TeamPermissionSlider />
          <TeamPermissionSlider />
        </div>
        <div className="">
          <button className="mt-4 block rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-1 text-lg font-bold text-[#0f0f0f]">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamPermission;
