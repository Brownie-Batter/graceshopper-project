import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Signup } from './components/AuthForm';
import { Login } from './components/AuthFormLogin';
import AllProducts from './components/AllProducts';
import { me } from './store';
import Cart from './components/Cart';
import VisitorCart from './components/VisitorCart';
import LandingPage from './components/LandingPage';
import Teaminfo from './components/Teaminfo';
import Checkout from './components/Checkout';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={AllProducts} />
            <Route path="/users/:id/cart" component={Cart} />
            <Route path="/aboutus" component={Teaminfo} />
            <Route path="/users/:id/checkout" component={Checkout} />
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={AllProducts} />
            <Route path="/aboutus" component={Teaminfo} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/visitor/cart/" component={VisitorCart} />
            <Route path="/visitor/checkout" component={Checkout} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
