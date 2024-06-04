import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchInput = ({ search, setSearch }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-screen">
      <div className="search-container">
        <BiSearchAlt2 className="search-icon" />
        <input
          type="text"
          className="search-input"
          value={search}
          placeholder="Search for a recipe..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchInput;
