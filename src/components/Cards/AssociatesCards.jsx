import { useState } from "react";
import NoResult from "../../assests/images/no-results.png";

export const NoAssociatesResults = (props) => {
  const { text, buttonText } = props;
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={NoResult} alt="no result" className="mx-auto" />
        <h4 className="text-white text-[28px] mt-3">{text}</h4>
        <button className="button-gradient border-2 border-[#FFD21D] rounded-md py-2 px-7 w-max focus:outline-none font-bold my-10">
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
            className="rounded-full w-[60px]"
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
        <button className="new border rounded-md px-5 py-2 w-max focus:outline-none">
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
            className="rounded-full w-[60px]"
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
            className="new border rounded-md px-5 py-2 w-max focus:outline-none"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md px-5 py-2 w-max focus:outline-none font-bold ml-3"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
        {isAccepted && (
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md px-5 py-2 w-max focus:outline-none font-bold ml-3"
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
            className="rounded-full w-[60px]"
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
        <button className="new border rounded-md px-5 py-2 w-max focus:outline-none">
          Remove
        </button>
      </div>
    </>
  );
};
