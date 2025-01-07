import { LeftArrow, SecMsgIcon } from "../assets/icons/Icons";
import Otp from "./common/OTP/Otp";

function EmailCheck({ setEmailChecked }) {
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  //OTP//

  return (
    <>
      <div className="header">
        <SecMsgIcon className="icon-msg" />

        <h1 className="header-title">Check your email</h1>
        <p className="header-description-one">We sent a verification code to</p>
        <p className="header-description-two">omarmouneer@gmail.com</p>
      </div>
      <div className="otp-form">
        <Otp />
        <button
          type="submit"
          className="verify-btn"
          onClick={() => setEmailChecked(true)}
        >
          Verify email
        </button>
      </div>
      <div className="resend-email">
        <p>
          Didn’t receive the email? <a className="resend">Click to resend</a>{" "}
        </p>
      </div>
      <p className="back-to-login">
        <LeftArrow />
        <a>Back to log in</a>
      </p>
    </>
  );
}

export default EmailCheck;
