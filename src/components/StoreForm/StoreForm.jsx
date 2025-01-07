import { ArrowDownIcon, LeftArrow } from "../../assets/icons/Icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomSelect from "../CustomSelect";
import "./StoreForm.css";

const languagesOptions = [
  { name: "Select Language", value: "" },
  {
    code: "us",
    name: "English",
    value: "English",
    flag: "../src/assets/images/languages/english.png",
  },
  {
    code: "gb",
    name: "Arabic",
    value: "Arabic",
    flag: "../src/assets/images/languages/arabic.png",
  },
];

const storeIndustryOptions = [
  { name: "Select fashion", value: "" },
  { name: "Baby", value: "Baby" },
  { name: "Boys fashion", value: "BoysFashion" },
  { name: "Girls fashion", value: "GirlsFashion" },
  { name: "Mens fashion", value: "MensFashion" },
];

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Store name is required."),
  url: Yup.string()
    .url("Must be a valid URL.")
    .required("Store URL is required."),
  language: Yup.string().required("Store language is required."),
  industry: Yup.string().required("Store industry is required."),
});

function StoreForm({ setPageNum }) {
  const initialValues = {
    name: "",
    url: "",
    language: "",
    industry: "",
  };

  const handleSubmit = (values) => {
    values.url = `${values.url}.markatty.com`;
    console.log("Form Data:", values);
    localStorage.setItem("store-form", JSON.stringify(values));
    alert("Store created");
    setPageNum(3);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="store-form-ctr">
            {/* Store Name */}
            <div className="store-form-group">
              <label htmlFor="name">Store name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Type your store name"
                className="store-name"
              />
              <ErrorMessage name="name" component="div" className="error-msg" />
            </div>

            {/* Store URL */}
            <div className="store-form-group">
              <label htmlFor="url">Store URL</label>
              <div className="input-url-ctr">
                <Field
                  type="text"
                  id="url"
                  name="url"
                  placeholder="My store"
                  className="store-url"
                />
                <span>.markatty.com</span>
              </div>
              <ErrorMessage name="url" component="div" className="error-msg" />
            </div>

            {/* Store Language Dropdown */}
            <div className="store-form-group">
              <label htmlFor="language">Store language</label>
              <CustomSelect
                options={languagesOptions}
                id="language"
                onChange={(value) => setFieldValue("language", value)}
              />
              <ErrorMessage
                name="language"
                component="div"
                className="error-msg"
              />
            </div>

            {/* Store Industry */}
            <div className="store-form-group">
              <label htmlFor="industry">Store Industry</label>
              <CustomSelect
                options={storeIndustryOptions}
                id="industry"
                onChange={(value) => setFieldValue("industry", value)}
              />
              <ErrorMessage
                name="industry"
                component="div"
                className="error-msg"
              />
              <span className="examples">
                Ex.(Baby, Boys fashion, Girls fashion, Mens fashion, etc..).
              </span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Save
            </button>
          </Form>
        )}
      </Formik>

      {/* Back to Login */}
      <p className="back-to-login">
        <LeftArrow />
        <p style={{ marginBottom: 0 }} onClick={() => setPageNum(0)}>
          Back to log in
        </p>
      </p>
    </div>
  );
}

export default StoreForm;
