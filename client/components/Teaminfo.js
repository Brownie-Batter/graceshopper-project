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
    margin: 40,
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
            image="https://media-exp1.licdn.com/dms/image/C4D03AQF0QznhX53B0Q/profile-displayphoto-shrink_800_800/0/1604176192847?e=1637193600&v=beta&t=xfK_1KRgH5mewyNOB7Aj_UFKoxT8seh_wGohJowKrXY"
            title="Sung"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Sung Paik
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
            image="https://media-exp1.licdn.com/dms/image/C4E03AQG9QcVNCdSynQ/profile-displayphoto-shrink_400_400/0/1517417740603?e=1637193600&v=beta&t=bWFVzuYkVBeSJYNjbCb-VSFR8mIgNZ1PW9AMJAQ3p-A"
            title="Mike Alessi"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Mike Alessi
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
            image="https://media-exp1.licdn.com/dms/image/C4E03AQHDnha5Mg-UsQ/profile-displayphoto-shrink_800_800/0/1516932107591?e=1637193600&v=beta&t=PjX5keS1eaa3VNvd5Gr9qKq0yd6Wpl0v0Is6QJfAdmE"
            title="Chris Bolosan"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Chris Bolosan
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
            image="https://media-exp1.licdn.com/dms/image/C4D03AQGQXUaT96gfZQ/profile-displayphoto-shrink_200_200/0/1600208082769?e=1636588800&v=beta&t=yw16kBOF6D9ulOeKqfo0ixJ6HGmx0iObT_A6kFVEs1A"
            title=""
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Andy Moy
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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/meredith.png"
            title="Meredith"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Meredith
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lead Engineer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              When I started working at Ray's Kitchen, fresh out of college,
              coding was my life. Writing code was the easiest way to build any
              cool thing that my brain could imagine. When I thought about what
              I’d want to do for the rest of my life I thought that I just
              wanted to keep coding. On a daily basis, I usually spend time on
              learning, reading books and watching documentaries. I love
              watching movies.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/tori.jpeg"
            title="Tori"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              Tori
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Project Lead Consultant
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I have collaborated on a bunch of projects. My first month at
              Ray's Kitchen I got involved with the creation of a new checkout
              page; it was an amazing way to get to know the codebase of the
              company and work side by side with great people, although for a
              new joiner it was a bit scary to handle one of the most important
              apps in the company. But it was an amazing challenge!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
