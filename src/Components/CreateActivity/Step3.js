import React, { useEffect, useState } from 'react';
import { MapView } from '../Maps/MapView';

export const Step3 = ({ handleNext, handleBack, data, setData }) => {

    const [Coordinates, setCoordinates] = useState(null)

    const [centerMap, setCenterMap] = useState({
        lat: '13.3833',
        lng: '-88.4167'
    })

    const handleNextStep = () => {

        setData(val => ({
            ...val,
            toSend: {
                ...val.toSend,
                Location: Coordinates
            }
        }));
        handleNext();

    }

    useEffect(() => {

        if (data) {
            setCenterMap(data);
            setCoordinates(data);
        }
        else {
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
        }

    }, [data])

    const changeCoordinates = (e) => setCoordinates(e)

    return (
        <div style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'column' }}>
            <MapView
                coordinates={Coordinates}
                getCoordinates={changeCoordinates}
                centerMap={centerMap}
            />
            <div className="flex-column">
                <input type="button" value="Anterior" className="createAcountButton" onClick={handleBack} />
                <input type="button" value="Siguiente" className="success" onClick={handleNextStep} />
            </div>
        </div>
    )
}
