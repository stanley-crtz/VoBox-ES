import { Avatar } from '@material-ui/core'
import React from 'react'
import { Icons } from '../Assets/Icons/Icons'
import { ConnectToRedux } from '../Components/ConnectToRedux'

export const Settings = ConnectToRedux(({ User }) => {

    const name = User.Name.split(' ')[0] + ' ' + User.Name.split(' ')[2]

    return (
        <div className="Settings">
            <div className="My-Profile">
                <Avatar alt="Foto de perfil" src={User?.Photo ? User.Photo : ''} />
                <div className="About">
                    <h4>{name}</h4>
                    <span>Ver tu perfil</span>
                </div>
            </div>
            <div className="Suggestion">
                <div className="Suggestion-Item">
                    {Icons.Group}
                    <span>Grupos</span>
                </div>
                <div className="Suggestion-Item">
                    {Icons.Event}
                    <span>Eventos</span>
                </div>
                <div className="Suggestion-Item">
                    {Icons.Notification}
                    <span>Notificaciones</span>
                </div>
            </div>
            <div className="Settings-Items">
                <div className="Settings-Item">
                    {Icons.Exit}
                    <span>Cerrar Sesion</span>
                </div>
            </div>
        </div>
    )
})
