import React, { useContext, useState } from "react";
import { AssociatesContext } from "../../../context/AssociatesContext";
import {
  AssociatesData,
  NoAssociatesResults,
} from "../../../components/Cards/AssociatesCards";
import FollowersList from "./FollowersList";

const AssociatesList = () => {
  const { associates } = useContext(AssociatesContext);

  const [followerActive, setFollowerActive] = useState(false);

  const handleFollowerActive = () => {
    setFollowerActive(!followerActive);
  };

  //   const handleAddAssociate = (follower) => {
  //     acceptRequest(follower);
  //     console.log(associates);
  //   };

  return (
    <>
      <div>
        <div>
          {followerActive ? (
            <div className="mt-12">
              <FollowersList onClick={handleFollowerActive} />
            </div>
          ) : associates.length > 0 ? (
            associates.map((follower) => (
              <AssociatesData
                key={follower.id} // Assuming each follower has a unique `id`
                firstname={follower.firstname}
                lastname={follower.lastname}
                role={follower.role}
                brand={follower.brand}
                avatar={follower.avatar}
              />
            ))
          ) : (
            <div className="mt-12">
              <NoAssociatesResults
                buttonText={"Add new associate"}
                text={"No Associates Added Yet"}
                onClick={handleFollowerActive}
              />
            </div>
          )}
          {associates.length == 0 ? null : (
            <div
              className={`flex justify-center ${followerActive && "hidden"}`}
            >
              <button
                className="button-gradient my-10 w-max rounded-md border-2 border-[#FFD21D] px-7 py-2 font-bold text-black focus:outline-none"
                onClick={handleFollowerActive}
              >
                Add new associate
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssociatesList;
