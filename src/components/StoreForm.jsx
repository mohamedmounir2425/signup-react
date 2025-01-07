import { LeftArrow } from "../../src/assets/icons/Icons";
import { useState } from "react";
import icon1 from "../../src/assets/images/languages/english.png";

function StoreForm({ setPageNum }) {
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

  // Dropdown
  const options = [
    {
      value: "en",
      label: "English",
      icon1: "../../src/assets/images/languages/english.png",
    },
    {
      value: "ar",
      label: "Arabic",
      icon2: "../../src/assets/images/languages/english.png",
    },
  ];
  const [dropdownValue, setDropdownValue] = useState(options[0]);

  const handleDropdownChange = (e) => setDropdownValue(e.target.value);
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="store-name">Store name</label>
            <input
              type="text"
              id="store-name"
              name="store-name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type your store name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="store-url">Store URL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="language">Store language</label>
            <select
              className="select-box"
              id="language"
              name="language"
              value={dropdownValue}
              onChange={handleDropdownChange}
            >
              <option value="en">
                🇺🇸 <img src={icon1} alt="" /> English
              </option>
              <option value="ar">🇦🇪 Arabic</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Store Industry</label>
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
          <button
            type="submit"
            className="submit-btn"
            onClick={() => setPageNum(1)}
          >
            Save
          </button>
        </form>
        <p className="back-to-login">
          <LeftArrow />
          <a>Back to log in</a>
        </p>
      </div>
    </>
  );
}

export default StoreForm;
