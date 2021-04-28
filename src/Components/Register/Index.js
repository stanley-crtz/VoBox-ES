import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2';
import Firebase from '../../Class/Firebase';
import { Stepper } from '../Stepper';
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
}))


const Index = () => {

    const classes = useStyles();

    const history = useHistory();

    const [activeStep, setActiveStep] = React.useState(0);
    const [informationRegister, setInformationRegister] = React.useState({
        information: {
            uid: '',
            TypeAcount: '',
            Email: ''
        },
        method: ''
    })

    const pushNewUser = (e) => {

        Swal.fire({
            title: `Creando el usuario ${e.Name}...`,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }

        })

        const info = { ...informationRegister, information: { ...informationRegister.information, ...e } };

        setInformationRegister(info)

        Firebase.insertUser(info.information)
            .then(resp => {
                Firebase.updateUser({
                    displayName: info.information.Name,
                    photoURL: info.information.Photo
                })
                    .then(result => {
                        Swal.close();
                        history.push('/');
                    });
            })
            .catch(err => alert('error'));

    }

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const Steps = ['Tipo de cuenta', 'Tipo de inicio de sesión', 'Validación de Correo', 'Cuentanos sobre ti'];

    const StepContent = [
        <Step1
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={Steps}
            classes={classes}
            setInformationRegister={setInformationRegister}
            value={informationRegister.information.TypeAcount}
        />,
        <Step2
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={Steps}
            classes={classes}
            setInformationRegister={setInformationRegister}
        />,
        <Step3
            handleNext={handleNext}
            informationRegister={informationRegister}
            setInformationRegister={setInformationRegister}
        />,
        <Step4
            sendingInformation={pushNewUser}
        />
    ];

    return (
        <>
            <Stepper
                steps={Steps}
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
                StepContents={StepContent}
            />
        </>
    )
}

export default Index;