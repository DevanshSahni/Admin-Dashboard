import React, { useState } from "react";
import "../CSS/SearchBar.css";

const SearchBar = ({ users, setData }) => {
  const [searchValue, setSearchValue] = useState("");

  const filterEntries = (e) => {
    setSearchValue(e.target.value);

    const filteredData = users.filter((user) => {
      let name = user.name.toLowerCase();
      let email = user.email.toLowerCase();
      let role = user.role.toLowerCase();

      const searchQuery = e.target.value.toLowerCase();

      return (
        name.includes(searchQuery) ||
        email.includes(searchQuery) ||
        role.includes(searchQuery)
      );
    });

    setData(filteredData);
  };

  return (
    <input
      className="search-bar"
      type="text"
      onChange={filterEntries}
      value={searchValue}
      placeholder="Enter Value..."
    />
  );
};

export default SearchBar;
