// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm({ items, setItems }) {
//   const [selectedOption, setSelectedOption] = useState('Produce')
//   const[id, setId] = useState()
//   const[name, setName] = useState('')
//   const [category, setCategory] = useState('');

//   function handleChange(e){
//     setSelectedOption(e.target.value);
//   };

//   function handleSubmit(e){
//     e.preventDefault();
//     let newItem = { 
//       id: uuid(), 
//       name,
//       category
//     }
//     console.log(newItem)
//     setItems([...items, newItem])
//     setName('')

//   };

//   return (
//     <form onSubmit={handleSubmit}className="NewItem">
//       <label>
//         Name:
//         <input onChange={(e)=>{setName(e.target.value)}}type="text" name="name" value={name}/>
//       </label>

//       <label>
//         Category:
//         <select onChange={handleChange} name="category" value={selectedOption}>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'category') {
      setCategory(e.target.value);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category
    };
    onItemFormSubmit(newItem);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category" value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
