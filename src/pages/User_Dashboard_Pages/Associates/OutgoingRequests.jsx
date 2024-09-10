import React, { useContext } from "react";
import { AssociatesContext } from "@/context/AssociatesContext";
import {
  OutgoingRequestsData,
  NoAssociatesResults,
} from "@/components/Cards/AssociatesCards";

const OutgoingRequests = () => {
  const { outgoingRequests } = useContext(AssociatesContext);
  return (
    <>
      <div>
        <div>
          {outgoingRequests.length > 0 ? (
            outgoingRequests.map((follower) => (
              <OutgoingRequestsData
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
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OutgoingRequests;
