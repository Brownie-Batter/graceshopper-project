import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { getAllProducts } from '../store/allProducts';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * ul': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
    },
  },
}));

function AllProducts(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ALL GOOD FOOD</h1>
      <div className={classes.root}>
        <Pagination
          count={Math.floor(props.products.length / 10) + 1}
          variant="outlined"
          color="primary"
        />
      </div>
      <div className="food-container">
        {props.products.length ? (
          props.products.map(
            ({ id, name, price, imgUrl, category: { category_name } }) => (
              <Product
                key={id}
                id={id}
                name={name}
                price={price}
                imgUrl={imgUrl}
                category_name={category_name}
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
  return { products: state.allProducts };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatch)(AllProducts);
