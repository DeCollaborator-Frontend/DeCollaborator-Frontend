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

export const ShowPasswordIcon = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M30.9396 15.66C29.7634 12.6176 27.7216 9.98662 25.0664 8.09209C22.4112 6.19756 19.2591 5.12257 15.9996 5C12.7401 5.12257 9.58796 6.19756 6.93278 8.09209C4.27759 9.98662 2.23574 12.6176 1.05957 15.66C0.980142 15.8797 0.980142 16.1203 1.05957 16.34C2.23574 19.3824 4.27759 22.0134 6.93278 23.9079C9.58796 25.8024 12.7401 26.8774 15.9996 27C19.2591 26.8774 22.4112 25.8024 25.0664 23.9079C27.7216 22.0134 29.7634 19.3824 30.9396 16.34C31.019 16.1203 31.019 15.8797 30.9396 15.66ZM15.9996 25C10.6996 25 5.09957 21.07 3.06957 16C5.09957 10.93 10.6996 7 15.9996 7C21.2996 7 26.8996 10.93 28.9296 16C26.8996 21.07 21.2996 25 15.9996 25Z"
        fill="#E8E1DC"
        fill-opacity="0.5"
      />
      <path
        d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9109 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z"
        fill="#E8E1DC"
      />
    </svg>
  );
};

export const HidePasswordIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 15 15"
      className={`${className}`}
    >
      <path
        fill="#E8E1DC"
        fill-rule="evenodd"
        d="M14.765 6.076a.5.5 0 0 1 .159.689a9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53a8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const GoogleIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.5138 25.1038H52.5V25H30V35H44.1288C42.0675 40.8213 36.5288 45 30 45C21.7163 45 15 38.2837 15 30C15 21.7163 21.7163 15 30 15C33.8238 15 37.3025 16.4425 39.9513 18.7987L47.0225 11.7275C42.5575 7.56625 36.585 5 30 5C16.1937 5 5 16.1937 5 30C5 43.8063 16.1937 55 30 55C43.8063 55 55 43.8063 55 30C55 28.3238 54.8275 26.6875 54.5138 25.1038Z"
        fill="#FFC107"
      />
      <path
        d="M7.88257 18.3637L16.0963 24.3875C18.3188 18.885 23.7013 15 30.0001 15C33.8238 15 37.3026 16.4425 39.9513 18.7987L47.0226 11.7275C42.5576 7.56625 36.5851 5 30.0001 5C20.3976 5 12.0701 10.4212 7.88257 18.3637Z"
        fill="#FF3D00"
      />
      <path
        d="M29.9999 55C36.4574 55 42.3249 52.5288 46.7612 48.51L39.0237 41.9625C36.4293 43.9355 33.2592 45.0026 29.9999 45C23.4974 45 17.9762 40.8538 15.8962 35.0675L7.74365 41.3488C11.8812 49.445 20.2837 55 29.9999 55Z"
        fill="#4CAF50"
      />
      <path
        d="M54.5138 25.1038H52.5V25H30V35H44.1288C43.1428 37.7705 41.3667 40.1915 39.02 41.9637L39.0237 41.9613L46.7613 48.5087C46.2138 49.0062 55 42.5 55 30C55 28.3238 54.8275 26.6875 54.5138 25.1038Z"
        fill="#1976D2"
      />
    </svg>
  );
};
