import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
//Imports for AllProducts

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carousel = [
  {
    label: 'Prepped by Professional  s',
    imgPath:
      'https://img.freepik.com/free-photo/portrait-asian-woman-mixing-salad-kitchen_23-2148076172.jpg?size=626&ext=jpg',
  },
  {
    label: '',
    imgPath:
      'https://previews.123rf.com/images/dolgachov/dolgachov1902/dolgachov190201876/117027158-cooking-profession-and-people-concept-happy-male-indian-chef-in-toque-with-cookbook-over-kitchen-bac.jpg',
  },
  {
    label: '',
    imgPath:
      'https://www.recipetineats.com/wp-content/uploads/2014/08/15-Minute-Asian-Meals-Cover-Photo.jpg',
  },
  {
    label: 'Easily order from your mobile device',
    imgPath:
      'https://cdn.shopify.com/s/files/1/1835/6931/files/Check_if_we_deliver_to_you_photo_2048x.jpg?v=1580318142',
  },
  {
    label: '',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzY1BjGchboP-yt1J8i7RAMUzSAyJeWNzW9g&usqp=CAU',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  productRoot: {
    maxWidth: 345,
    width: 300,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = carousel.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <div className={classes.root}>
        <Link to="/raysKitchen">
          <Paper square elevation={0} className={classes.header}>
            <Typography>{carousel[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {carousel.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
