import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import Firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import { Config } from '../../Config';
// import { Line } from '../Line';
import { InputPopover } from '../InputPopover';
import Swal from 'sweetalert2';
import FirebaseMethods from '../../Class/Firebase'

export const Step3 = ({ handleNext, handleBack, activeStep, steps, classes, setInformationRegister }) => {

    const [user, setUser] = useState({
        Email: '',
        Password: ''
    })

    const [validation, setValidation] = useState({
        emailTest: {
            state: null,
            message: 'Dirección de correo no valido'
        },
        Password: {
            lenghtTest: {
                state: null,
                message: 'Debe contener un minimo de 6 y un maximo de 64 caracteres'
            },
            lowercaseTest: {
                state: null,
                message: 'Debe contener por lo menos una minuscula'
            },
            uppercaseTest: {
                state: null,
                message: 'Debe contener por lo menos una mayuscula'
            },
            numbersTest: {
                state: null,
                message: 'Debe contener por lo menos un caracter numerico'
            },
            specialCharacterTest: {
                state: null,
                message: 'Debe contener por lo menos un caracter especial'
            }
        }
    })

    // const uiConfig = {
    //     signInFlow: 'popup',
    //     signInOptions: [
    //         Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //         Firebase.auth.FacebookAuthProvider.PROVIDER_ID
    //     ]
    // };

    const handleChange = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
        userTest({ ...user, [name]: value });

    }

    const userTest = ({ Email, Password }) => {

        //Prueba de Email
        const emailTest = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(Email);

        //Pruebas de contraseña
        const lenghtTest = /^.{6,64}$/.test(Password);
        const lowercaseTest = /^(?=.*[a-z]).{0,64}$/.test(Password);
        const uppercaseTest = /^(?=.*[A-Z]).{0,64}$/.test(Password);
        const numbersTest = /^(?=.*[0-9]).{0,64}$/.test(Password);
        const specialCharacterTest = /^(?=.*[ -/:-@[-`{-~]).{0,64}$/.test(Password);

        setValidation(val => (
            {
                emailTest: { ...val.emailTest, state: emailTest },
                Password: {
                    lenghtTest: { ...val.Password.lenghtTest, state: lenghtTest },
                    lowercaseTest: { ...val.Password.lowercaseTest, state: lowercaseTest },
                    uppercaseTest: { ...val.Password.uppercaseTest, state: uppercaseTest },
                    numbersTest: { ...val.Password.numbersTest, state: numbersTest },
                    specialCharacterTest: { ...val.Password.specialCharacterTest, state: specialCharacterTest }
                }
            }
        ))

        return emailTest && lenghtTest && lowercaseTest && uppercaseTest && numbersTest && specialCharacterTest
    }

    const validatorState = () => {

        if (userTest(user)) {
            Swal.fire({
                title: 'Cargando información...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            })

            FirebaseMethods.createUser(user.Email, user.Password)
                .then(resp => {
                    setInformationRegister((val) => (
                        {
                            method: 'EmailAndPassword',
                            information: { ...val.information, Email: user.Email, uid: resp.user.uid }
                        }
                    ))
                    Swal.close();
                    handleNext();
                })
                .catch(err => {
                    Swal.fire('Error', 'Fallo al cargar la información', 'error');
                    console.error(err);
                })

        }
        else {
            alert('fallo')
        }

    }

    useEffect(() => {

        const elements = Array.prototype.slice.call(document.getElementsByClassName('firebaseui-idp-text-long'));

        for (const element of elements) {

            element.remove();
        }

    }, [])

    return (
        <>
            <div className="container-type-register">
                <div className="firebase-email-container">
                    <InputPopover
                        iconType="User"
                        placeholder="Ingrese su correo"
                        type="text"
                        data={validation.emailTest}
                        name="Email"
                        onChange={handleChange}
                        value={user.Email}
                    />
                    <InputPopover
                        iconType="Password"
                        placeholder="Ingrese su contraseña"
                        type="password"
                        data={validation.Password}
                        bucle={true}
                        name="Password"
                        onChange={handleChange}
                        value={user.Password}
                    />
                    <div className={classes.actionsContainer}>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Atras
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={validatorState}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Terminado' : 'Siguiente'}
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <Line type="line-vertical" />
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Config.connectFirebase.auth()} /> */}

            </div>


        </>
    )
}
