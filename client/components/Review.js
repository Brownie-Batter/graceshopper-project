import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Guest' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function Review(props) {
  const classes = useStyles();
  const { cart } = props;

  const [visitorCart, setVisitorCart] = useState([]);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      setUserCart(cart);
    }
    grabCartItems();
  }, []);
  let localCart = [];
  const grabCartItems = () => {
    for (const [key, product] of Object.entries(localStorage)) {
      let newKey = parseInt(key);
      if (!isNaN(newKey)) {
        console.log(newKey, JSON.parse(product));
        localCart.push(JSON.parse(product));
      }
    }
    setVisitorCart(localCart);
  };

  const totalPrice = () => {
    let total = 0;
    if (userCart.length > 0) {
      payments[1].detail = `${props.userName.first_name} ${props.userName.last_name}`;
      userCart.map(
        ({ orderDetails: { quantity, price } }) => (total += price * quantity)
      );
    } else {
      visitorCart.map((item) => (total += item.price * item.quantity));
    }
    return total;
  };

  return (
    <div>
      {cart.length ? (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Subtotal" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${totalPrice()}`}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Taxes" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${(totalPrice() * 0.088).toFixed(2)}`}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${(totalPrice() * 1.088).toFixed(2)}`}
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                {payments.map((payment) => (
                  <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Subtotal" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${totalPrice()}`}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Taxes" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${(totalPrice() * 0.088).toFixed(2)}`}
              </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {`$${(totalPrice() * 1.088).toFixed(2)}`}
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                {payments.map((payment) => (
                  <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
}

const mapState = (state) => ({
  cart: state.cart.userCart,
  isLoggedIn: !!state.auth.id,
  userId: state.auth.id,
  userName: state.auth,
});

export default connect(mapState)(Review);
