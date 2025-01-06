import { Steps } from "antd";
import { useState } from "react";
import { LeftArrow, LogoIcon, MsgIcon, SuccessIcon } from "../assets/icons/Icons";

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
function EmailVerified() {
    const [step, setStep] = useState(0);
    const handleMinus = () => {
        if (step > 0) setStep((s) => s - 1);
    };
    const handleAdd = () => {
        if (step < items.length) setStep((s) => s + 1);
    };
 

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   };



    return (
        <section className="register-page__lsec">
            {/* layout */}
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
                <button onClick={handleMinus}>-</button>
                <button onClick={handleAdd}>+</button>
            </header>

            {/* main */}
            <main className="register-page__lsec--main">
                <div className="header">
                <SuccessIcon  />
                 

                    <h1 className="header-title">Email verified</h1>
                    <p className="header-description-one" style={{ textAlign:'center'}}>Your account has been verifeid succesfully. <br /> Click below to setup your store</p>
                    <p className="header-description-two" ></p>
                    <button type="submit" className="submit-btn">
                        Continue
                    </button>
                </div>

                <p className="back-to-login">
                    <LeftArrow />
                    <a>Back to log in</a>
                </p>
            </main>

            {/* footer */}
            <footer className="register-page__lsec--footer">
                <div className="footer-section">
                    <p>© Markatty 2022</p>
                    <p><MsgIcon /> support@markatty.com</p>
                </div>
            </footer>
        </section>
    );
}


export default EmailVerified;
