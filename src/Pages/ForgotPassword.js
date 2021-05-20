import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import Firebase from '../Class/Firebase';
import { Input } from '../Components/Input';

export const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const history = useHistory();

    const handleChange = ({ target: { value } }) => setEmail(value);

    const handleClick = () => {
        Firebase.sendPasswordResetVerification(email)
            .then(() => {
                Swal.fire(
                    'Cambio de contraseña',
                    'Se le a proporcionado un enlace de verificación para el cambio de contraseña',
                    'success'
                );
                history.push('/Login')
            })
            .catch(() => Swal.fire(
                'Cambio de contraseña',
                'No se ha podido proporcionar su enlace de vericiación, por favor verifique su correo',
                'error'
            ))
    }

    return (
        <div className="content-recover-and-confirm">
            <div className="content-son">
                <h1>Cambio tu contraseña</h1>
                <br />
                <div style={{width: '100%', textAlign: 'left'}}>
                    <p>Se le proporcionara un correo de verificacion para la recuperacion de su contraseña.</p>
                    <p>Ingresa tu correo y has click en el boton de Recuperar.</p>
                </div>
                <Input
                    name="Email"
                    iconType="Email"
                    placeholder="Ingrese su correo"
                    type="text"
                    value={email}
                    onChange={handleChange}
                />
                <input type="button" value="Recuperar" className="success" onClick={handleClick} />
            </div>
        </div>
    )
}
