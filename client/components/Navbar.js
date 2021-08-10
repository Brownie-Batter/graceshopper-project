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
}));

const Navbar = ({ handleClick, isLoggedIn, userId, cart, visCart }) => {
  const [visitorCart, setVisitorCart] = useState([]);
  const classes = useStyles();

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
      console.log(visitorCart);
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
      {/* <h1>Ray's Kitchen</h1> */}
      <nav>
        {isLoggedIn ? (
          <div className={classes.root}>
            <AppBar id="mainNav" position="static">
              <Toolbar>
                <div id="loggedleftNavBar">
                  <Link to="/">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Home</Button>
                    </Typography>
                  </Link>
                  <Link to="/products">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Food</Button>
                    </Typography>
                  </Link>
                  <Link to="/aboutus">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">About Us</Button>
                    </Typography>
                  </Link>
                </div>
                <div id="loggedrightNavBar">
                  <Typography variant="h6" className={classes.title}>
                    <Button color="primary" href="#" onClick={handleClick}>
                      Logout
                    </Button>
                  </Typography>
                </div>

                <Link id="loggedcart" to={`/users/${userId}/cart`}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cart.length} color="secondary">
                      <ShoppingCartIcon size="large" />
                    </StyledBadge>
                  </IconButton>
                  {/* <ShoppingCartIcon color="primary"></ShoppingCartIcon> */}
                </Link>
              </Toolbar>
            </AppBar>
          </div>
        ) : (
          // <div >
          //   {/* The navbar will show these links after you log in */}
          //   <Link to="/">Home</Link>
          //   <Link to="/products">Food</Link>
          //   <Link to="/aboutus">About Us</Link>
          //   <a href="#" onClick={handleClick}>
          //     Logout
          //   </a>
          //   <Link to={`/users/${userId}/cart`}>
          //     <ShoppingCartIcon></ShoppingCartIcon>
          //   </Link>
          // </div>
          <div className={classes.root}>
            <AppBar id="mainNav" position="static">
              <Toolbar>
                <div id="leftNavBar">
                  <Link to="/">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Home</Button>
                    </Typography>
                  </Link>
                  <Link to="/products">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Food</Button>
                    </Typography>
                  </Link>
                  <Link to="/aboutus">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">About Us</Button>
                    </Typography>
                  </Link>
                </div>
                <div id="rightNavBar">
                  <Link to="/login">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Login</Button>
                    </Typography>
                  </Link>
                  <Link to="/signup">
                    <Typography variant="h6" className={classes.title}>
                      <Button color="primary">Sign Up</Button>
                    </Typography>
                  </Link>
                  <Link to={`/visitor/cart`}>
                    <IconButton aria-label="cart">
                      <StyledBadge
                        badgeContent={cart.visCart}
                        color="secondary"
                      >
                        <ShoppingCartIcon size="large" />
                      </StyledBadge>
                    </IconButton>
                    {/* <ShoppingCartIcon color="primary"></ShoppingCartIcon> */}
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          // <div>
          //   {/* The navbar will show these links before you log in */}
          //   <Link to="/">Home</Link>
          //   <Link to="/products">Food</Link>
          //   <Link to="/aboutus">About Us</Link>
          //   <Link to="/login">Login</Link>
          //   <Link to="/signup">Sign Up</Link>
          //   <Link to={`/visitor/cart`}>
          //     <ShoppingCartIcon></ShoppingCartIcon>
          //   </Link>
          // </div>
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
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(emptyCart());
      dispatch(logout());
    },
    visCart: (cart) => dispatch(setVisCart(cart)),
  };
};

export default connect(mapState, mapDispatch)(Navbar);
