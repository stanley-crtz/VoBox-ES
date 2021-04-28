import { Avatar } from '@material-ui/core';
import React from 'react';
import { ConnectToRedux } from '../ConnectToRedux';

export const Settings = ConnectToRedux(({ User, handleMouseClick }) => {

    return (
        <>
            <div
                className="Navbar-Settings"
                onClick={handleMouseClick}
            >
                <Avatar alt="Foto de perfil" src={User?.Photo ? User.Photo : ''} />

            </div>

        </>
    )
})
