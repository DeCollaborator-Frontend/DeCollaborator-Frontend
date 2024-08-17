import AuthImg from "../../assests/images/AuthImage.png";
import ResetPassword, {
  ResetPaswordConfirmation,
} from "../../components/Forms/UpdateInformationForms/ResetPasswordForm";
import Logo from "../../assests/images/de_logo.png";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="relative grid bg-[#000] md:grid-cols-2">
        <div className="hidden px-5 md:block">
          <div className="absolute top-5">
            <img src={Logo} alt="" />
          </div>
          <h2 className="mt-28 text-center text-[1.75rem] font-bold text-white">
            NO 1 Collaboration Enhancer
          </h2>
          <p className="mb-5 text-center text-[20px] text-white">
            We make collaboration easier and faster
          </p>
          <div className="p-10">
            <img src={AuthImg} alt="" className="" />
          </div>
        </div>
        <div className="flex h-screen items-center justify-center bg-[#0f0f0f]">
          <ResetPassword />
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
