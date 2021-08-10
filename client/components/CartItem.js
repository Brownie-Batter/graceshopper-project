import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 750,
    maxWidth: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
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
    textAlign: 'center',
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
    category,
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
        category,
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
      if (userQuantity < 25) {
        setUserQuantity(userQuantity + 1);
        let product = {
          name,
          productId,
          quantity: userQuantity + 1,
          price,
          category,
        };
        localStorage.setItem(productId, JSON.stringify(product));
      }
    }
  };

  const handleRemoveClick = () => {
    if (isLoggedIn) {
      if (userQuantity > 1) {
        setUserQuantity(userQuantity - 1);
        editQuantity(userId, productId, userQuantity - 1);
      }
    } else {
      if (userQuantity > 1) {
        setUserQuantity(userQuantity - 1);
        let product = {
          name,
          productId,
          quantity: userQuantity - 1,
          price,
          category,
        };
        localStorage.setItem(productId, JSON.stringify(product));
      }
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom>
            {category.category_name}
          </Typography>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            Price: ${price}
          </Typography>
        </div>
      </CardContent>
      <div style={{ display: 'flex' }}>
        <FormControl className={classes.formControl}>
          <div style={{ display: 'flex' }}>
            <TextField
              label="Quantity"
              variant="outlined"
              value={userQuantity}
              onChange={handleChange}
              style={{
                width: '50px',
                marginRight: '30px',
                marginTop: '5px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Button
                variant="outlined"
                color="primary"
                aria-label="add"
                size="small"
                onClick={handleAddClick}>
                <AddIcon />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                aria-label="remove"
                size="small"
                onClick={handleRemoveClick}>
                <RemoveIcon />
              </Button>
            </div>
          </div>
        </FormControl>
        <CardActions>
          {isLoggedIn ? (
            <IconButton onClick={() => deleteProduct(userId, productId)}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              onClick={() => handleVisitorDelete(productId)}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          )}
        </CardActions>
      </div>
    </Card>
  );
}
