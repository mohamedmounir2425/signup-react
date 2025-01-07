import { Steps } from "antd";
import { LogoIcon } from "../../assets/icons/Icons";
import { useState } from "react";

const items = [
  {
    title: "Your details",
    description: "Provide your basic information",
  },
  {
    title: "Confirmation",
    description: "Confirm your email",
  },
  {
    title: "Store information",
    description: "Set your store main info",
  },
];
function Header() {
  const [step, setStep] = useState(0);
  const handleMinus = () => {
    if (step > 0) setStep((s) => s - 1);
  };
  const handleAdd = () => {
    if (step < items.length) setStep((s) => s + 1);
  };
  return (
    <header className="register-page__lsec--header">
      <LogoIcon width={100} height={45} />
      <div style={{ margin: "1.5rem 0" }}>
        <Steps
          size="small"
          current={step}
          labelPlacement="vertical"
          items={items}
        />
      </div>
      {/* <button onClick={handleMinus}>-</button>
      <button onClick={handleAdd}>+</button> */}
    </header>
  );
}

export default Header;
