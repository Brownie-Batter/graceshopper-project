import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../store/allProducts';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function AllProducts(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: 300,
      marginBottom: 20,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  useEffect(() => {
    props.getProducts();
  }, []);

  return (
    <div className="food-container">
      {props.products.length ? (
        props.products.map(
          ({
            id,
            name,

            price,
            quantity,
            imgUrl,
            category: { category_name },
          }) => {
            return (
              <Card className={classes.root} key={id}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                      {name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="p"
                      color="error">
                      {category_name.slice(0, 1).toUpperCase() +
                        category_name.slice(1)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      Price: ${price}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                  <Button size="small" color="primary">
                    <Link
                      to={`/products/${id}`}
                      style={{ textDecoration: 'none' }}>
                      Learn More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            );
          }
        )
      ) : (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
}
// class AllProducts extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.props.getProducts();
//   }
//   render() {
//     const classes = useStyles();
//     return (
//       <div>
//         {this.props.products.length ? (
//           this.props.products.map(
//             ({ id, name, description, price, quantity, imgUrl }) => {
//               return (
//                 <Card className={classes.root} key={id}>
//                   <CardActionArea>
//                     <CardMedia
//                       className={classes.media}
//                       image={imgUrl}
//                       title={name}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="h2">
//                         {name}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="textSecondary"
//                         component="p">
//                         {description}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="textSecondary"
//                         component="p">
//                         Price: ${price}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="textSecondary"
//                         component="p">
//                         Quantity: {quantity}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       Add to Cart
//                     </Button>
//                     <Button size="small" color="primary">
//                       Learn More
//                     </Button>
//                   </CardActions>
//                 </Card>
//               );
//             }
//           )
//         ) : (
//           <div>
//             <h3>Loading...</h3>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return { products: state.allProducts };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatch)(AllProducts);
