import React from "react";
import { Link } from "react-router-dom";

const InitiateCollab = () => {
  return (
    <Link to={"/collab"}>
      <div className="flex items-center rounded-xl bg-neutral-800 p-3">
        <span className="h-10 w-10 rounded-full bg-neutral-700"></span>
        <span className="mx-auto font-bold">Initiate collab</span>
      </div>
    </Link>
  );
};

export default InitiateCollab;
