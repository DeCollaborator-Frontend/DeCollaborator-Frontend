import React from "react";
import CollabDetailsForm, {
  CollabContactDetails,
} from "../../../components/Forms/CollabForms/CollabDetailsForm";
const CollabCreation = () => {
  return (
    <>
      <div className="bg-[#0f0f0f] py-10">
        <CollabContactDetails />
        <CollabDetailsForm />
      </div>
    </>
  );
};

export default CollabCreation;
