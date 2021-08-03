import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProduct } from '../store/singleProduct';

export class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div className="single-food">
        <img
          src={this.props.product.imgUrl}
          style={{ height: '400px', width: '400px', justifyContent: 'center' }}
        />
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.description}</p>
        <p>Price: ${this.props.product.price}</p>
        <p>Quantity: {this.props.product.quantity}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(getSingleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
