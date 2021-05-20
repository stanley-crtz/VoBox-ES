import React, { useEffect, useState } from 'react';
import Logo from '../Assets/Images/Logo.jpeg';
import Firebase from '../Class/Firebase';
import { Config } from '../Config';
import { ConnectToRedux } from './ConnectToRedux';

export const SplashScreen = ConnectToRedux(({ changeUser, onClose }) => {

    const [animation, setAnimation] = useState('Splash');

    useEffect(() => {

        Config.connectFirebase.auth().onAuthStateChanged((user) => {

            if (!!user && user.emailVerified) {
                Firebase.__get('Users', user.uid).then(resp => {
                    changeUser(resp);
                    setAnimation('cover');
                    onClose((val) => ({ ...val, rutes: true }));
                })
            } else {
                changeUser(user);
                setAnimation('cover');
                onClose((val) => ({ ...val, rutes: true }));
            }

        });

    }, [changeUser, onClose])

    return (
        <>
            <div className={animation}>
                <img src={Logo} alt="Logo" id="icon" className="animate__animated animate__pulse animate__infinite" />
            </div>
        </>

    )
})
