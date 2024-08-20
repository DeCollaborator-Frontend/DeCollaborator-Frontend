import { SignInForm } from "../../components/Forms/AuthenticationForms/SignInForm";
import AuthImg from "../../assests/images/AuthImage.png";
import Logo from "../../assests/images/de_logo.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <div className="relative grid bg-[black] md:grid-cols-2">
        <div className="hidden px-5 md:block">
          <div className="absolute top-5">
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <h2 className="mt-28 text-center text-[1.75rem] font-bold text-white">
            NO 1 Collaboration Enhancer
          </h2>
          <p className="mb-5 text-center text-[20px] text-white">
            We make collaboration easier and faster
          </p>
          <div className="p-10">
            5
            <img src={AuthImg} alt="" className="" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
