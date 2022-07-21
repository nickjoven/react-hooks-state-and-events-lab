import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSelect = (e) => {
    setSelectedCategory((selectedCategory) => e.target.value)
  }

  // the UL is populated by mapping over items. we want the UL to render items with the selected
  // category only. TBH I would not have come up with the solution without looking at the code...
  // but here goes. instead of mapping over all of the items, you want to map over a filtered 
  // version of the array.

  // we create a new array by conditionally filtering over the items array based on the status of
  // selectedCategory.
  const filteredList = items.filter((element) => {
    if (selectedCategory == 'All') {
      return true
    } else {
      return element.category == selectedCategory
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
