import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Firebase from '../../Class/Firebase';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Step4 = ({ informationRegister }) => {

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

    return (
        <>
            {
                state === null ?
                    <>
		      <p>Verificando credenciales</p>
		      <CircularProgress />
		    </> :
                    <p>	
			Se ha proporcionado un correo de verificacion para activar su cuenta
		    </p>
            }
        </>
    )
}
