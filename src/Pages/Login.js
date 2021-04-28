import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Input } from '../Components/Input';
import { Line } from '../Components/Line';
import Logo from '../Assets/Images/Logo.jpeg'
import { Modal } from '../Components/Modal';
import Register from '../Components/Register/Index';
import Firebase from '../Class/Firebase';

export const Login = () => {

    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({
        Email: '',
        Password: ''
    })

    const history = useHistory();

    const handleChange = ({ target: { name, value } }) => setUser({...user, [name]: value});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        Firebase.signInWithEmailAndPassword(user.Email, user.Password)
            .then(resp => {
                history.push('/_')
            })

    }

    return (
        <section className="loginPage">
            <div className="flex1 center">
                <div className="content">
                    <h1 className="loginTitle">VoBox ES</h1>
                    <p>VoBox te ayuda si quieres formar parte de alguna actividad de voluntariado.</p>
                </div>
            </div>
            <div className="flex2 center">
                <form className="frmLogin" onSubmit={handleSubmit}>
                    <img alt="Logo" src={Logo} />
                    <Input
                        name="Email"
                        iconType="Email"
                        placeholder="Ingrese su correo"
                        type="text"
                        value={user.Email}
                        onChange={handleChange}
                    />
                    <Input
                        name="Password"
                        iconType="Password"
                        placeholder="Ingrese su contraseña"
                        type="password"
                        value={user.Password}
                        onChange={handleChange}

                    />
                    <input
                        className="success"
                        type="submit"
                        value="Ingresar"
                    />
                    <NavLink
                        to="/Olvide"
                        className="forgetPassword"
                    >
                        ¿Olvidaste tu contraseña?
                    </NavLink>
                    <Line />
                    <input
                        type="button"
                        className="createAcountButton"
                        onClick={() => setOpenModal(true)}
                        value="Crea cuenta nueva"
                    />
                </form>

            </div>
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                head={
                    <>
                        <h2>Registrate</h2>
                        <p>Es rápido y fácil.</p>
                    </>
                }
            >
                <Register />
            </Modal>
        </section>
    )
}

