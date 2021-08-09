import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { emptyCart } from '../store/cart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = ({ handleClick, isLoggedIn, userId }) => {
  return (
    <div>
      <h1>Brownie Batter Core Food Store</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/">Home</Link>
            <Link to="/products">Food</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to={`/users/${userId}/cart`}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/">Home</Link>
            <Link to="/products">Food</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to={`/visitor/cart`}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(emptyCart());
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
