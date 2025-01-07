import { LeftArrow } from "../../assets/icons/Icons";
import { useState } from "react";
import CustomSelect from "../CustomSelect";
import "./StoreForm.css";

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

  return (
    <div className=" form-container">
      <form onSubmit={handleSubmit} className="store-form-ctr">
        {/* Store Name */}
        <div className="store-form-group">
          <label htmlFor="name">Store name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="store-name"
            placeholder="Type your store name"
          />
        </div>

        {/* Store URL */}
        <div className="store-form-group">
          <label htmlFor="url">Store URL</label>
          <div className="input-url-ctr">
            <input
              type="url"
              id="url"
              name="url"
              value={formData.email}
              onChange={handleChange}
              className="store-url"
              placeholder="My store"
            />
            <span>.markatty.com</span>
          </div>
        </div>

        {/* Store Language Dropdown */}
        <div className="store-form-group">
          <label htmlFor="language">Store language</label>
          <CustomSelect />
        </div>

        {/* Store Industry */}
        <div className="store-form-group">
          <label htmlFor="password">Store Industry</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="store-name"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
          <span className="examples">
            Ex.(Baby, Boys fashion, Girls fashion, Mens fashion, etc..).
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-btn"
          onClick={() => {
            setPageNum(3);
            alert("Store created");
          }}
        >
          Save
        </button>
      </form>

      {/* Back to Login */}
      <p className="back-to-login">
        <LeftArrow />
        <a href="#back">Back to log in</a>
      </p>
    </div>
  );
}

export default StoreForm;
