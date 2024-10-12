import { RolePermissionAccordion } from "../../../../components/Accordion";

const RolePermission = () => {
  const permissiontype = ["Owner", "Team Admin", "Team Member"];

  return (
    <>
      <div className="mx-10 rounded-xl bg-[#262626] p-5">
        <div className="border-b-1 mb-5 border-[#a9a9a9] pb-2">
          <h3 className="text-xl font-bold text-[#fefefe]">Role Permission</h3>
          <p className="text-sm text-[#959595]">
            Set the permission level for each role.
          </p>
        </div>
        {permissiontype.map((type, index) => (
          <RolePermissionAccordion key={index} type={type} />
        ))}

        <div className="flex justify-center">
          <button className="ml-5 mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-lg font-bold text-[#0f0f0f]">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default RolePermission;
