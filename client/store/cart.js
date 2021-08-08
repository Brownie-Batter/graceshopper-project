import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOKEN = 'token';
//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_PRODUCT_CART = 'DELETE_CART';
const UPDATE_CART = 'UPDATE_CART';

//creator
export const set_cart = (cart) => ({
  type: SET_CART,
  cart,
});
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});
export const deleteProductCart = (product) => ({
  type: DELETE_PRODUCT_CART,
  product,
});
export const updateCart = (product) => ({
  type: UPDATE_CART,
  product,
});

//thunker set cart
export const fetchCart = (id) => async (dispatch) => {
  try {
    if (!id) {
      // localstorage cart
      let cart = window.localStorage.getItem('cart');
      if (!cart) {
        window.localStorage.setItem('cart', '');
        cart = window.localStorage.getItem('cart');
        console.log(cart);
      }
      dispatch(set_cart(cart));
    } else {
      const token = window.localStorage.getItem(TOKEN);
    const {
      data: { orders },
    } = await axios.get(`/api/users/${id}/cart`, {
      headers: {
        authorization: token,
      },
    });
    let cleanCart = orders[0].products.map((product) => product);

      dispatch(set_cart(cleanCart));
    }
  } catch (error) {
    console.error(error);
  }
};

// thunker add to cart
export const addProductToCart = (id, productId, price) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.post(`/api/users/${id}/cart/${productId}`, {
      headers: {
        authorization: token,
      },
      price: price,
    });
    let cleanProduct = data.products[data.products.length - 1];

    dispatch(addToCart(cleanProduct));
    toast.success(`${cleanProduct.name} added to cart`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
  }
};

// thunker delete cart item
export const deleteProductFromCart = (id, productId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.put(`/api/users/${id}/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(deleteProductCart(data));
  } catch (error) {
    console.error(error);
  }
};

//thunker update cart

//store

export default function cartReducer(state = [], payload) {
  switch (payload.type) {
    case SET_CART:
      return payload.cart;
    case ADD_TO_CART:
      return state;
    //return [...state, payload.product];
    case DELETE_PRODUCT_CART:
      console.log('payload', payload);
      return state.filter(
        (cart) => cart.orderDetails.productId != payload.product
      );
    // case UPDATE_CART:
    // return state.map((cart) =>
    // (cart.id === payload.cart.id ? payload.cart : cart));
    default:
      return state;
  }
}
