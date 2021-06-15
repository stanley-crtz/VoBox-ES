import React, { useState } from 'react';
import { Stepper } from '../Stepper';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Step5 } from './Step5';
import Swal from 'sweetalert2';
import Firebase from '../../Class/Firebase';
import { ConnectToRedux } from '../ConnectToRedux';
import { useHistory } from 'react-router';
import moment from 'moment';
moment().locale('es')

const Index = ConnectToRedux(({ User }) => {

    const history = useHistory();

    const [activeStep, setActiveStep] = useState(0);
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
            },
            Induccion: ''
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

    const uploadActivity = (induccion) => {

        const { toSend } = Activity;

        toSend.Induccion = induccion;

        Firebase.__post('Activitys', {...toSend, companyInformation: User, publish: moment().format()})
            .then(resp => {
                Swal.close();
                history.push('/_Inicio');
            })
            .catch(err => console.error(err))

        
    }

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
            handleNext={handleNext}
        />,
        <Step5
            handleBack={handleBack}
            setData={setActivity}
            submit={uploadActivity}
        />
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
})

export default Index;