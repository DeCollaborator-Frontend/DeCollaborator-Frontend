import React, { useContext } from "react";
import { AssociatesContext } from "@/context/AssociatesContext";
import {
  IncomingRequestData,
  NoAssociatesResults,
} from "@/components/Cards/AssociatesCards";

const IncomingRequest = () => {
  const { incomingRequests, acceptRequest } = useContext(AssociatesContext);
  console.log(incomingRequests);

  const handleAccept = (user) => {
    acceptRequest(user);
  };

  return (
    <>
      <div>
        <div>
          {incomingRequests.length > 0 ? (
            incomingRequests.map((follower) => (
              <IncomingRequestData
                key={follower.id} // Assuming each follower has a unique `id`
                firstname={follower.firstname}
                lastname={follower.lastname}
                role={follower.role}
                brand={follower.brand}
                avatar={follower.avatar}
                accepted={() => handleAccept(follower)}
                isAccepted={follower.accepted}
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

export default IncomingRequest;
