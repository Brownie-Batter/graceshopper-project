import axios from 'axios';

//action type
const SET_CART = 'SET_CART';

//creator
export const set_cart = (cart) => ({
  type: SET_CART,
  cart,
});

//thunker set cart
export const fetchCart = (id) => async (dispatch) => {
  try {
    const {
      data: { orders },
    } = await axios.get(`/api/users/${id}/cart`);
    let cleanCart = orders[0].products.map((product) => product);

    dispatch(set_cart(cleanCart));
  } catch (error) {
    console.error(error);
  }
};

//add to cart
// export const addToCart = (id,productId) => async (dispatch) => {
//     try{
//         const updated = await axios.put(`/api/users/${id}/cart/${productId}`)

//     }catch(error){
//         console.error(error)
//     }
// }
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
