/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { iconCarrateDown } from "../../../assets/images/icons";

const FilterDropdown = ({ label, options, onFilterChange }) => {
  const [selectedOption, setSelectedOption] = useState("All"); // Default label

  const handleSelect = (eventKey) => {
    console.log(options);
    const selectedLabel = options.find(
      (option) => option.value == eventKey
    )?.label;

    console.log("Found Option:", selectedLabel, eventKey);
    console.log(selectedLabel);
    setSelectedOption(selectedLabel);
    onFilterChange(eventKey);
  };

  return (
    <div className="custom-dropdown">
      <span className="dropdown-label">{label}:</span> {/* Separate Label */}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="dropdown-toggle" id="dropdown-custom">
          {selectedOption} {/* Show selected option */}
          <img
            src={iconCarrateDown}
            alt="Dropdown Icon"
            className="dropdown-icon"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu">
          {options.map((option) => (
            <Dropdown.Item
              key={option.value}
              eventKey={option.value}
              className="dropdown-item"
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FilterDropdown;
