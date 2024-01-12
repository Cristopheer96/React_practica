import './TodoSearch.css'
import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
  console.log(' se bucca '+ searchValue)
  return (
    <input placeholder="Cortar Cebolla" 
    className="TodoSearch" 
    value = {searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    ></input>
  );
}

export { TodoSearch }
  