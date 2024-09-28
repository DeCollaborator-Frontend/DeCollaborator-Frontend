import { useState } from "react";
import NoResult from "../../assests/images/no-results.png";

export const NoAssociatesResults = (props) => {
  const { text, buttonText, onClick } = props;
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={NoResult} alt="no result" className="mx-auto" />
        <h4 className="mt-3 text-sm text-white md:text-[28px]">{text}</h4>
        <button
          className="button-gradient my-10 w-max rounded-md border-2 border-[#FFD21D] px-3 py-2 font-bold text-black focus:outline-none md:px-7"
          onClick={onClick}
        >
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
  const { firstname, lastname, role, brand, avatar, accepted, isAccepted } =
    props;
  const [isDeclined, setIsDeclined] = useState(false);

  const handleAccept = () => {
    accepted();
  };
  const handleDecline = () => {
    setIsDeclined(true);
  };

  return (
    <>
      <div className="flex flex-col justify-between py-5 md:flex-row md:items-center">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[40px] rounded-full md:w-[60px]"
          />
          <div className="ml-3">
            {isDeclined ? (
              <>
                <p className="text-sm md:text-base">
                  <b>
                    {firstname} {lastname}
                  </b>{" "}
                  request has been removed from your list
                </p>
              </>
            ) : (
              <>
                <p className="text-sm md:text-base">
                  Your request to add{" "}
                  <b>
                    {firstname} {lastname}
                  </b>{" "}
                  has been sent
                </p>
                <p className="text-[10px] text-[#E8E1DC] md:text-sm">
                  {role} | {brand}.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={isAccepted || isDeclined ? "hidden" : ""}>
          <button
            className="new block rounded-md border px-5 py-2 focus:outline-none md:inline"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            className="button-gradient ml-3 rounded-md border-2 border-[#FFD21D] px-5 py-2 font-bold text-[#0f0f0f] focus:outline-none"
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
      <div className="flex flex-col justify-between py-5 md:flex-row md:items-center">
        <div className="flex items-center text-white">
          <img
            src={avatar}
            alt={`${firstname} ${lastname}`}
            className="w-[40px] rounded-full md:w-[60px]"
          />
          <div className="ml-3">
            <p className="text-sm md:text-base">
              <b>
                {firstname} {lastname}
              </b>{" "}
            </p>
            <p className="text-[10px] text-[#E8E1DC] md:text-sm">
              {role} | {brand}.
            </p>
          </div>
        </div>
        <button className="new mt-3 rounded-md border px-2 py-1 text-sm focus:outline-none md:mt-0 md:px-5 md:py-2 md:text-base">
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
          className="rounded-lg border-[#FFDF00] bg-[#FFDF00] px-5 py-2 font-semibold text-[#0f0f0f]"
          onClick={addAssociate}
        >
          Add as associate
        </button>
      </div>
    </>
  );
};
