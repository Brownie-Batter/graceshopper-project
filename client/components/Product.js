import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import { FullscreenExit } from '@material-ui/icons';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
  } = props;

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
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img src={imgUrl} style={{ maxWidth: '750px', maxHeight: '475px' }} />
      <h2>{name}</h2>
      <h3>{category_name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Button
        onClick={() => {
          addToCart(userId, id, price);
          handleClose();
        }}
        startIcon={<AddShoppingCartIcon />}
        size="large"
        color="primary"
        variant="contained"
      >
        Add to Cart
      </Button>
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
        <Button
          onClick={() => addToCart(userId, id, price)}
          size="small"
          color="primary"
        >
          Add to Cart
        </Button>
        <Button size="small" color="primary" onClick={handleOpen}>
          {/* <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}> */}
          Learn More
          {/* </Link> */}
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Card>
  );
}
