import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="searchBox">
      <input
        type="text"
        name="search"
        className="searchInput"
        id=""
        value={search}
        placeholder="Enter City"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearch}>
        Get Weather
      </button>
    </div>
  );
}
