import axios from 'axios';

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

const _getAllProducts = (allProducts) => {
  return {
    type: GET_ALL_PRODUCTS,
    allProducts,
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get('/api/products');
      dispatch(_getAllProducts(products.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.allProducts;
    default:
      return state;
  }
}
