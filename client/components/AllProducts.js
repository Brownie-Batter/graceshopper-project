import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../store/allProducts';

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        {this.props.products.length ? (
          this.props.products.map((product) => {
            return (
              <div>
                <img src={product.imgUrl} />
                <h3>{product.name}</h3>
                <p>product.description</p>
                <p>product.price</p>
              </div>
            );
          })
        ) : (
          <div>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    );
  }
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
