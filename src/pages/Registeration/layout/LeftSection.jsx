import { MsgIcon } from "../../../assets/icons/Icons";

import Header from "../../../components/layout/Header";
import PersonalDetailsForm from "../../../components/common/steps/PersonalDetailsForm/PersonalDetailsForm.jsx";
import EmailCheck from "../../../components/emailCheck.jsx";
import EmailVerified from "../../../components/EmailVerified.jsx";
import StoreForm from "../../../components/StoreForm/StoreForm.jsx";
import { useState } from "react";

function LeftSide({ setPageNum, pageNum }) {
  const [emailChecked, setEmailChecked] = useState(false);
  return (
    <section className="register-page__lsec">
      {/* layout */}
      <Header pageNum={pageNum} />
      {/* main */}
      <main className="register-page__lsec--main">
        {pageNum === 0 && <PersonalDetailsForm setPageNum={setPageNum} />}
        {pageNum === 1 && (
          <>
            {!emailChecked && <EmailCheck setEmailChecked={setEmailChecked} />}
            {emailChecked && (
              <EmailVerified
                setPageNum={setPageNum}
                setEmailChecked={setEmailChecked}
              />
            )}
          </>
        )}
        {[2, 3].includes(pageNum) && <StoreForm setPageNum={setPageNum} />}
      </main>

      {/* footer */}
      <footer className="register-page__lsec--footer">
        <div className="footer-section">
          <p>© Markatty 2022</p>
          <p>
            <MsgIcon /> support@markatty.com
          </p>
        </div>
      </footer>
    </section>
  );
}

export default LeftSide;
