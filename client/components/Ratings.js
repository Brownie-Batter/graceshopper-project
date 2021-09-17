import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 225,
  },
});

export default function Ratings() {
  const classes = useStyles();

  return (
    <div id="ratingsContainer">
          <div>
      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://ministrytoparents.com/wp-content/uploads/2018/07/Why-Family-Dinners-Still-Matter.jpg"
              title="Mike"
              id="ratings"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
              Mike and Karen
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              “Every night of the week we can have something different. It’s
                like Boop-Boop - You’re done!”
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://ministrytoparents.com/wp-content/uploads/2018/07/Why-Family-Dinners-Still-Matter.jpg"
              title="Mike"
              id="ratings"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6">
                Carter Family
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                “We've really been enjoying the meals and there's such a wide
                selection so that anyone can find something they like. Their
                customer service is also exceptional!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://media.istockphoto.com/photos/female-gay-couple-having-a-romantic-dinner-in-their-kitchen-picture-id524157592?k=6&m=524157592&s=612x612&w=0&h=rWUqMNoQ0nQFIlLL5iJty-4Ror9pREoLgR7esWCTvzQ="
            title="Chris"
            id="ratings"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Amy Lexington
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              “I love the convenience of delivery, not having to plan the meals
              or shop. They are easy to make and delicious to eat”
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://instoredoes.com/wp-content/uploads/2016/04/Happy_customers.jpg"
            title="Sung"
            id="ratings"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
             Jack and Iris
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              “Coming home to Ray's Kitchen… it’s a gift.”
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
