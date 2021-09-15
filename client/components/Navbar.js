import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { emptyCart, setVisCart } from '../store/cart';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: 'white',
  },
}));

const Navbar = ({ handleClick, isLoggedIn, user, userId, cart, visCart }) => {
  const classes = useStyles();
  const [visitorCart, setVisitorCart] = useState([]);
  const grabCartItems = () => {
    let cart = [];
    for (const [key, product] of Object.entries(localStorage)) {
      let newKey = parseInt(key);
      if (!isNaN(newKey)) {
        // console.log(newKey, JSON.parse(product));
        cart.push(JSON.parse(product));
      }
    }
    setVisitorCart(cart);
    visCart(cart.length);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      grabCartItems();
    }
  }, []);

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 5,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  return (
    <div id="navbar">
      <nav>
        {isLoggedIn ? (
          <div className={classes.root}>
            <AppBar id="mainNav" position="static">
              <Toolbar
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="leftNavBar">
                  <Link to="/">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Home
                      </Button>
                    </Typography>
                  </Link>
                  <Link to="/products">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Food
                      </Button>
                    </Typography>
                  </Link>
                  <Link to="/aboutus">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        About Us
                      </Button>
                    </Typography>
                  </Link>
                </div>
                <div id="loggedrightNavBar">
                  <Button color="primary" className={classes.button}>
                    Welcome {user}{' '}
                  </Button>
                  <Button
                    color="primary"
                    href="#"
                    onClick={handleClick}
                    className={classes.button}>
                    Logout
                  </Button>
                  <Link id="loggedcart" to={`/users/${userId}/cart`}>
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={cart.userCart.length}
                        color="secondary">
                        <ShoppingCartIcon size="large" />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        ) : (
          <div className={classes.root}>
            <AppBar id="mainNav" position="static">
              <Toolbar
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="leftNavBar">
                  <Link to="/">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Home
                      </Button>
                    </Typography>
                  </Link>
                  <Link to="/products">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Food
                      </Button>
                    </Typography>
                  </Link>
                  <Link to="/aboutus">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        About Us
                      </Button>
                    </Typography>
                  </Link>
                </div>
                <div id="rightNavBar">
                  <Link to="/login">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Login
                      </Button>
                    </Typography>
                  </Link>
                  <Link to="/signup">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary" className={classes.button}>
                        Sign Up
                      </Button>
                    </Typography>
                  </Link>
                  <Link to={`/visitor/cart`}>
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={cart.visitorCart}
                        color="secondary">
                        <ShoppingCartIcon size="large" />
                      </StyledBadge>
                    </IconButton>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
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
    user: state.auth.first_name,
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(emptyCart());
      dispatch(logout());
      dispatch(setVisCart(0));
    },
    visCart: (cart) => dispatch(setVisCart(cart)),
  };
};

export default connect(mapState, mapDispatch)(Navbar);
