import { useState } from "react";
import NoResult from "../../assests/images/no-results.png";

export const NoAssociatesResults = (props) => {
  const { text, buttonText } = props;
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={NoResult} alt="no result" className="mx-auto" />
        <h4 className="mt-3 text-[28px] text-white">{text}</h4>
        <button className="button-gradient my-10 w-max rounded-md border-2 border-[#FFD21D] px-7 py-2 font-bold focus:outline-none">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export const OutgoingRequestsData = (props) => {
  const { firstname, lastname, role, brand, avatar } = props;

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[60px] rounded-full"
          />
          <div className="ml-3">
            <p>
              Your request to add{" "}
              <b>
                {firstname} {lastname}
              </b>{" "}
              has been sent
            </p>
            <p className="text-sm text-[#E8E1DC]">
              {role} | {brand}.
            </p>
          </div>
        </div>
        <button className="new w-max rounded-md border px-5 py-2 focus:outline-none">
          Unsend
        </button>
      </div>
    </>
  );
};

export const IncomingRequestData = (props) => {
  const { firstname, lastname, role, brand, avatar } = props;
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    setIsDeclined(false);
  };
  const handleDecline = () => {
    setIsDeclined(true);
    setIsAccepted(false);
  };

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[60px] rounded-full"
          />
          <div className="ml-3">
            {isDeclined ? (
              <>
                <p>
                  <b>
                    {firstname} {lastname}
                  </b>{" "}
                  request has been removed from your list
                </p>
              </>
            ) : (
              <>
                <p>
                  Your request to add{" "}
                  <b>
                    {firstname} {lastname}
                  </b>{" "}
                  has been sent
                </p>
                <p className="text-sm text-[#E8E1DC]">
                  {role} | {brand}.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={isAccepted || isDeclined ? "hidden" : ""}>
          <button
            className="new w-max rounded-md border px-5 py-2 focus:outline-none"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            className="button-gradient ml-3 w-max rounded-md border-2 border-[#FFD21D] px-5 py-2 font-bold focus:outline-none"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
        {isAccepted && (
          <button
            className="button-gradient ml-3 w-max rounded-md border-2 border-[#FFD21D] px-5 py-2 font-bold focus:outline-none"
            onClick={handleAccept}
          >
            Message
          </button>
        )}
      </div>
    </>
  );
};

export const AssociatesData = (props) => {
  const { firstname, lastname, role, brand, avatar } = props;

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[60px] rounded-full"
          />
          <div className="ml-3">
            <p>
              <b>
                {firstname} {lastname}
              </b>{" "}
            </p>
            <p className="text-sm text-[#E8E1DC]">
              {role} | {brand}.
            </p>
          </div>
        </div>
        <button className="new w-max rounded-md border px-5 py-2 focus:outline-none">
          Remove
        </button>
      </div>
    </>
  );
};
export const FollowersData = (props) => {
  const { firstname, lastname, role, brand, avatar, addAssociate } = props;

  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[60px] rounded-full"
          />
          <div className="ml-3">
            <p>
              <b>
                {firstname} {lastname}
              </b>{" "}
            </p>
            <p className="text-sm text-[#E8E1DC]">
              {role} | {brand}.
            </p>
          </div>
        </div>
        <button
          className="new w-max rounded-md border px-5 py-2 focus:outline-none"
          onClick={addAssociate}
        >
          Add as associate
        </button>
      </div>
    </>
  );
};
