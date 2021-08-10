import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCart, completeUserCart } from '../store/cart';
import CartItem from './CartItem';
import { me } from '../store';
import { deleteProductFromCart } from '../store/cart';
import { editQuantity } from '../store/cart';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function Cart(props) {
  const [subtotal, setSubTotal] = useState(0);
  const {
    match: {
      params: { id },
    },
    cart,
    userId,
    deleteProduct,
    editQuantity,
    isLoggedIn,
    completeCart,
  } = props;

  const calcSubtotal = (cart) => {
    console.log(cart);
    if (cart.length) {
      const total = cart.reduce((total, item) => {
        return total + item.orderDetails.quantity * item.orderDetails.price;
      }, 0);
      setSubTotal(total);
    }
  };
  useEffect(() => {
    props.fetchCart(id);
    calcSubtotal(cart);
  }, []);
  const updateClick = () => {
    props.fetchCart(id);
    calcSubtotal(cart);
  };
  return (
    <div
      className="food-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div>
        <h2>Shopping Cart</h2>
      </div>
      {cart.length ? (
        cart.map(({ name, id, orderDetails, quantity, category }) => (
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
            category={category}
          />
        ))
      ) : (
        <div>
          <h3>Your cart is empty!</h3>
        </div>
      )}
      {cart.length ? (
        <div style={{ maxWidth: 1400, minWidth: 750, marginTop: '15px' }}>
          <Card style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CardContent>
              <Typography component="p">Subtotal: ${subtotal}</Typography>
            </CardContent>
            <Link to={`/users/${userId}/checkout`}>
              <Button onClick={() =>{completeCart(userId)}}>Checkout</Button>
            </Link>
          </Card>
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

const mapState = (state) => ({
  cart: state.cart.userCart,
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
    completeCart: (userId) => 
    dispatch(completeUserCart(userId))
});

export default connect(mapState, mapDispatch)(Cart);
