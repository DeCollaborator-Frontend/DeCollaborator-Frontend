export const SearchIcon = ({ className }) => {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};

export const DropdownIcon = ({ className }) => {
  return (
    <svg
      width="15"
      height="9"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M2.33333 2.5L9 9.16667L15.6667 2.5"
        stroke="#737373"
        strokeWidth="3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ReverseDropdownIcon = ({ className }) => {
  return (
    <svg
      className={`w-3 h-3 ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5 5 1 1 5"
      />
    </svg>
  );
};

export const SideNavIcon = () => {
  return (
    <svg
      width="40"
      height="26.2"
      viewBox="0 0 44 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.66663 11.3327H35.3333V16.666H8.66663V11.3327ZM0.666626 0.666016H43.3333V5.99935H0.666626V0.666016ZM16.6666 21.9993H27.3333V27.3327H16.6666V21.9993Z"
        fill="#E8E1DC"
      />
    </svg>
  );
};

export const DefaultProposalIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#484849" />
    </svg>
  );
};

export const NewProposalIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_5238_33158)" />
      <defs>
        <linearGradient
          id="paint0_linear_5238_33158"
          x1="8"
          y1="0"
          x2="8"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD21D" />
          <stop offset="0.734375" stop-color="#EFBF00" stop-opacity="0.84" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const CompletedProposal = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#008000" />
    </svg>
  );
};

export const RejectedProposal = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#FF2929" />
    </svg>
  );
};

export const AcceptedProposal = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#049696" />
    </svg>
  );
};
