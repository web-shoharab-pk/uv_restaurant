// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import slider1 from './../../../resources/image/slider1.webp';
import slider2 from './../../../resources/image/slider2.webp';
import slider3 from './../../../resources/image/slider3.webp';
import NavBar from './NavBar';
import style from './style.module.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {

        imgPath: slider1,
        label: " Granny is a restaurant, bar and coffee roastery located on Egypt. We have awesome recipes and the most talented chefs in town!",
        h4: "We Don't Just Cook",
        h2: "We Make Delicious Cook",
        buttonContent: "Reserve Now"
    },
    { 
        imgPath: slider2,
        label: "Granny is a restaurant, bar and coffee roastery located on Egypt. We have awesome recipes and the most talented chefs in town!",
        h4: "Made With Love",
        h2: "Fresh Ingredient, Tasty Meals",
        buttonContent: "Reserve Now"
    },
    { 
        imgPath: slider3,
        label: " Granny is a restaurant, bar and coffee roastery located on Egypt. We have awesome recipes and the most talented chefs in town!",
        h4: "Creative & Talanted Chefs",
        h2: "Hot And Ready To Serve",
        buttonContent: "Reserve Now"
    }
];

const Header = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const maxSteps = images.length;

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    const handleStepChange = (step) => {
        setTimeout(() => {
            setActiveStep(step);
        }, 5000); 
    };

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className={style.header_hero}>
                <Box
                    mt={2}
                     
                    fullWidth>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                            
                        }}
                    >

                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents 
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box style={{ position: 'relative' }}>
                                        <Box
                                            style={{ backgroundImg: step.imgPath }}
                                            fullWidth
                                            component="img"
                                            sx={{
                                                height: '80vh',
                                                display: 'block',
                                                maxWidth: '100%',
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />

                                        <div className={style.header_content}>
                                            <div>
                                            <h4 className={style.header_h4}>{step.h4}</h4>
                                            <h2 className={style.header_h2}>{step.h2}</h2>
                                            <Typography className={style.header_label}>{step.label}</Typography> 
                                            <Link to="/reservation">
                                            <button  className={style.header_btn}>{step.buttonContent}</button>
                                            </Link>
                                            </div>
                                        </div>
                                    </Box>
                                ) : null}

                            </div>

                        ))}
                    </AutoPlaySwipeableViews>
                    {/* <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                            </Button>
                        }
                    /> */}
                </Box>
            </div>
        </div>
    );
};

export default Header;