import React, { useState } from "react";


function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  const handleAddButton = () => {
    setIsInCart((isInCart) => !isInCart)
    
  }

  return (
    <li className={
      isInCart
      ? 'in-cart'
      : ''
    }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddButton} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
