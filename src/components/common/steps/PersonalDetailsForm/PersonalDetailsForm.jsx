import { TextField } from "@mui/material";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { LanguageIcon } from "../../../../assets/icons/Icons";
import "./PersonalDetailsForm.css";
import "react-phone-input-2/lib/style.css";

function PersonalDetailsForm() {
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

  const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            country="eg"
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder="Enter your phone number "
            dropdownStyle={{ zIndex: 100 }}
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
        <p className="existed-account">
          Already have an accout? <a className="Log-In">Log in</a>
        </p>
      </form>
      <div className="Language">
        <p>عربى </p>
        <LanguageIcon />
      </div>
    </div>
  );
}

export default PersonalDetailsForm;
