import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  } = props;
  const [userQuantity, setUserQuantity] = useState(quantity);

  const classes = useStyles();

  const handleChange = (e) => {
    setUserQuantity(e.target.value);
    editQuantity(userId, productId, e.target.value);
    console.log('handle change');
  };
  const handleAddClick = () => {
    setUserQuantity(userQuantity + 1);
    editQuantity(userId, productId, userQuantity + 1);
  };
  const handleRemoveClick = () => {
    setUserQuantity(userQuantity - 1);
    editQuantity(userId, productId, userQuantity - 1);
  };
  const createChildren = (num) => {
    let result = [];

    while (num > 0) {
      result.push(num);
      num--;
    }
    return result;
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
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
              onClick={handleAddClick}
            >
              <AddIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="remove"
              size="small"
              onClick={handleRemoveClick}
            >
              <RemoveIcon />
            </Fab>
          </div>

          {/* <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userQuantity}
            onChange={handleChange}
          >
            {createChildren(quantity).map((val) => {
              return (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              );
            })}
          </Select> */}
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(userId, productId)}>
          Delete from Cart
        </Button>
      </CardActions>
    </Card>
  );
}
