import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleProduct } from '../store/singleProduct';

export class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <img src={this.props.imgUrl} />
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.desc}</p>
        <p>{this.props.product.price}</p>
        <p>{this.props.product.stock}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(singleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
