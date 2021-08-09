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
      params: { id },
    },
    cart,
    userId,
    deleteProduct,
    editQuantity,
    isLoggedIn,
  } = props;

  useEffect(() => {
    props.fetchCart(id);
  }, []);
  return (
    <div className="food-container">
      {cart.length ? (
        cart.map(({ name, id, orderDetails, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            name={name}
            quantity={orderDetails.quantity}
            price={orderDetails.price}
            userId={userId}
            deleteProduct={deleteProduct}
            editQuantity={editQuantity}
            isLoggedIn={isLoggedIn}
            inventory={quantity}
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

const mapState = (state) => ({
  cart: state.cart,
  isLoggedIn: !!state.auth.id,
  userId: state.auth.id,
});

const mapDispatch = (dispatch, { history }) => ({
  fetchCart: (id) => dispatch(fetchCart(id, history)),
  deleteProduct: (userId, productId) =>
    dispatch(deleteProductFromCart(userId, productId)),
  loadInitialData() {
    dispatch(me());
  },
  editQuantity: (userId, prodId, quantity) =>
    dispatch(editQuantity(userId, prodId, quantity)),
});

export default connect(mapState, mapDispatch)(Cart);
