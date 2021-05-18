import React, { useEffect, useState } from "react";
import { FrmNewActividad } from "../Components/Forms/FrmNewActividad";
import { MapView } from "../Components/Maps/MapView";

export const NewActivity = () => {

  const [newActivity, setNewActivity] = useState({
    Title: "",
    Description: "",
    Workdays: [],
    Coordinates: null
  })

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
        enableHighAccuracy: true
      }
    )
  }, [])

  const changeCoordinates = (e) => setNewActivity({ ...newActivity, Coordinates: e })

  return (
    <div className="NewActivity">
      <div className="Parameters">
        <FrmNewActividad />
      </div>
      <div className="Map">
        <MapView
          coordinates={newActivity.Coordinates}
          getCoordinates={changeCoordinates}
          centerMap={centerMap}
        />
      </div>
    </div>
  );
};
