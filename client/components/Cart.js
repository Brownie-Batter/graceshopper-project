import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';

function Cart(props) {
  const {
    match: {
      params: { id },
    },
    cart,
  } = props;

  useEffect(() => {
    props.fetchCart(id);
  }, []);
  console.log('imacart',cart)
  return (
   
    <div className="food-container">
      {cart.length ? (
        cart.map(({ name, id, orderDetails: { quantity, price } }) => (
          <CartItem key={id} name={name} quantity={quantity} price={price} />
        ))
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}

const mapState = (state) => ({
  cart: state.cart,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
});

export default connect(mapState, mapDispatch)(Cart);
