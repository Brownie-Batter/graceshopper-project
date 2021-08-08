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

export default function Product(props) {
  const { name, imgUrl, category_name, price, id } = props;
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: 300,
      margin: 20,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
