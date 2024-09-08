import React, { useContext } from "react";
import { AssociatesContext } from "../../../context/AssociatesContext";
import { AssociatesData } from "../../../components/Cards/AssociatesCards";

const AssociatesList = () => {
  const { acceptRequest, setSearchTerm, associates } =
    useContext(AssociatesContext);

  //   const handleAddAssociate = (follower) => {
  //     acceptRequest(follower);
  //     console.log(associates);
  //   };

  return (
    <>
      <div className="followers-list">
        <input
          type="text"
          placeholder="Search followers..."
          className="mb-4 w-full rounded-md p-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="followers-list-content">
          {associates.length > 0 ? (
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
            <p className="text-white">No followers available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AssociatesList;
