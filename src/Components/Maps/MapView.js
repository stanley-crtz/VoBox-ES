import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from "./Marker";

export const MapView = ({ coordinates, centerMap, getCoordinates }) => {
  return (
    <Map
      zoom={10}
      crollWheelZoom={false}
      center={centerMap}
      onclick={({ latlng: { lat, lng } }) => getCoordinates({ lat, lng })}
    >
      <TileLayer
        attribution="&copy; VoBox ES"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker coor={coordinates} />
    </Map>
  );
};
