/* eslint-disable react/prop-types */
const FilterDropdown = ({ label, options, onFilterChange }) => {
  return (
    <div
      className="filter-dropdown"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label className="back-text">
        {label}:{"   "}{" "}
      </label>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
