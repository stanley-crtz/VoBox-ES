import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Swal from 'sweetalert2';
import Firebase from '../Class/Firebase';
import { InputPopover } from './InputPopover';

export const VerifyPasswordReset = () => {

    const oobCode = useQuery().get("oobCode");

    const [verify, setVerify] = useState(null);
    const [Pass, setPass] = useState({
        Password: '',
        RepeatPassword: ''
    })
    const [validation, setValidation] = useState({
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
        },
        RepeatPassword: {
            state: null,
            message: 'Contraseñas no iguales'
        }
    })

    const history = useHistory();

    const passwordTests = ({ Password, RepeatPassword }) => {

        //Prueba de Email
        const repeatPasswordTest = /^.{6,64}$/.test(RepeatPassword) && RepeatPassword === Password;

        //Pruebas de contraseña
        const lenghtTest = /^.{6,64}$/.test(Password);
        const lowercaseTest = /^(?=.*[a-z]).{0,64}$/.test(Password);
        const uppercaseTest = /^(?=.*[A-Z]).{0,64}$/.test(Password);
        const numbersTest = /^(?=.*[0-9]).{0,64}$/.test(Password);
        const specialCharacterTest = /^(?=.*[ -/:-@[-`{-~]).{0,64}$/.test(Password);

        setValidation(val => (
            {
                RepeatPassword: { ...val.RepeatPassword, state: repeatPasswordTest },
                Password: {
                    lenghtTest: { ...val.Password.lenghtTest, state: lenghtTest },
                    lowercaseTest: { ...val.Password.lowercaseTest, state: lowercaseTest },
                    uppercaseTest: { ...val.Password.uppercaseTest, state: uppercaseTest },
                    numbersTest: { ...val.Password.numbersTest, state: numbersTest },
                    specialCharacterTest: { ...val.Password.specialCharacterTest, state: specialCharacterTest }
                }
            }
        ))

        return repeatPasswordTest && lenghtTest && lowercaseTest && uppercaseTest && numbersTest && specialCharacterTest
    }

    const handleChange = ({ target: { value, name } }) => {
        setPass({ ...Pass, [name]: value.trim() });
        passwordTests({ ...Pass, [name]: value.trim() });
    }

    const changePassword = () => {

        if (passwordTests(Pass)) {

            Swal.fire({
                title: 'Verificando información...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                }
            })

            Firebase.confirmPasswordReset(oobCode, Pass.Password)
                .then(() => {
                    Swal.fire({
                        title: 'Cambio de contraseña',
                        text: 'Su contraseña se a modificado correctamente',
                        icon: 'success',
                        showConfirmButton: true,
                        showCancelButton: false,
                        confirmButtonText: 'Ok'
                    })
                        .then(() => {
                            history.push('/Login');
                        })
                })

        }
        else {
            Swal.fire('Advertencia', 'Verifique que le falta para completar los requisitos de su nueva contraseña', 'info')
        }
    }

    useEffect(() => {

        Firebase.verifiedPasswordReset(oobCode)
            .then(resp => {
                setVerify(true);
            })
            .catch(err => {
                console.error(err);
                setVerify(false);
            })

    }, [oobCode])

    return (
        <div className="content-recover-and-confirm">
            <div className="content-son">
                {
                    verify === null ? (
                        <h1>Verificando...</h1>
                    ) : (
                        <>
                            {

                                verify ? (
                                    <>

                                        <h1>Cambio de contraseña</h1>
                                        <p>Ingrese su nueva contraseña</p>
                                        <InputPopover
                                            iconType="Password"
                                            placeholder="Nueva contraseña"
                                            type="password"
                                            data={validation.Password}
                                            bucle={true}
                                            name="Password"
                                            onChange={handleChange}
                                            value={Pass.Password}
                                        />
                                        <InputPopover
                                            iconType="Password"
                                            placeholder="Repita contraseña"
                                            type="password"
                                            data={validation.RepeatPassword}
                                            name="RepeatPassword"
                                            onChange={handleChange}
                                            value={Pass.RepeatPassword}
                                        />
                                        <input type="button" className="success" value="Cambiar" onClick={changePassword} />
                                    </>
                                ) : (
                                    <>
                                        <h1>Error al verificar el cambio de contraseña</h1>
                                        <br />
                                        <p>Hubo un error al verificar su cambio de contraseña por alguno de los siguientes motivos:</p>
                                        <br />
                                        <ul>
                                            <li>Los urls proporcionados estan habilitados solamente por 72hrs.</li>
                                            <li>Una vez usados los enlaces de verificacion no pueden volver a ser utilizados.</li>
                                        </ul>
                                    </>
                                )

                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}