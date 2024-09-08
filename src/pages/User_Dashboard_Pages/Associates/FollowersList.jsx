import React, { useContext } from "react";
import { AssociatesContext } from "../../../context/AssociatesContext";
import { FollowersData } from "../../../components/Cards/AssociatesCards";

const FollowersList = () => {
  const { followers, acceptRequest, setSearchTerm, associates } =
    useContext(AssociatesContext);

  const handleAddAssociate = (follower) => {
    acceptRequest(follower);
    console.log(associates);
  };

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
          {followers.length > 0 ? (
            followers.map((follower) => (
              <FollowersData
                key={follower.id} // Assuming each follower has a unique `id`
                firstname={follower.firstname}
                lastname={follower.lastname}
                role={follower.role}
                brand={follower.brand}
                avatar={follower.avatar}
                addAssociate={() => handleAddAssociate(follower)} // Pass the follower to the handler
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

export default FollowersList;
