import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TOKEN = 'token';
//action type
const SET_CART = 'SET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_PRODUCT_CART = 'DELETE_CART';
const UPDATE_CART = 'UPDATE_CART';
const EMPTY_CART = 'EMPTY_CART';

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
export const emptyCart = () => ({
  type: EMPTY_CART,
  cart: [],
});

//thunker set cart
export const fetchCart = (id, history) => async (dispatch) => {
  try {
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
  } catch (err) {
    toast.error(err.response.data, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push('/products');
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
    let cleanProduct = data.products.filter((product) => {
      return product.id === productId;
    });
    console.log(cleanProduct[0]);
    dispatch(addToCart(cleanProduct[0]));
  } catch (err) {
    toast.error(err.response.data, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
//edit product quantity in cart

export const editQuantity = (id, productId, quantity) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.post(`/api/users/${id}/cart/${productId}`, {
      headers: {
        authorization: token,
      },
      quantity: quantity,
    });
    dispatch(updateCart(data));
  } catch (err) {
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
  } catch (err) {
    toast.error(err.response.data, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

//store

export default function cartReducer(state = [], payload) {
  switch (payload.type) {
    case SET_CART:
      return payload.cart;
    case ADD_TO_CART:
      // return state;
      return [...state, payload.product];
    case DELETE_PRODUCT_CART:
      console.log('payload', payload);
      return state.filter(
        (cart) => cart.orderDetails.productId != payload.product
      );
    case UPDATE_CART:
      return state;
    // return state.map((cart) =>
    // (cart.id === payload.cart.id ? payload.cart : cart));
    case EMPTY_CART:
      return payload.cart;
    default:
      return state;
  }
}
