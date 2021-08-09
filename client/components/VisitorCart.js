import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

export default function VisitorCart() {
  const [visitorCart, setVisitorCart] = useState([]);

  useEffect(() => {
    grabCartItems();
  }, []);

  const grabCartItems = () => {
    let cart = [];
    for (const [key, product] of Object.entries(localStorage)) {
      let newKey = parseInt(key);
      if (!isNaN(newKey)) {
        console.log(newKey, JSON.parse(product));
        cart.push(JSON.parse(product));
      }
    }
    setVisitorCart(cart);
  };

  const handleDelete = (id) => {
    localStorage.removeItem(id);
    grabCartItems();
  };

  return (
    <div className="food-container">
      {visitorCart.length ? (
        visitorCart.map(({ name, productId, quantity, price }) => (
          <CartItem
            key={productId}
            name={name}
            productId={productId}
            quantity={quantity}
            price={price}
            handleVisitorDelete={handleDelete}
          />
        ))
      ) : (
        <div>
          <h3>Your cart is empty!</h3>
        </div>
      )}
    </div>
  );
}
