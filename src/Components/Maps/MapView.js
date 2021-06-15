import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "./Marker";

export const MapView = ({ coordinates, centerMap, getCoordinates, zoom = 10 }) => {

  return (
    <Map
      zoom={zoom}
      crollWheelZoom={false}
      center={centerMap}
      onclick={({ latlng: { lat, lng } }) => getCoordinates({ lat, lng })}
      style={{flex: 1}}
    >
      <TileLayer
        attribution="&copy; VoBox ES"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        coordinates && <Marker coor={coordinates} />
      }
    </Map>
  );
};

MapView.defaultProps = {
  getCoordinates: () => {}
}