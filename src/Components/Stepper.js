import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Stepp from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    }
}));

export const Stepper = ({ steps, StepContents, activeStep }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepp activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {StepContents[index]}
                        </StepContent>
                    </Step>
                ))}
            </Stepp>
        </div>
    );
}

Stepper.propTypes = {
    steps: PropTypes.array.isRequired,
    StepContents: PropTypes.array.isRequired,
    activeStep: PropTypes.number.isRequired
}