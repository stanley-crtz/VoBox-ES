import React, { useEffect, useState } from "react";
import GetTimeSelected from "../GetTimeSelected";

export const Hours = ({ Workdays }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(Workdays);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <GetTimeSelected time={Workdays} editable={false} />
    </div>
  );
};
