import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Firebase from '../Class/Firebase';

export const VerifyEmail = () => {

    const oobCode = useQuery().get('oobCode');
    const [verify, setVerify] = useState(null);
    const history = useHistory();


    useEffect(() => {
        Firebase.verifyEmail(oobCode)
            .then(() => setVerify(true))
            .catch(() => setVerify(false));
    }, [oobCode])

    return (
        <div className="content-recover-and-confirm">
            <div className="content-son">

                {
                    verify === null ? (
                        <>
                            <h1>Verificando correo</h1>
                        </>
                    ) : (
                        <>
                            {
                                verify ? (
                                    <>
                                        <h1>Correo Electronico Verificado</h1>
                                        <input
                                            type="button"
                                            value="Inicio"
                                            className="success"
                                            onClick={() => history.push('/_')}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h1>Error al verificar el correo</h1>
                                        <br />
                                        <p>Hubo un error al verificar su correo electronico por alguno de los siguientes motivos:</p>
                                        <br />
                                        <ul>
                                            <li>Los urls proporcionados estan habilitados solamente por 72hrs.</li>
                                            <li>Una vez usados los enlaces de verificacion no pueden volver a ser utilizados.</li>
                                        </ul>
                                        <br />
                                        <p>Favor de ingresar a la aplicacion y si en un dado caso su correo no este verificado la aplicacion lo redireccionara a una pagina en donde podra reenviar su correo de verificacion.</p>
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

const useQuery = () => new URLSearchParams(useLocation().search);