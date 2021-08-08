import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';
import { me } from '../store';

function Cart(props) {
  const {
    match: {
      params: { id, isLoggedIn },
    },
    cart,
  } = props;

  useEffect(() => {
    props.fetchCart(id);
    // if (!isLoggedIn && cart.length > 0) {
    //   window.localStorage.setItem('cart', []);
    // }
  }, []);

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
  isLoggedIn: !!state.auth.id,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
  loadInitialData() {
    dispatch(me());
  },
});

export default connect(mapState, mapDispatch)(Cart);
