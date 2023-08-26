import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery) {
      // Call the onSearch prop function with the searchQuery
      onSearch(searchQuery);
    }
  };

  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
}

export default Navbar;
