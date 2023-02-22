import { useState } from 'react';
import { Input } from 'antd';

function Search({ searchState, setSearchState }) {
//   const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchState(event.target.value);
  };

  return (
    <Input
      placeholder="Search foods..."
      value={searchState}
      onChange={handleSearch}
    />
  );
}

export default Search;