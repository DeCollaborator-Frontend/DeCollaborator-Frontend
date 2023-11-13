import { useState, useEffect } from "react";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="px-32">
        <h2 className="text-white text-[40px] font-bold">
          Reset your password
        </h2>
        <p className="text-white text-[20px] mb-10">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="p-2  w-full bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-base text-white autofill:bg-transparent mb-10"
          />
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold mt-10"
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export const ResetPaswordConfirmation = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-32 text-white">
        <svg
          width="100"
          height="100"
          viewBox="0 0 169 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M69.4167 91.1147L84.51 101.435L99.0593 91.3973L131.673 123.573C130.814 123.851 129.897 124 128.942 124H40.0567C38.8834 124 37.7634 123.771 36.734 123.36L69.4167 91.1147ZM137.833 64.672V115.109C137.833 116.427 137.545 117.675 137.033 118.8L105.065 87.2587L137.833 64.672ZM31.166 64.9547L63.39 86.992L31.7314 118.235C31.3564 117.235 31.1649 116.177 31.166 115.109V64.9547ZM128.942 44C133.849 44 137.833 47.9787 137.833 52.8907V56.016L84.4887 92.7893L31.166 56.32V52.8907C31.166 47.984 35.1447 44 40.0567 44H128.942Z"
            fill="#FFDF00"
          />
          <circle cx="84.5" cy="84" r="82" stroke="#FFDF00" stroke-width="4" />
        </svg>
        <h3 className="text-white text-[40px] font-bold mb-5">
          Check your mail
        </h3>
        <p className="text-white text-[20px] text-center">
          Please check your email for instructions on how to reset your
          password. We have sent you an email titled "Password Reset
          Instructions" with detailed steps to follow. If you need assistance,
          please contact our support team.
        </p>
      </div>
    </>
  );
};
export default ResetPassword;
