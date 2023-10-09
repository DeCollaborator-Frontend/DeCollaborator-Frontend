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
      <div className="px-32">
        <h2 className="text-white text-[40px] font-bold">
          Log in to your account
        </h2>
        <p className="text-white text-[20px] mb-10">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="p-2 w-full bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-base text-white autofill:bg-transparent"
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
              className="p-2 w-full bg-transparent  border border-[#525252] rounded-md focus:outline-none placeholder:text-base text-white"
            />
          </div>
          <Link className="ml-auto mt-2 font-bold text-[#FFD21D] border-transparent new">
            Forgotten Password
          </Link>
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold mt-6"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col items-center justify-center font-bold">
          <button className="flex items-center justify-center border-2 rounded-md p-2 w-full mt-5 focus:outline-none">
            <GoogleIcon />
            <span className="pl-3 text-white">Login In with Google</span>
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link className="mt-2 font-bold text-[#FFD21D] border-transparent new">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};
