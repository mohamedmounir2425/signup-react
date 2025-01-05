import { Steps } from "antd";
import { LogoIcon } from "../../../assets/icons/Icons";
import { useState } from "react";

const items = [
  {
    title: "Finished",
    description: "This is the second step",
  },
  {
    title: "In Progress",
    description: "This is the second step",
  },
  {
    title: "Waiting",
    description: "This is the second step",
  },
];
function LeftSide() {
  const [step, setStep] = useState(0);
  const handleMinus = () => {
    if (step > 0) setStep((s) => s - 1);
  };
  const handleAdd = () => {
    if (step < items.length) setStep((s) => s + 1);
  };
  // const steps = [
  //   {
  //     title: "Step 1",
  //     description: "This is the first step",
  //     icon: <UserOutlined />,
  //   },
  //   {
  //     title: "Step 2",
  //     description: "This is the second step",
  //     icon: <SolutionOutlined />,
  //   },
  //   {
  //     title: "Step 3",
  //     description: "This is the third step",
  //     icon: <LoadingOutlined />,
  //   },
  // ];
  return (
    <section className="register-page__lsec">
      {/* layout */}
      <header className="register-page__lsec--header">
        <LogoIcon width={100} height={45} />
        <div style={{ margin: "1.5rem 0" }}>
          <Steps
            size="medium"
            current={step}
            labelPlacement="vertical"
            items={items}
          />
        </div>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleAdd}>+</button>
      </header>

      {/* main */}
      <main className="register-page__lsec--main">main</main>

      {/* footer */}
      <footer className="register-page__lsec--footer">footer</footer>
    </section>
  );
}

export default LeftSide;
