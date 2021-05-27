import React, { useState } from 'react';
import { Stepper } from '../Stepper';
import { makeStyles } from "@material-ui/core";
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';

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

    const [activeStep, setActiveStep] = useState(4);
    const [Activity, setActivity] = useState({
        toSend: {
            Title: '',
            Description: '',
            Workdays: [],
            Location: null,
            Quiz: {
                Title: '',
                Description: '',
                Questions: []
            }
        },
        Config: {
            Workdays: []
        }
    });

    const handleNext = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const Steps = [
        "Describe tu actividad",
        "Seleciona los horarios",
        "Selecciona la ubicacion",
        "Test",
        "Formacion e Induccion"
    ];

    const StepContent = [
        <Step1
            handleNext={handleNext}
            data={{ Title: Activity.toSend.Title, Description: Activity.toSend.Description }}
            setData={setActivity}
        />,
        <Step2
            handleNext={handleNext}
            handleBack={handleBack}
            data={{ Workdays: Activity.toSend.Workdays, arrWork: Activity.Config.Workdays }}
            setData={setActivity}
        />,
        <Step3
            handleNext={handleNext}
            handleBack={handleBack}
            data={Activity.toSend.Location}
            setData={setActivity}
        />,
        <Step4
            handleBack={handleBack}
            data={Activity.toSend.Quiz}
            setData={setActivity}
        />,
        <Step5 />
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