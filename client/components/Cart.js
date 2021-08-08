import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';
import { deleteProductFromCart } from '../store/cart';

function Cart(props) {
  const {
    match: {
      params: { id },
    },
    cart,
    userId,
    deleteProduct,
  } = props;

  useEffect(() => {
    props.fetchCart(id);
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
  userId: state.auth.id,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
  deleteProduct: (userId, productId) =>
    dispatch(deleteProductFromCart(userId, productId)),
});

export default connect(mapState, mapDispatch)(Cart);
