import { useEffect, useState } from "react";
import { LeftArrow, SecMsgIcon } from "../assets/icons/Icons";
import Otp from "./common/OTP/Otp";

function EmailCheck({ setEmailChecked }) {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  useEffect(() => {
    const ref = setTimeout(() => {
      alert("Enter this code: 2342");
    }, 2000);
    return () => {
      clearTimeout(ref);
    };
  }, []);

  function checkOtpValidation(otp) {
    return otp.some((o) => o === "");
  }

  return (
    <>
      <div className="header">
        <SecMsgIcon className="icon-msg" />

        <h1 className="header-title">Check your email</h1>
        <p className="header-description-one">We sent a verification code to</p>
        <p className="header-description-two">omarmouneer@gmail.com</p>
      </div>
      <div className="otp-form">
        <Otp otp={otp} setOtp={setOtp} />
        <button
          type="submit"
          className="verify-btn"
          onClick={() => setEmailChecked(true)}
          disabled={checkOtpValidation(otp)}
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
