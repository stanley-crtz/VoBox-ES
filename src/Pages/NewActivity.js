import React, { useState } from "react";
import { FrmNewActividad } from "../Components/Forms/FrmNewActividad";
import { MapView } from "../Components/Maps/MapView";

export const NewActivity = () => {

  const [newActivity, setNewActivity] = useState({
    Title: "",
    Description: "",
    Workdays: [],
    Coordinates: {
      lat: '13.3833',
      lng: '-88.4167'
    }
  })

  const changeCoordinates = (e) => setNewActivity({...newActivity, Coordinates: e})

  return (
    <div className="NewActivity">
      <div className="Parametres">
        <FrmNewActividad />
      </div>
      <div className="Map">
        <MapView
          coordinates={newActivity.Coordinates}
          getCoordinates={changeCoordinates}
          centerMap={{ lat: '13.3833', lng: '-88.4167' }}
        />
      </div>
    </div>
  );
};
