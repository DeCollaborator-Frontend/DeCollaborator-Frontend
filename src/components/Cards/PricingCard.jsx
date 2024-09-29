import React from "react";

const PricingCard = ({
  planType,
  price,
  benefits = [],
  duration,
  slashed_price,
}) => {
  return (
    <>
      <div
        className={`relative rounded-lg bg-[#242424] p-5 md:h-[560px] ${planType === "Pro" && "border-2 border-[#FFD21D]"}`}
      >
        {planType === "Pro" && (
          <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-[#FFD21D] p-2 text-sm font-bold text-black">
            Recommended
          </span>
        )}
        <p className="mb-5 text-xl">{planType}</p>
        <p>
          {planType !== "Free" && duration === "year" && (
            <div className="relative mr-2 inline text-4xl text-gray-500">
              ${slashed_price}
              <div className="absolute top-6 w-24 rotate-[30deg] border border-gray-500"></div>
              <div className="absolute top-6 w-24 rotate-[-30deg] border border-gray-500"></div>
            </div>
          )}
          <span>
            <span className="text-5xl font-semibold">${price}</span>
            <span>/{duration}</span>
          </span>
        </p>
        <div className="mt-6">
          <ul>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="mt-2 flex items-center text-[11px] md:text-base"
              >
                <CheckIcon />
                <span>
                  <span className="ml-2">{benefit.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-6 md:absolute">
          <div className="button-gradient mt-10 rounded-md border-2 border-[#FFD21D] px-7 py-2 text-center font-bold text-black focus:outline-none">
            Choose Plan
          </div>
        </div>
      </div>
    </>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0013 18.9587C5.05964 18.9587 1.04297 14.942 1.04297 10.0003C1.04297 5.05866 5.05964 1.04199 10.0013 1.04199C14.943 1.04199 18.9596 5.05866 18.9596 10.0003C18.9596 14.942 14.943 18.9587 10.0013 18.9587ZM10.0013 2.29199C5.7513 2.29199 2.29297 5.75033 2.29297 10.0003C2.29297 14.2503 5.7513 17.7087 10.0013 17.7087C14.2513 17.7087 17.7096 14.2503 17.7096 10.0003C17.7096 5.75033 14.2513 2.29199 10.0013 2.29199Z"
        fill="#E8E1DC"
      />
      <path
        d="M8.81719 12.9837C8.65052 12.9837 8.49219 12.917 8.37552 12.8003L6.01719 10.442C5.77552 10.2003 5.77552 9.80033 6.01719 9.55866C6.25885 9.31699 6.65885 9.31699 6.90052 9.55866L8.81719 11.4753L13.1005 7.19199C13.3422 6.95033 13.7422 6.95033 13.9839 7.19199C14.2255 7.43366 14.2255 7.83366 13.9839 8.07533L9.25885 12.8003C9.14219 12.917 8.98385 12.9837 8.81719 12.9837Z"
        fill="#E8E1DC"
      />
    </svg>
  );
};

export default PricingCard;
