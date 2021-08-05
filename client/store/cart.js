import axios from 'axios'

//action type
const SET_CART = 'SET_CART';

//creator
export const set_cart = (cart) => ({
    type: SET_CART,
    cart,
})

//thunker set cart
export const fetchCart = (id) => async(dispatch) => {
    try {
        const {data} = axios.get(`${id}/cart`)
        dispatch(set_cart(data))
    } catch (error) {
        console.error(error);
    }
}
//store

export default function cartReducer(state = [], payload) {
    switch (payload.type) {
      case SET_CART:
        return payload.cart;
    //   case ADD_CART:
    //     return [...state, payload.cart];
    //   case DELETE_CART:
    //     return state.filter((cart) => cart.id !== payload.cart.id);
    //   case UPDATE_CART:
    //   return state.map((cart) =>
    //   (cart.id === payload.cart.id ? payload.cart : cart));
      default:
        return state;
    }
}