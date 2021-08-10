import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 300,
    margin: 20,
  },
  media: {
    height: 140,
  },
  paper: {
    position: 'absolute',
    width: 800,
    height: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default function Product(props) {
  const {
    name,
    imgUrl,
    category_name,
    price,
    id,
    userId,
    addToCart,
    description,
    isLoggedIn,
    cart,
  } = props;

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVisitorClick = () => {
    let item = localStorage.getItem(id);
    if (!item) {
      let product = {
        name,
        price,
        quantity: 1,
        productId: id,
        category: { category_name: category_name },
      };
      localStorage.setItem(id, JSON.stringify(product));
      toast.success(`${name} added to cart`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${name} is already in your cart!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleAdd = (userId, id, price, cart) => {
    const inCart = cart.filter((item) => {
      return item.id === id;
    });
    console.log(inCart);
    if (inCart.length > 0) {
      toast.error(`${name} is already in your cart!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(`${name} added to cart`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      addToCart(userId, id, price);
      console.log('added to cart');
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={imgUrl} style={{ maxWidth: '750px', maxHeight: '400px' }} />
      <h2>{name}</h2>
      <h3>{category_name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>

      {isLoggedIn ? (
        <Button
          onClick={() => {
            handleAdd(userId, id, price, cart);
            handleClose();
          }}
          startIcon={<AddShoppingCartIcon />}
          size="large"
          color="primary"
          variant="contained">
          Add to Cart
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleVisitorClick();
            handleClose();
          }}>
          Add to Cart
        </Button>
      )}
    </div>
  );
  return (
    <Card className={classes.root} key={id}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia className={classes.media} image={imgUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p" color="error">
            {category_name.slice(0, 1).toUpperCase() + category_name.slice(1)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isLoggedIn ? (
          <Button
            onClick={() => handleAdd(userId, id, price, cart)}
            size="small"
            color="primary">
            Add to Cart
          </Button>
        ) : (
          <Button onClick={handleVisitorClick} size="small" color="primary">
            Add to Cart
          </Button>
        )}
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </Card>
  );
}
