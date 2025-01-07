import { useState } from "react";


import DescriptionMessage from "../../components/common/DescMsg/DescriptionMessage";
// import LeftSection from "./layout/LeftSection";
import RightSection from "./layout/RightSection";
import "./style.css";
import { ArrowBgIcon } from "../../assets/icons/Icons";
import EmailCheck from "../../components/emailCheck";
// import EmailVerified from "../../components/EmailVerified";
// import StoreForm from "../../components/StoreForm";

function RegisterPage() {
  const [pageNum, setPageNum] = useState(1);

  return (
    <main className="register-page">
      {/*<LeftSection pageNum={pageNum} setPageNum={setPageNum} />*/}
      {/* display message in the Right side of the registeration page */}
      <EmailCheck />
      {/* <EmailVerified />*/}
     {/*  <StoreForm />*/}
    {/*  <RightSection />*/}
        <div className="register-page__arrow">
        <ArrowBgIcon />
      </div>
     
    </main>
  );
}

export default RegisterPage;
