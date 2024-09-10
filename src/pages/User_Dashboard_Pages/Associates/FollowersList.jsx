import React, { useContext } from "react";
import { AssociatesContext } from "../../../context/AssociatesContext";
import { FollowersData } from "../../../components/Cards/AssociatesCards";

const FollowersList = ({ onClick }) => {
  const { followers, acceptRequest, setSearchTerm, associates } =
    useContext(AssociatesContext);

  const handleAddAssociate = (follower) => {
    acceptRequest(follower);
    console.log(associates);
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search followers..."
            className="mb-4 w-2/3  rounded-md p-2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="no-scrollbar h-[400px] overflow-scroll">
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
        <button>
          <span onClick={onClick} className="cursor-pointer text-[#FFDF00]">
            Done
          </span>
        </button>
      </div>
    </>
  );
};

export default FollowersList;
