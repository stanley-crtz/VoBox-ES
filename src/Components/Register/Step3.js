import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Fire from 'firebase';
import Firebase from '../../Class/Firebase';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Step3 = ({ handleNext, informationRegister, setInformationRegister }) => {

    const [state, setState] = useState(null);

    useEffect(() => {

        if (informationRegister.method === 'EmailAndPassword') {
            Firebase.sendEmailVerification()
                .then(resp => {
                    setState(true);
                })
                .catch(err => Swal.fire('Error', 'No se a podido verificar su correo', 'error'))
        }

    }, [informationRegister])

    const getInformationListening = () => Fire.auth().onAuthStateChanged((user) => {
        if (user && user.emailVerified) {
            setInformationRegister(val => (
                {
                    ...val,
                    information: {
                        ...val.information,
                        uid: user.uid
                    }
                }
            ))
            handleNext();
        }
        else{
            alert('Aun no as verificado el correo electronico proporcionado.')
        }
    })

    return (
        <>
            {
                state === null ?
                    <p>Verificando credenciales</p> :
                    <p>Se ha proporcionado un correo de verificacion, le solicitamos no salir de esta ventana.
                        <br />
                        <br />
                        <input type="button" value="Verificar" onClick={getInformationListening} />
                    </p>

            }
            <CircularProgress />
        </>
    )
}
