import React, { useState } from "react";




// setSuperHeroesList(superheros.filter((hero) => hero.name !== superhero.name));

function Filter({ onCategoryChange, search, onSearchChange }) {
  
  function handleSearchChange(event) {
   {onSearchChange(event.target.value)};
  }

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} value={search} type="text" name="search" placeholder="Search..."  />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
// onSearch={(e)=>{setSearch(e.target.value)}}
// value={search}