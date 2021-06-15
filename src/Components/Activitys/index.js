import React from 'react'
import ControlledAccordions from '../ControlledAccordions';
import { MapView } from '../Maps/MapView';
import { BussinesInformation } from './BussinesInformation';
import { Hours } from './Hours';
import { SideBar } from './SideBar';

const Index = ({ data }) => {

    const { Title, Description, Workdays, Location, companyInformation, publish } = data;

    const openMaps = (e) => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${Location.lat},${Location.lng}&zoom=20`)
    }

    const ControlledAccordion = [
        {
            title: 'Ubicacion',
            description: 'Ubicacion donde se realiza la actividad',
            component: <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'column' }}>
                <MapView coordinates={Location} centerMap={Location} zoom={15} getCoordinates={openMaps} />
            </div>
        },
        {
            title: 'Horarios',
            description: 'Horarios de la actividad',
            component: <Hours Workdays={Workdays} />
        },
        
    ]

    return (
        <div className="Content">

            <BussinesInformation bussines={companyInformation} publish={publish} />

            <SideBar Title={Title} />

            <div className="Description" dangerouslySetInnerHTML={{ __html: Description }} />

            <ControlledAccordions data={ControlledAccordion} />

        </div>
    )
}

export default Index;