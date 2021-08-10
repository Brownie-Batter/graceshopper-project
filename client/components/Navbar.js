import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { emptyCart } from '../store/cart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

const Navbar = ({ handleClick, isLoggedIn, user, userId }) => {
  const classes = useStyles();

  return (
    console.log('imauser', user),
    (
      <div id="navbar">
        <nav>
          {isLoggedIn ? (
            <div className={classes.root}>
              <AppBar id="mainNav" position="static">
                <Toolbar
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
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

                  <div id="loggedrightNavBar">
                    <Button color="primary">Welcome {user} </Button>
                    <Button color="primary" href="#" onClick={handleClick}>
                      Logout
                    </Button>

                    <Link id="loggedcart" to={`/users/${userId}/cart`}>
                      <ShoppingCartIcon color="primary"></ShoppingCartIcon>
                    </Link>
                  </div>
                </Toolbar>
              </AppBar>
            </div>
          ) : (
            <div className={classes.root}>
              <AppBar id="mainNav" position="static">
                <Toolbar
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
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
                      <ShoppingCartIcon color="primary"></ShoppingCartIcon>
                    </Link>
                  </div>
                </Toolbar>
              </AppBar>
            </div>
          )}
        </nav>
        <hr />
      </div>
    )
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
