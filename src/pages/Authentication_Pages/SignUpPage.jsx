import AuthImg from "../../assests/images/AuthImage.png";
import {
  BrandSignUpForm,
  GeneralSignUpForm,
  IndividualSignUpForm,
  SignUpSuccess,
} from "../../components/Forms/AuthenticationForms/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div className="flex items-center">
        <div>
          <img src={AuthImg} alt="" className="h-screen w-[80vw]" />
        </div>
        <div className="flex justify-center items-center">
          <GeneralSignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
