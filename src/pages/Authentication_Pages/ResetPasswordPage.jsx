import AuthImg from "../../assests/images/AuthImage.png";
import ResetPassword, {
  ResetPaswordConfirmation,
} from "../../components/Forms/UpdateInformationForms/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <img src={AuthImg} alt="" className="h-screen w-[120vw]" />
        </div>
        <div className="flex justify-center items-center">
          <ResetPaswordConfirmation />
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
