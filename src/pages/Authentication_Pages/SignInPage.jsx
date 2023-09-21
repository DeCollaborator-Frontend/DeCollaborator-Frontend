import { SignInForm } from "../../components/Forms/AuthenticationForms/SignInForm";
import AuthImg from "../../assests/images/AuthImage.png";

const SignInPage = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <img src={AuthImg} alt="" className="h-screen w-[40vw]" />
        </div>
        <div className="flex justify-center items-center">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
