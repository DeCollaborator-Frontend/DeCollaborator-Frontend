import React from "react";
import CollabDetailsForm, {
  CollabContactDetails,
} from "../../../components/Forms/CollabForms/CollabDetailsForm";
import { UserNavbar } from "../../../components/Navbar";
const CollabCreation = () => {
  return (
    <>
      <UserNavbar />
      <div className="bg-[#0f0f0f] pb-10 pt-32">
        <CollabContactDetails />
        <CollabDetailsForm />
      </div>
    </>
  );
};

export default CollabCreation;
