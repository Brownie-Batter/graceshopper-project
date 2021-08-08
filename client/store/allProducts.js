import axios from 'axios';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

const _getAllProducts = (payload) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
};

export const getAllProducts = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products', { params });
      console.log(data);
      dispatch(_getAllProducts(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const initialState = {
  totalItems: 0,
  products: [],
  categories: [],
  totalPages: 0,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}
