import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function VisitorCart() {
  const [visitorCart, setVisitorCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);

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
    calcSubtotal(cart);
  };

  const handleDelete = (id) => {
    localStorage.removeItem(id);
    grabCartItems();
  };

  const calcSubtotal = (cart) => {
    if (cart.length) {
      const total = cart.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
      setSubTotal(total);
    }
  };

  const updateClick = () => {
    grabCartItems();
  };
  return (
    <div className="food-container" style={{ maxWidth: 1400 }}>
      {visitorCart.length ? (
        visitorCart.map(({ name, productId, quantity, price, category }) => {
          return (
            <CartItem
              key={productId}
              name={name}
              productId={productId}
              quantity={quantity}
              price={price}
              handleVisitorDelete={handleDelete}
              category={category}
            />
          );
        })
      ) : (
        <div>
          <h3>Your cart is empty!</h3>
        </div>
      )}
      <div style={{ maxWidth: 1400, minWidth: 750 }}>
        <Card style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CardContent>
            <Typography component="p">Subtotal: ${subtotal}</Typography>
          </CardContent>
          <Button onClick={updateClick}>Update Cart</Button>
        </Card>
        <h3></h3>
      </div>
    </div>
  );
}
