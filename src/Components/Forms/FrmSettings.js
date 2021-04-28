import { Avatar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

export const FrmSettings = ({ User }) => {

    const classes = useStyles();

    const name = User.Name.split(' ')[0] + ' ' + User.Name.split(' ')[2]

    return (
        <div className="FrmSettings">
            <div className="AboutUser">
                <Avatar alt="Foto de perfil" src={User?.Photo ? User.Photo : ''} className={classes.large} />
                <span>{name}</span>
                <span>{User.Email}</span>
                <input type="button" value="Mi perfil" onClick={() => alert('hp;')} />
            </div>
            <div className="items">
                <ul>
                    <li>Mi perfil</li>
                    <li>Crear actividad</li>
                </ul>
            </div>
        </div>
    )
}
