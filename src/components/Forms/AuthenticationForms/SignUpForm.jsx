import {
  ShowPasswordIcon,
  GoogleIcon,
  HidePasswordIcon,
} from "../../Icons/Icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Success from "../../../assests/images/Sucess.png";

export const GeneralSignUpForm = () => {
  const initialValue = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState(initialValue);
  const [userDetails, setUserdetails] = useState([]);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.password !== user.confirmPassword &&
      !user.email &&
      !user.username &&
      !user.password &&
      !user.confirmPassword
    ) {
      e.preventDefault();
    } else if (user.password === user.confirmPassword) {
      setUserdetails([...userDetails, user]);
      setUser(initialValue);
    }

    setErrors(validator(user));
    setIsSubmit(true);
  };



  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(userDetails);
      // Reset isSubmit to false after processing the submission
      setIsSubmit(false);
    } else {
      console.log("Invalid Form");
    }
  }, [errors, isSubmit, userDetails]);

  const validator = () => {
    const errors = {};

    if (!user.email) {
      errors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(user.email)) {
      errors.email = "Please enter a valid mail";
    }
    if (!user.username) {
      errors.username = "Username is required";
    }
    if (!user.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        user.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number or special character";
    }
    if (user.password !== user.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    console.error(errors);
    return errors;
  };

  const handlePasswordToggle = (e) => {
    setPasswordToggle(!passwordToggle);
    e.preventDefault();
  };

  const handleConfirmPasswordToggle = (e) => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
    e.preventDefault();
  };
  return (
    <>
      <div className="px-32">
        <h2 className="text-white text-[40px] font-bold">Create an account</h2>
        <p className="text-white text-[20px] mb-5">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <div className="mb-5">
          <Progress />
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <div></div>
          {/* <p className="text-white">{errors.email}</p> */}
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="Email"
            className="p-2 w-full bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <input
            type="text"
            name="username"
            id="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
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
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
              className="p-2 w-full bg-transparent  border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white"
            />
          </div>
          <div className="relative mt-5 w-full">
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 "
              onClick={handleConfirmPasswordToggle}
            >
              {confirmPasswordToggle ? (
                <ShowPasswordIcon />
              ) : (
                <HidePasswordIcon />
              )}
            </button>

            <input
              type={confirmPasswordToggle ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              placeholder="Confirm Password"
              className="p-2 w-full bg-transparent  border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white"
            />
          </div>
          {/* <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold mt-6"
            type="submit"
          >
            Next
          </button> */}
          <Popup />
        </form>
        <button className="flex items-center justify-center border-2 rounded-md p-2 w-full mt-5 focus:outline-none">
          <GoogleIcon />
          <span className="pl-3 text-white">Login In with Google</span>
        </button>
        <p className="mt-5 text-white text-center">
          Already have an account? &nbsp;
          <Link className="mt-2 font-bold text-[#FFD21D] underline underline-offset-1 new">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    // e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold mt-6"
        type="submit"
        onClick={openModal}
      >
        Next
      </button>
      {isOpen && (
        <div className="w-full h-full bg-[white] modal">
          <div className="modal-content bg-[#242222] text-white flex items-center justify-center relative p-5">
            <button onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6 absolute top-2 right-2"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                />
              </svg>
            </button>
            <div className="modal-content">
              <h4 className="font-bold text-[20px]">
                Are you signing up as a Brand or individual?
              </h4>
              <div className="new border rounded-lg p-6 mt-5 text-lg cursor-pointer">
                <p className="font-bold">Sign up as a brand</p>
              </div>
              <div className="new border rounded-lg p-6 mt-3 text-lg cursor-pointer">
                <p className="font-bold">Sign up as an individual</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Progress = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.208984"
            width="50"
            height="50"
            rx="25"
            fill="url(#paint0_linear_3897_26291)"
          />
          <path
            d="M20.465 19.012V14.56H28.221V35H23.237V19.012H20.465Z"
            fill="#0F0F0F"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3897_26291"
              x1="25.209"
              y1="0"
              x2="25.209"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD21D" />
              <stop offset="0.734375" stopColor="#EFBF00" stopOpacity="0.84" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="418"
          height="6"
          viewBox="0 0 418 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.130859"
            width="417.557"
            height="8"
            fill="#E8E1DC"
            fillOpacity="0.3"
          />
        </svg>

        <svg
          width="30"
          height="30"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.613281"
            width="50"
            height="50"
            rx="25"
            fill="#E8E1DC"
            fillOpacity="0.3"
          />
          <path
            d="M18.7053 31.164C19.3399 30.66 19.6293 30.4267 19.5733 30.464C21.4026 28.952 22.8399 27.7107 23.8853 26.74C24.9493 25.7693 25.8453 24.752 26.5733 23.688C27.3013 22.624 27.6653 21.588 27.6653 20.58C27.6653 19.8147 27.4879 19.2173 27.1333 18.788C26.7786 18.3587 26.2466 18.144 25.5373 18.144C24.8279 18.144 24.2679 18.4147 23.8573 18.956C23.4653 19.4787 23.2693 20.2253 23.2693 21.196H18.6493C18.6866 19.6093 19.0226 18.284 19.6573 17.22C20.3106 16.156 21.1599 15.372 22.2053 14.868C23.2693 14.364 24.4453 14.112 25.7333 14.112C27.9546 14.112 29.6253 14.6813 30.7453 15.82C31.8839 16.9587 32.4533 18.4427 32.4533 20.272C32.4533 22.2693 31.7719 24.1267 30.4093 25.844C29.0466 27.5427 27.3106 29.204 25.2013 30.828H32.7613V34.72H18.7053V31.164Z"
            fill="#242222"
            fillOpacity="0.5"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center text-xs text-white mt-2">
        <p>Personal Information</p>
        <p>Additional Information</p>
      </div>
    </>
  );
};

const Progress2 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.208984"
            width="50"
            height="50"
            rx="25"
            fill="url(#paint0_linear_3897_26291)"
          />
          <path
            d="M20.465 19.012V14.56H28.221V35H23.237V19.012H20.465Z"
            fill="#0F0F0F"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3897_26291"
              x1="25.209"
              y1="0"
              x2="25.209"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD21D" />
              <stop offset="0.734375" stopColor="#EFBF00" stopOpacity="0.84" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="418"
          height="10"
          viewBox="0 0 418 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.130859" width="420" height="6" fill="#FFDF00" />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 51 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.613281"
            width="50"
            height="50"
            rx="25"
            fill="url(#paint0_linear_7637_90942)"
          />
          <path
            d="M18.7053 31.164C19.3399 30.66 19.6293 30.4267 19.5733 30.464C21.4026 28.952 22.8399 27.7107 23.8853 26.74C24.9493 25.7693 25.8453 24.752 26.5733 23.688C27.3013 22.624 27.6653 21.588 27.6653 20.58C27.6653 19.8147 27.4879 19.2173 27.1333 18.788C26.7786 18.3587 26.2466 18.144 25.5373 18.144C24.8279 18.144 24.2679 18.4147 23.8573 18.956C23.4653 19.4787 23.2693 20.2253 23.2693 21.196H18.6493C18.6866 19.6093 19.0226 18.284 19.6573 17.22C20.3106 16.156 21.1599 15.372 22.2053 14.868C23.2693 14.364 24.4453 14.112 25.7333 14.112C27.9546 14.112 29.6253 14.6813 30.7453 15.82C31.8839 16.9587 32.4533 18.4427 32.4533 20.272C32.4533 22.2693 31.7719 24.1267 30.4093 25.844C29.0466 27.5427 27.3106 29.204 25.2013 30.828H32.7613V34.72H18.7053V31.164Z"
            fill="#0F0F0F"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7637_90942"
              x1="25.6133"
              y1="0"
              x2="25.6133"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD21D" />
              <stop offset="0.734375" stopColor="#EFBF00" stopOpacity="0.84" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-between items-center text-xs text-white mt-2">
        <p>Personal Information</p>
        <p>Additional Information</p>
      </div>
    </>
  );
};

