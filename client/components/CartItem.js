import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CartItem(props) {
  const {
    name,
    quantity,
    price,
    productId,
    userId,
    deleteProduct,
    editQuantity,
    isLoggedIn,
    handleVisitorDelete,
    inventory,
  } = props;
  const [userQuantity, setUserQuantity] = useState(quantity);

  const classes = useStyles();

  const handleChange = (e) => {
    if (isLoggedIn) {
      if (e.target.value > inventory) {
        setUserQuantity(inventory);
        editQuantity(userId, productId, inventory);
      } else if (e.target.value < 1) {
        setUserQuantity(1);
        editQuantity(userId, productId, 1);
      } else {
        setUserQuantity(e.target.value);
        editQuantity(userId, productId, e.target.value);
      }
    } else {
      setUserQuantity(e.target.value);
      let product = {
        name,
        productId,
        quantity: e.target.value,
        price,
      };
      localStorage.setItem(productId, JSON.stringify(product));
    }
  };

  const handleAddClick = () => {
    if (isLoggedIn) {
      if (userQuantity < inventory) {
        setUserQuantity(userQuantity + 1);
        editQuantity(userId, productId, userQuantity + 1);
      }
    } else {
      setUserQuantity(userQuantity + 1);
      let product = {
        name,
        productId,
        quantity: userQuantity + 1,
        price,
      };
      localStorage.setItem(productId, JSON.stringify(product));
    }
  };

  const handleRemoveClick = () => {
    if (isLoggedIn) {
      if (userQuantity > 1) {
        setUserQuantity(userQuantity - 1);
        editQuantity(userId, productId, userQuantity - 1);
      }
    } else {
      setUserQuantity(userQuantity - 1);
      let product = {
        name,
        productId,
        quantity: userQuantity - 1,
        price,
      };
      localStorage.setItem(productId, JSON.stringify(product));
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          Price: ${price}
        </Typography>
        <FormControl className={classes.formControl}>
          <TextField
            label="Quantity"
            variant="outlined"
            value={userQuantity}
            onChange={handleChange}
            style={{ width: '50px' }}
          />
          <div style={{ display: 'flex' }}>
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={handleAddClick}>
              <AddIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="remove"
              size="small"
              onClick={handleRemoveClick}>
              <RemoveIcon />
            </Fab>
          </div>
        </FormControl>
      </CardContent>
      <CardActions>
        {isLoggedIn ? (
          <Button size="small" onClick={() => deleteProduct(userId, productId)}>
            Delete from Cart
          </Button>
        ) : (
          <Button size="small" onClick={() => handleVisitorDelete(productId)}>
            Delete from Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
