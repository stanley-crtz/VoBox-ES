import React from "react";
import { FrmNewActividad } from "../Components/Forms/FrmNewActividad";

export const NewActivity = () => {
  return (
    <div className="NewActivity">
      <div className="Parametres">
        <FrmNewActividad />
      </div>
      <div className="Map">Map</div>
    </div>
  );
};
