import { useState } from "react";

const FaqAccordion = (props) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="border-[#555555] border rounded-lg px-3 py-2 bg-transparent text-white mb-5">
        <div className="flex justify-between">
          <p>{question}</p>
          <button onClick={handleOpenAccordion}>
            {isOpen ? <Close /> : <Open />}
          </button>
        </div>
        <p
          className={`${isOpen ? null : "hidden"} text-sm mt-4 text-[#D4D4D4]`}
        >
          {answer}
        </p>
      </div>
    </>
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
