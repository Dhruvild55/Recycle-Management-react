/* eslint-disable react/prop-types */
const SearchInput = ({ placeholder, onSearch, dynamicWidth }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      style={{ minWidth: dynamicWidth }}
    />
  );
};

export default SearchInput;
