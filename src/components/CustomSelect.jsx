import { useState } from "react";
import { ArrowDownIcon } from "../assets/icons/Icons";

const CustomSelect = ({ options = [], id, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(options[0]); // Default country
  const [isOpen, setIsOpen] = useState(false); // Track dropdown visibility

  const handleSelect = (country) => {
    setSelectedCountry(country); // Update selected country
    setIsOpen(false); // Close dropdown
    onChange(country.value);
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "100%" }}
    >
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #d0d5dd",
          backgroundColor: "#f9fafb",
          cursor: "pointer",
          transition: "all 0.2s",
          fontSize: "0.875rem",
          fontWeight: "500",
          lineHeight: "1.25rem",
          color: "#344054",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {selectedCountry.flag && (
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} Flag`}
              style={{
                width: "20px",
                height: "15px",
                marginRight: "10px",
                borderRadius: "4px",
              }}
            />
          )}
          <span>{selectedCountry.name}</span>
        </div>
        <span style={{ fontSize: "18px", color: "#667085" }}>
          <ArrowDownIcon
            style={{
              transition: "all .2s",
              transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            }}
          />
          {isOpen ? (
            <i className="fas fa-chevron-up" />
          ) : (
            <i className="fas fa-chevron-down" />
          )}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #d0d5dd",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            width: "100%",
            maxHeight: "300px",
            overflowY: "auto",
            transition: "all 0.3s ease-in-out",
            marginTop: "5px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 14px",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: "500",
                lineHeight: "1.25rem",
                color: "#344054",
                transition: "background-color 0.2s ease",
                borderBottom: "1px solid #f0f0f0",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {option.flag && (
                <img
                  src={option.flag}
                  alt={`${option.name} Flag`}
                  style={{
                    width: "20px",
                    height: "15px",
                    marginRight: "10px",
                    borderRadius: "4px",
                  }}
                />
              )}
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
