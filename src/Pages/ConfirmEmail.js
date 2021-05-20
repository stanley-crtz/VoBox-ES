import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Config } from '../Config';

export const ConfirmEmail = () => {

    const [state, setState] = useState(true);

    const sendEmail = () => {

        Swal.fire({
            title: `Reenviando Correo Electronico`,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        Config.connectFirebase.auth().currentUser.sendEmailVerification()
            .then(resp => {
                setState(false);
                Swal.fire('Envio de correo de vericiacion', 'Se ha proporcionado un correo de verificacion para su cuenta', 'success');
            })
            .catch(err => {
                Swal.fire('Error', 'No se a podido verificar su correo', 'error');
                console.log(err)
            })


    }

    return (
        <div className="content-recover-and-confirm">
            <div className="content-son">
                <h1>Confirma tu correo</h1>
                <br />
                <label>Cuando se completo el registro, se le proporciono un correo para verificar su correo electronico.</label>

                <input type="button" value="Verificado" className="success" onClick={() => {
                    window.location = '/_'
                }} />
                <br />
                {
                    state && (
                        <>
                            <p>Si desea reenviar el correo favor de dar click en el boton de Reenviar.</p>
                            <input type="button" value="Reenviar" className="createAcountButton" onClick={sendEmail} />
                        </>
                    )
                }
            </div>
        </div>
    )
}
