import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { getAllProducts } from '../store/allProducts';
import { addProductToCart } from '../store/cart';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * ul': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AllProducts(props) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const classes = useStyles();
  const { userId, addToCart, getProducts, totalPages, products, categories } =
    props;

  useEffect(() => {
    fetchProducts();
  }, [page, filter]);

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  const handleCategoryChange = (e) => {
    setFilter(e.target.value);
  };

  const getRequestParams = (page, filter) => {
    let params = {};

    if (filter) {
      params['filter'] = filter;
    }

    if (page) {
      params['page'] = page - 1;
    }

    return params;
  };

  const fetchProducts = () => {
    const params = getRequestParams(page, filter);

    return getProducts(params);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ALL GOOD FOOD</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            onChange={handleCategoryChange}>
            <MenuItem value="all">All</MenuItem>
            {categories &&
              categories.map(({ id, category_name }) => (
                <MenuItem key={id} value={category_name}>
                  {category_name[0].toUpperCase() + category_name.slice(1)}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.root}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="primary"
          onChange={handlePageChange}
        />
      </div>
      <div className="food-container">
        {products.length ? (
          products.map(
            ({
              id,
              name,
              price,
              imgUrl,
              description,
              category: { category_name },
            }) => (
              <Product
                key={id}
                id={id}
                name={name}
                price={price}
                imgUrl={imgUrl}
                category_name={category_name}
                userId={userId}
                addToCart={addToCart}
                description={description}
              />
            )
          )
        ) : (
          <div>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts.products,
    categories: state.allProducts.categories,
    totalPages: state.allProducts.totalPages,
    userId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: (params) => dispatch(getAllProducts(params)),
    addToCart: (userId, productId, price) =>
      dispatch(addProductToCart(userId, productId, price)),
  };
};

export default connect(mapStateToProps, mapDispatch)(AllProducts);
