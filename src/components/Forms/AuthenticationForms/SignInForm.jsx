import { useState, useEffect } from "react";
import {
  GoogleIcon,
  HidePasswordIcon,
  ShowPasswordIcon,
} from "../../Icons/Icons";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordToggle = (e) => {
    setPasswordToggle(!passwordToggle);
    e.preventDefault();
  };
  return (
    <>
      <div className="h-screen bg-[#0f0f0f] px-10 pt-10 md:px-24">
        <h2 className="text-center text-[40px] font-bold text-white md:text-start">
          Log in to your account
        </h2>
        <p className="mb-10 text-center text-[20px] text-white md:text-start">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-full rounded-md border border-[#525252] bg-transparent p-2 text-white placeholder:text-base autofill:bg-transparent focus:outline-none"
          />
          <div className="relative mt-5 w-full">
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 "
              onClick={handlePasswordToggle}
            >
              {passwordToggle ? <ShowPasswordIcon /> : <HidePasswordIcon />}
            </button>
            <input
              type={passwordToggle ? "text" : "password"}
              name=""
              id=""
              placeholder="Password"
              className="w-full rounded-md border  border-[#525252] bg-transparent p-2 text-white placeholder:text-base focus:outline-none"
            />
          </div>
          <Link
            to={"/resetpassword"}
            className="new ml-auto mt-2 border-transparent font-bold text-[#FFD21D]"
          >
            Forgotten Password
          </Link>
          <button
            className="button-gradient mt-6 w-full rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col items-center justify-center font-bold">
          <button className="mt-5 flex w-full items-center justify-center rounded-md border-2 p-2 focus:outline-none">
            <GoogleIcon />
            <span className="pl-3 text-white">Login In with Google</span>
          </button>
        </div>
        <p className="mt-5 text-center text-white">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="new mt-2 border-transparent font-bold text-[#FFD21D]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};
