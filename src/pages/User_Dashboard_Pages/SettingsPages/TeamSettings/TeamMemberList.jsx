import React, { useState } from "react";
import {
  NotificationsAccordion,
  RolePermissionAccordion,
} from "../../../../components/Accordion";
import { RoleDropdown } from "@/components/Dropdown";

const TeamMemberList = () => {
  const permissiontype = ["Owner", "Team Admin", "Team Member"];
  const [selectedRole, setSelectedRole] = useState("assign role");
  const roles = ["Owner", "Team Admin", "Member"];

  // Function to handle role change
  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };
  return (
    <>
      <div className="mx-10 rounded-xl bg-[#262626] p-5">
        <div className="border-b-1 mb-5 border-[#a9a9a9] pb-2">
          <h3 className="text-xl font-bold text-[#fefefe]">Team Members</h3>
          <p className="text-sm text-[#959595]">
            Manage team members and their roles
          </p>
        </div>

        <div>
          <RoleDropdown
            options={roles} // Pass role options array
            selectedRole={selectedRole} // Pass the currently selected role
            onSelect={handleRoleChange} // Pass the function to update the role in parent
          />
        </div>
        <div className="flex justify-center">
          <button className="ml-5 mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-lg font-bold text-[#0f0f0f]">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamMemberList;
