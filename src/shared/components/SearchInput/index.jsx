/* eslint-disable react/prop-types */
const SearchInput = ({ placeholder, onSearch }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;
