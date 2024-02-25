// import React, { useState } from "react";
// import ItemForm from "./ItemForm";
// import Filter from "./Filter";
// import Item from "./Item";

// function ShoppingList({ items, setItems }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [search, setSearch] = useState('')
  
//   function searchFilter(e){
//     setSearch(e.target.value)
//   }

//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   const searchDisplay = items.filter((item) => {
//     return item.name.toLowerCase().includes(search.toLowerCase()) 
//   })

//   const itemsToDisplay = searchDisplay.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });


//   return (
//     <div className="ShoppingList">
//       <ItemForm items={items} setItems={setItems}/>
//       <Filter onCategoryChange={handleCategoryChange} searchfilter={searchFilter} search={search} />
//       <ul className="Items">
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  const searchDisplay = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const itemsToDisplay = searchDisplay.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  function onSearchChange(newValue) {
    setSearch(newValue);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
