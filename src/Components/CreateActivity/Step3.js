import React, { useEffect, useState } from 'react';
import { MapView } from '../Maps/MapView';

export const Step3 = ({ handleNext }) => {

    const [Coordinates, setCoordinates] = useState(null)

    const [centerMap, setCenterMap] = useState({
        lat: '13.3833',
        lng: '-88.4167'
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { longitude, latitude } }) => setCenterMap({ lat: latitude, lng: longitude }),
            (err) => {
                setCenterMap({ lat: '13.3833', lng: '-88.4167' });

                console.error(err);
            },
            {
                enableHighAccuracy: true,
            }
        )
    }, [])

    const changeCoordinates = (e) => setCoordinates(e)

    return (
        <div style={{width: '100%', height: '400px', display: 'flex', flexDirection: 'column'}}>
            <MapView
                coordinates={Coordinates}
                getCoordinates={changeCoordinates}
                centerMap={centerMap}
            />
            <input type="button" value="Siguiente" className="success" onClick={() => handleNext()} />
        </div>
    )
}
