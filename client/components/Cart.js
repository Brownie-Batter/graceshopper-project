import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';
import { me } from '../store';
import { deleteProductFromCart } from '../store/cart';
import { editQuantity } from '../store/cart';

function Cart(props) {
  const {
    match: {
      params: { id, isLoggedIn },
    },
    cart,
    userId,
    deleteProduct,
    editQuantity,
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
          <CartItem
            key={id}
            productId={id}
            name={name}
            quantity={quantity}
            price={price}
            userId={userId}
            deleteProduct={deleteProduct}
            editQuantity={editQuantity}
          />
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
  userId: state.auth.id,
});

const mapDispatch = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
  deleteProduct: (userId, productId) =>
    dispatch(deleteProductFromCart(userId, productId)),
  loadInitialData() {
    dispatch(me());
  },
  editQuantity: (userId, prodId, quantity) =>
    dispatch(editQuantity(userId, prodId, quantity)),
});

export default connect(mapState, mapDispatch)(Cart);
