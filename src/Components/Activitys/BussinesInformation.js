import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import 'moment/locale/es'

export const BussinesInformation = ({ bussines, publish }) => {

    return (
        <div className="BussinesInformation">

            <div className="Info">
                <h4>{bussines.Name}</h4>
                <p>{bussines.Email}</p>
                <p>Publicado {moment(publish).fromNow()}</p>
            </div>

            <Avatar alt={bussines.Name} src={bussines.Photo} />

        </div>
    )
}
