//Tableofingredient
//MethodOfPreparation
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
      root: {
            width: '100%',

      },
      button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
      },
      actionsContainer: {
            marginBottom: theme.spacing(2),
      },
      resetContainer: {
            padding: theme.spacing(3),
      },
}));


export default function MethodOfPreparation({ Tableofingredient }) {
      const classes = useStyles();
      const [activeStep, setActiveStep] = React.useState(0);
      const steps = getSteps();
      //stepper realisation
      function getSteps() {
            return Tableofingredient;
      }


      //end of stepper function

      const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleReset = () => {
            setActiveStep(0);
      };

      return (

            <div className={classes.root} style={{ display: "flex", justifyContent: "center", backgroundColor: "gray" }} >

                  <div>
                        <h1>Follow The ingredient</h1>
                        <Stepper activeStep={activeStep} orientation="vertical">
                              {steps.map((label, index) => (
                                    <Step key={label}>
                                          <StepLabel>{label}</StepLabel>
                                          <StepContent>

                                                <div className={classes.actionsContainer}>
                                                      <div>
                                                            <Button
                                                                  disabled={activeStep === 0}
                                                                  onClick={handleBack}
                                                                  className={classes.button}

                                                            >
                                                                  Back
                                                      </Button>
                                                            <Button

                                                                  variant="contained"
                                                                  color="secondary"

                                                                  onClick={handleNext}
                                                                  className={classes.button}
                                                            >
                                                                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                            </Button>
                                                      </div>
                                                </div>
                                          </StepContent>
                                    </Step>
                              ))}
                        </Stepper>
                        {activeStep === steps.length && (
                              <Paper square elevation={0} className={classes.resetContainer}>
                                    <Typography>All steps completed - you&apos;re finished</Typography>
                                    <Button onClick={handleReset} className={classes.button}>
                                          Reset
          </Button>
                              </Paper>
                        )}

                  </div>
            </div>

      );
}