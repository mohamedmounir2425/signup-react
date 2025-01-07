import { MsgIcon } from "../../../assets/icons/Icons";

import Header from "../../../components/layout/Header";
import PersonalDetailsForm from "../../../components/common/steps/PersonalDetailsForm/PersonalDetailsForm.jsx";

function LeftSide() {
  return (
    <section className="register-page__lsec">
      {/* layout */}
      <Header />
      {/* main */}
      <main className="register-page__lsec--main">
        <PersonalDetailsForm />
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
