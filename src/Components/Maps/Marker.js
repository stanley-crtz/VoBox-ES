import React from 'react';
import { Marker as Markers } from 'react-leaflet';
import L from 'leaflet';
import Location from '../../Assets/Images/Location.svg'

export const Marker = ({coor}) => {

    const icon = L.icon({
        iconUrl: Location,
        iconRetinaUrl: Location,
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        iconSize: [35,35],
        className: 'Leaflet-venue-icon'
    })

    return (
        <Markers 
            position={coor}
            icon={icon}
        />
    )
}
