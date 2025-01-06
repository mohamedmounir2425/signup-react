import  { useState } from "react";

const CustomSelect = () => {
    const languages = [
        {
            value: "en",
            label: "English",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
        },
        {
            value: "ar",
            label: "Arabic",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_United_Arab_Emirates.svg",
        },
        {
            value: "fr",
            label: "French",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedLang = languages.find((lang) => lang.value === selectedValue);
        setSelectedLanguage(selectedLang);
    };

    return (
        <div style={{ width: "250px" }}>
            <label htmlFor="language-select" style={{ marginBottom: "8px", display: "block", fontWeight: "bold" }}>
                Store language
            </label>
            <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                <select
                    id="language-select"
                    value={selectedLanguage.value}
                    onChange={handleChange}
                    style={{
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        fontSize: "16px",
                        backgroundSize: "20px 20px, 12px 12px",
                        backgroundColor: "#f9f9f9",
                        paddingLeft: "50px",
                    }}
                >
                    {languages.map((lang) => (
                        <option key={lang.value} value={lang.value}>
                            {lang.label}
                            <img src={lang.icon} alt="" />
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default CustomSelect;
