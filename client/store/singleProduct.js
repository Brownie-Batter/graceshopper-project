import axios from 'axios';

const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

const _getSingleProduct = (product) => {
  return {
    type: GET_SINGLE_PRODUCT,
    product,
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.get(`/api/products/${id}`);
      dispatch(_getSingleProduct(product.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
