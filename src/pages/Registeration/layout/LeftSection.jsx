import { Steps } from "antd";
import { LanguageIcon, LogoIcon, MsgIcon } from "../../../assets/icons/Icons";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

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
function LeftSide() {
  const [step, setStep] = useState(0);
  const handleMinus = () => {
    if (step > 0) setStep((s) => s - 1);
  };
  const handleAdd = () => {
    if (step < items.length) setStep((s) => s + 1);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const [phone, setPhone] = useState('');

  return (
    <section className="register-page__lsec">
      {/* layout */}
      <header className="register-page__lsec--header">
        <LogoIcon width={100} height={45} />
        <div style={{ margin: "1.5rem 0" }}>
          <Steps
            size="large"
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
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <PhoneInput
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
              }}
                country='eg'
                value={phone}
                onChange = {(value)=> setPhone(value)}
                placeholder="Enter your phone number "

              />
              </div>
            <div className="form-group">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <p className="error-msg">Must be at least 8 characters.</p>
            </div>
            <button type="submit" className="submit-btn">
              Get Started
            </button>
            <p className="existed-account">Already have an accout? <a className="Log-In">Log in</a></p>
          </form>
          <div className="Language">
            <p>عربى </p>
            <LanguageIcon />
          </div>
            </div>
        
      </main>

      {/* footer */}
      <footer className="register-page__lsec--footer">
        <div className="footer-section">
          <p>© Markatty 2022</p>
        <p><MsgIcon/> support@markatty.com</p>
        </div>
      </footer>
    </section>
  );
}

export default LeftSide;
