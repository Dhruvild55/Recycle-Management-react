/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { iconCarrateDown } from "../../../assets/images/icons";

const FilterDropdown = ({ label, options, onFilterChange, value }) => {
  const [selectedOption, setSelectedOption] = useState("");

  // Set default value when options are available
  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      const defaultOption =
        options.find((opt) => opt.value === value) || options[0];
      setSelectedOption(defaultOption.label);
      onFilterChange(defaultOption.value);
    }
  }, [options, value]);

  const handleSelect = (eventKey) => {
    const selectedLabel = options.find(
      (option) => option.value == eventKey
    )?.label;
    setSelectedOption(selectedLabel);
    onFilterChange(eventKey);
  };

  return (
    <div className="custom-dropdown">
      <span className="dropdown-label">{label}:</span>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="dropdown-toggle" id="dropdown-custom">
          {selectedOption || "Select an option"}
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
