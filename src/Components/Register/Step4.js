import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Firebase from '../../Class/Firebase';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Step4 = ({ informationRegister }) => {

    const [state, setState] = useState(null);

    useEffect(() => {

        const pushNewUser = () => {
            Swal.fire({
                title: `Creando el usuario ${informationRegister.information.Name}...`,
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });

            return Firebase.insertUser(informationRegister.information)
                .then((resp) => {
                    return Firebase.updateUser({
                        displayName: informationRegister.information.Name,
                        photoURL: informationRegister.information.Photo,
                    }).then((result) => {
                        Swal.close();
                    });
                })
                .catch((err) => alert("error"));
        };

        pushNewUser()
            .then(() => {
                if (informationRegister.method === 'EmailAndPassword') {
                    Firebase.sendEmailVerification()
                        .then(resp => {
                            setState(true);
                        })
                        .catch(err => Swal.fire('Error', 'No se a podido verificar su correo', 'error'))
                }
            })

    }, [informationRegister])

    return (
        <>
            {
                state === null ?
                    <>
                        <p>Verificando credenciales</p>
                        <CircularProgress />
                    </> :
                    <>
                        <p>
                            Se ha proporcionado un correo de verificacion para activar su cuenta
		                </p>
                        <input type="button" value="Verificado" onClick={() => {
                            window.location = '/_'
                        }} />
                    </>
            }
        </>
    )
}
