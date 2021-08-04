import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import brisket from '../../public/images/brisket.jpeg';

  //dummy data usercart
    //user is signed up 
    //:userid/cart/
    const dummyCart = 
        {product: 'brisket',
        // pImg: brisket,
        quantity:1,
        price:10,
    }
    

//need to pull product into the card after is added, pull item quantity

//pull userid
export default class Cart extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            product : '',
            quantity : 0,
            price: 0,
        }
    }
    render () {
        // console.log('&&&&',dummyCart)
        return(
        <div>
        <Card style={{ width: "18rem" }}>
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
            <Button
                >
                 Proceed to Checkout
                </Button>
              <Card.Text>
                <Button>Delete Cart</Button>
              </Card.Text>
              <Card.Text>
                  
              </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
        )}
}
