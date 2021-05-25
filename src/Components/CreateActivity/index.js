import React, { useState } from 'react';
import { Stepper } from '../Stepper';
import { makeStyles } from "@material-ui/core";
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
}));

const Index = () => {

    useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    // const handleBack = () =>
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const Steps = [
        "Describe tu actividad",
        "Seleciona los horarios",
        "Selecciona la ubicacion",
        "Test",
    ];

    const StepContent = [
        <Step1
            handleNext={handleNext}
        />,
        <Step2
            handleNext={handleNext}
        />,
        <Step3
            handleNext={handleNext}
        />,
        <Step4 />
    ]

    return (
        <>
            <Stepper
                steps={Steps}
                activeStep={activeStep}
                StepContents={StepContent}
            />
        </>
    )
}

export default Index;