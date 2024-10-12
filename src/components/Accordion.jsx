import { useState } from "react";

const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mb-5 rounded-xl border border-[#555555] bg-transparent px-3 py-2 text-white">
        <div className="flex justify-between">
          <p>{question}</p>
          <button onClick={handleOpenAccordion}>
            {isOpen ? <Close /> : <Open />}
          </button>
        </div>
        <p
          className={`${isOpen ? null : "hidden"} mt-4 text-sm text-[#D4D4D4]`}
        >
          {answer}
        </p>
      </div>
    </>
  );
};

export const NotificationsAccordion = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const settings = ["In-App", "Push", "Email"];

  return (
    <div className="mb-5 rounded-xl border border-[#555555] bg-transparent text-white">
      <div
        className={`flex justify-between rounded-xl px-3 py-2 hover:bg-[#555555] ${
          isOpen ? "rounded-b-none bg-[#555555]" : ""
        }`}
      >
        <p>{type}</p>

        <button onClick={handleOpenAccordion}>
          {isOpen ? <Close /> : <Open />}
        </button>
      </div>
      {selectedOptions.length > 0 && (
        <div className="px-3 py-2 text-sm text-[#D4D4D4]">
          <ul className="flex list-inside list-none">
            {selectedOptions.map((option) => (
              <li key={option} className="mr-2">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`${
          isOpen ? "rounded-xl rounded-t-none bg-[#333333]" : "hidden"
        } px-3 py-2 pt-4 text-sm text-[#D4D4D4]`}
      >
        <p>Where do you want to receive notifications?</p>
        <div className="flex flex-col gap-2 pt-4">
          {settings.map((option) => (
            <CustomCheckbox
              key={option}
              option={option}
              isChecked={selectedOptions.includes(option)}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomCheckbox = ({ option, isChecked, handleCheckboxChange }) => {
  return (
    <label className="flex cursor-pointer items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleCheckboxChange(option)}
        className="hidden"
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all duration-200 ${
          isChecked ? "border-gray-400" : "border-gray-400"
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span>{option}</span>
    </label>
  );
};

export const RolePermissionAccordion = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };
  const settings = [
    "Send Messages",
    "Send Collab Proposals",
    "Receive Collabb Proposals",
    "Edit Collab Proposals",
    "Manage Collab Opportunities",
    "Manage Products and Services",
    "View all team chats",
    "Manage chat, [members and settings]",
    "Manage team settings, [members and settings]",
  ];

  return (
    <div className="mb-5 rounded-xl border border-[#555555] bg-transparent text-white">
      <div
        className={`flex justify-between rounded-xl px-3 py-2 hover:bg-[#555555] ${
          isOpen ? "rounded-b-none bg-[#555555]" : ""
        }`}
      >
        <p>{type}</p>

        <button onClick={handleOpenAccordion}>
          {isOpen ? <Close /> : <Open />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "rounded-xl rounded-t-none bg-[#333333]" : "hidden"
        } px-3 py-2 pt-4 text-sm text-[#D4D4D4]`}
      >
        <p>Where do you want to receive notifications?</p>
        <div className="flex flex-col gap-2 pt-4">
          {settings.map((option) => (
            <div className="mb-2">
              <CustomCheckbox
                key={option}
                option={option}
                isChecked={selectedOptions.includes(option)}
                handleCheckboxChange={handleCheckboxChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Open = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12H17"
        stroke="#D4D4D4"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17V7"
        stroke="#D4D4D4"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Close = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12H17"
        stroke="#D4D4D4"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FaqAccordion;
