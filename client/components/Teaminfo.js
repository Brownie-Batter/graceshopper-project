import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 275,
  },
});

export default function Teaminfo() {
  const classes = useStyles();

  return (
    <div id="teaminfo">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://static01.nyt.com/images/2020/08/19/dining/17chinesechef1/merlin_173956071_39958a0f-3b8c-4528-af40-f7bffc56d694-mobileMasterAt3x.jpg"
            title="Sung"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Sung
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Co-founder & CEO
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sung is the Founder and Chief Executive Officer at Ray's Kitchen.
              In 2011, Sung, alongside co-founders Mike and Andy, moved to New
              York to start a company together. After looking at different
              business models and industries, Sung said they quickly set their
              eyes on the grocery space.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://thetoptenchefs.com/wp/wp-content/uploads/2017/04/chef-Yuj-Wakiya-top-10-chefs-in-asia.jpg"
            title="Mike"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Mike
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Co-founder & CTO
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              As Co-Founder, Co-Chair and Co-CEO, Mike is the visionary behind
              Ray's Kitchen. His business insights have propelled Ray's Kitchen
              to become the world leader in food delivery, while his passion for
              continuous learning inspires a culture where associates are
              dedicated to developing their full potential. Mikes’s business
              acumen has been recognized by Forbes magazine, the Los Angeles
              Business Journal and the Asia Society of Southern California. He
              was conferred an honorary Doctor of Humane Letters by California
              State Polytechnic University, Pomona and is a member of the
              International Advisory Board for the William F. Harrah College of
              Hospitality at the University of Nevada, Las Vegas. Under Mikes’s
              leadership, Mike was named one of America’s best employers by
              Forbes and ranked the number one Asian quick-service concept by
              QSR. Additionally, he along with Ray's Kitchen Group Co-Chairman
              and Co-CEO Sung, have been inducted into the National Restaurant
              Association’s Hall of Fame.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDInNIuZy6dcq89T7d_hTzULeW3JlMMLW3eA&usqp=CAU"
            title="Chris"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Chris
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Food Connoisseur
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Eating out and being environmentally-conscious don’t have to
              contradict each other, Chris insists. The former chef and food
              writer is all about promoting seasonal, ethically produced food
              through his work. He enjoys critiquing aspects of food production,
              using both print and broadcast journalism to illustrate meals
              which can reduce harm to the planet. Chris places emphasis with
              restaurants that use “plant-based creativity”, as well as running
              his own chain, the River Cottage Canteens. He previously stated he
              would much rather “muddle my chickpeas, kidney beans, walnuts and
              quinoa with fresh leaves, crunchy roots and sun-ripened fruits”
              than contribute to the meat industry. His viewpoint has sparked TV
              campaigns such as Chris’s Fish Fight, Chris’s War on Waste and
              Britain’s Fat Fight. But his message is not without controversy,
              and has sparked other critics to pass judgement. Jay Rayner once
              slammed his “high-price” restaurant as only for those who can
              “afford their ethics”.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://previews.123rf.com/images/upslim/upslim1603/upslim160300020/53314094-asian-chef-sgowing-plate-with-sushi-and-ok-focus-on-sushi-.jpg"
            title="Sung"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Andy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Culinarian
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Chef Andy has remained an active international food ambassador
              throughout his career. He roams the world representing different
              commercial and social concerns to entertain and educate the
              public, sharing with them his unique humor and strong passion for
              cooking.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              "Andy Can Cook, So Can You!" has always been the motto of Andy,
              chef extraordinaire and popular television host recognized from
              Shanghai to San Francisco. Promoting Chinese cuisine, making it
              easy for the cook and tasty for the guests has been his life-long
              mission. Born in Guangzhou in Southern China, Chef Andy is
              technically a second generation 'culinarian,' who was first
              inspired by his mother in the tiny kitchen of their family
              restaurant.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
