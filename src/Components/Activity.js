import { Avatar } from '@material-ui/core'
import React from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

export const Activity = ({ value: { id, data: { Title, Description, publish, companyInformation} } }) => {

    const history = useHistory();

    return (    
        <div className="Activity">
            <div className="Header">
                <Avatar alt="Foto de perfi" src={companyInformation.Photo} />
                <div className="content">
                    <label>{companyInformation.Name}</label>
                    <cite>{moment(publish).fromNow()}</cite>
                </div>
            </div>
            <div className="Body">
                <h2>{Title}</h2>
                <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: Description }}
                />
            </div>
            <div className="Footer" onClick={() => history.push(`/_Actividad?activity=${id}`)}>
                <p>Ver mas</p>
            </div>
        </div>
    )
}
