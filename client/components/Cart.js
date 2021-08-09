import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';
import CartItem from './CartItem';
import { me } from '../store';
import { deleteProductFromCart } from '../store/cart';

function Cart(props) {
  const {
    match: {
      params: { id, isLoggedIn },
    },
    cart,
    
    userId,
    deleteProduct,
  } = props;

  useEffect(() => {
    props.fetchCart(id);
    // if (!isLoggedIn && cart.length > 0) {
    //   window.localStorage.setItem('cart', []);
    // }
  }, []);

  const foodProduct = {
    name: 'teriyaki',
    quantity:10,
    price:10,
    productId:2,
  }
  window.localStorage.clear()
window.localStorage.setItem(foodProduct.name,JSON.stringify(foodProduct))
window.localStorage.setItem('12','4')
window.localStorage.setItem('13','5')
window.localStorage.setItem('14','1')
//setItem is adding
//removeitem delete
//clear remove cart
  const cartObject = window.localStorage

let cartArray = []

for(let item in cartObject){
if(Object.keys(cartObject).indexOf(item)>=0 ){
  cartArray.push(JSON.parse(cartObject[item]))
}

}
 

// if (!id) {
//   // localstorage cart
//   let cart = window.localStorage.getItem('cart');
//   if (!cart) {
//     window.localStorage.setItem('cart', '');
//     cart = window.localStorage.getItem('cart');
//     console.log(cart);
//   }
  

//if (!cart)
//if(cart.length === 0) {   2nd logic for both
//   user is logged in but is empty - Loading
// if(cart === null) {
//   Visitor want to use localStorage/cartArray
// }
// if(cart.length> 0)  first logic
// user is logged in load cart data
// }
console.log("windowcartcheck",cartArray)
  return (
    <div className="food-container">
      {isLoggedIn ? (
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
});

export default connect(mapState, mapDispatch)(Cart);
