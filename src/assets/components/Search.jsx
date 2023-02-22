import { useState } from 'react';
import { Input } from 'antd';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Input
      placeholder="Search foods..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default Search;