export const IndividualSignUpForm = () => {
  const initialValue = {
    industries: "",
    location: "",
    specialties: "",
    bio: "",
    referral: "",
  };

  const [individual, setIndividual] = useState(initialValue);
  const [individualsDetails, setIndividualsDetails] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setIndividual({ ...individual, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validator(individual);
    setErrors(validationErrors);

    // If there are errors, do not proceed with submission
    if (Object.keys(validationErrors).length !== 0) {
      console.log("Invalid Form");
      return;
    }

    // If no errors, proceed with form submission
    setIndividualsDetails([...individualsDetails, individual]);
    setIndividual(initialValue);

    // Reset isSubmit to false after processing the submission
    setIsSubmit(false);
    console.log(individualsDetails);
  };

  const validator = (formData) => {
    const errors = {};

    if (!formData.bio) {
      errors.bio = "Please enter a bio";
    }
    if (!formData.specialties) {
      errors.specialties = "Please enter a specialty";
    }
    if (!formData.location) {
      errors.location = "Enter a location";
    }
    if (!formData.industries) {
      errors.industries = "Select an Industry";
    }

    console.error(errors);
    return errors;
  };
  return (
    <>
      <div className="px-32">
        <h2 className="text-white text-[40px] font-bold">Create an account</h2>
        <p className="text-white text-[20px] mb-5">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <div className="mb-5 w-full">
          <Progress2 />
        </div>
        <form
          action=""
          className="flex items-center justify-center flex-col"
          onSubmit={handleSubmit}
        >
          <select
            id="industries"
            name="industries"
            className="bg-transparent border border-[#525252] focus:outline-none text-white text-base rounded block w-full p-2"
            // onChange={handleSelectChange}
            onChange={handleChange}
            value={individual.industries}
            // value={selectedOption}
          >
            <option defaultValue className="bg-[#0F0F0F] text-base">
              Select Industry
            </option>
            <option value="1" className="bg-[#0F0F0F] text-base">
              Tech
            </option>
            <option value="2" className="bg-[#0F0F0F] text-base">
              Entertainment
            </option>
            <option value="3" className="bg-[#0F0F0F] text-base">
              Fashion
            </option>
            <option value="4" className="bg-[#0F0F0F] text-base">
              Finance
            </option>
            <option value="5" className="bg-[#0F0F0F] text-base">
              Others
            </option>
          </select>
          {/* {selectedOption === "5" && (
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Please specify..."
              className="bg-transparent border border-[#525252] focus:outline-none text-white text-base rounded block w-full p-2 mt-5"
            />
          )} */}

          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={individual.location}
            placeholder="Location"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <input
            type="text"
            name="specialties"
            id="specialties"
            onChange={handleChange}
            value={individual.specialties}
            placeholder="Specialties"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <textarea
            type="text"
            name="bio"
            id="bio"
            placeholder="Bio"
            onChange={handleChange}
            value={individual.bio}
            cols="10"
            rows="10"
            className="bg-transparent w-full border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent mt-5 p-2"
          ></textarea>
          <input
            type="text"
            name="referral"
            id="referral"
            value={individual.referral}
            onChange={handleChange}
            placeholder="Referral Code (Optional)"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold my-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export const BrandSignUpForm = () => {
  const initialValue = {
    industries: "",
    location: "",
    specialties: "",
    bio: "",
    referral: "",
  };

  const [brand, setBrand] = useState(initialValue);
  const [brandDetails, setBrandDetails] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBrand({ ...brand, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validator(brand);
    setErrors(validationErrors);

    // If there are errors, do not proceed with submission
    if (Object.keys(validationErrors).length !== 0) {
      console.log("Invalid Form");
      return;
    }

    // If no errors, proceed with form submission
    setBrandDetails([...brandDetails, brand]);
    setBrand(initialValue);

    // Reset isSubmit to false after processing the submission
    setIsSubmit(false);
    console.log(brandDetails);
  };

  const validator = (formData) => {
    const errors = {};

    if (!formData.bio) {
      errors.bio = "Please enter a bio";
    }
    if (!formData.specialties) {
      errors.specialties = "Please enter a specialty";
    }
    if (!formData.location) {
      errors.location = "Enter a location";
    }
    if (!formData.industries) {
      errors.industries = "Select an Industry";
    }

    console.error(errors);
    return errors;
  };
  return (
    <>
      <div className="px-32">
        <h2 className="text-white text-[40px] font-bold">Create an account</h2>
        <p className="text-white text-[20px] mb-5">
          Kindly fill the form below with <br />
          appropriate information.
        </p>
        <div className="mb-5 w-full">
          <Progress2 />
        </div>
        <form
          action=""
          className="flex items-center justify-center flex-col"
          onSubmit={handleSubmit}
        >
          <select
            id="industries"
            name="industries"
            className="bg-transparent border border-[#525252] focus:outline-none text-white text-base rounded block w-full p-2"
            // onChange={handleSelectChange}
            onChange={handleChange}
            value={brand.industries}
            // value={selectedOption}
          >
            <option defaultValue className="bg-[#0F0F0F] text-base">
              Select Industry
            </option>
            <option value="1" className="bg-[#0F0F0F] text-base">
              Tech
            </option>
            <option value="2" className="bg-[#0F0F0F] text-base">
              Entertainment
            </option>
            <option value="3" className="bg-[#0F0F0F] text-base">
              Fashion
            </option>
            <option value="4" className="bg-[#0F0F0F] text-base">
              Finance
            </option>
            <option value="5" className="bg-[#0F0F0F] text-base">
              Others
            </option>
          </select>
          {/* {selectedOption === "5" && (
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Please specify..."
              className="bg-transparent border border-[#525252] focus:outline-none text-white text-base rounded block w-full p-2 mt-5"
            />
          )} */}

          <input
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
            value={brand.location}
            placeholder="Headquarters"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <input
            type="text"
            name="specialties"
            id="specialties"
            onChange={handleChange}
            value={brand.specialties}
            placeholder="Specialties"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <textarea
            type="text"
            name="bio"
            id="bio"
            placeholder="Bio"
            onChange={handleChange}
            value={brand.bio}
            cols="10"
            rows="10"
            className="bg-transparent w-full border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent mt-5 p-2"
          ></textarea>
          <input
            type="text"
            name="referral"
            id="referral"
            value={brand.referral}
            onChange={handleChange}
            placeholder="Referral Code (Optional)"
            className="p-2 w-full mt-5 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
          />
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold my-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export const SignUpSuccess = () => {
  return (
    <>
      <div className="px-32 flex flex-col items-center justify-center">
        <img src={Success} alt="" className="w-1/2 mx-auto" />
        <h2 className="text-white text-[40px] font-bold mt-3">
          Sign up successful
        </h2>
        <p className="text-white text-[20px] my-5 text-center">
          Congratulations! You have successfully signed up for our platform. We
          are delighted to have you as part of our community.
        </p>
        <button className="button-gradient border-2 border-[#FFD21D] rounded-md py-2 px-5 w-max focus:outline-none font-bold my-6">
          Go to Login
        </button>
      </div>
    </>
  );
};
