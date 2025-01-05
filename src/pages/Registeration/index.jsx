import { useState } from "react";

import DescriptionMessage from "../../components/common/DescMsg/DescriptionMessage";
import LeftSection from "./layout/LeftSection";
import RightSection from "./layout/RightSection";
import "./style.css";
import { ArrowBgIcon } from "../../assets/icons/Icons";

function RegisterPage() {
  const [pageNum, setPageNum] = useState(2);
  const [formData, setFormData] = useState({
    name: "",
    age: 2,
  });
  return (
    <main className="register-page">
      <LeftSection pageNum={pageNum} setPageNum={setPageNum} />
      {/* display message in the Right side of the registeration page */}
      <RightSection pageNum={pageNum} />
      <div className="register-page__arrow">
        <ArrowBgIcon />
      </div>
    </main>
  );
}

export default RegisterPage;
