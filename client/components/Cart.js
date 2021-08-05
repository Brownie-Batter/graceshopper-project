import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { fetchCart } from '../store/cart';
// import brisket from '../../public/images/brisket.jpeg';

//dummy data usercart
//user is signed up
//:userid/cart/
const dummyCart = {
  product: 'brisket',
  // pImg: brisket,
  quantity: 1,
  price: 10,
};

//need to pull product into the card after is added, pull item quantity

//pull userid
export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      quantity: 0,
      price: 0,
    };
  }
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    this.props.fetchCart(id);
  }
  render() {
    const cart = this.props.cart;
    console.log(cart);
    return (
      <div>
        {cart.map((product) => {
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
          </Card>;
        })}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>{dummyCart.product}</Card.Title>
            <Card.Text> {dummyCart.quantity}</Card.Text>
            {/* <Form.Group>
              <Form.Label>{dummyCart.quantity}</Form.Label>
              <input
                value={dummyCart.quantity}
                name="Quantity"
                type="number"
                min="1"
                max="100"
              />
            </Form.Group> */}
            <Card.Text> {dummyCart.price}</Card.Text>
            <Button>Proceed to Checkout</Button>
            <Card.Text>
              <Button>Delete Cart</Button>
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
});
const mapDispatch = (dispatch) => ({
  fetchCart: (id) => dispatch(fetchCart(id)),
});

export default connect(mapState, mapDispatch)(Cart);
