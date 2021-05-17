import React, { useState, useEffect } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import GetTimeSelected from "../GetTimeSelected";
import { getTimes } from "../../Assets/ObjectGlobal/Global";

export const FrmNewActividad = () => {
  const [openModal, setOpenModal] = useState(false);
  const [time, setTime] = useState([]);
  const [Activity, setActivity] = useState({
    Title: "",
    Description: "",
    Workdays: []
  });

  useEffect(() => {
    setTime(getTimes(6, 17));

    return () => {
      setTime(getTimes(6, 17));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getArrayTime = (e) => setTime([...e]);

  const getTime = (e) =>
    setActivity({ ...Activity, Workdays: [...Activity.Workdays, e] });

  return (
    <>
      <form className="FrmActividad" onSubmit={handleSubmit}>
        <p>Titulo</p>
        <Input iconType="user" placeholder="Titulo" />
        <p>Descripcion</p>
        <textarea />
        <p>Horarios</p>
        <button onClick={() => setOpenModal(true)}>Open</button>
      </form>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        head="Selecciona el horario"
      >
        <GetTimeSelected
          time={time}
          getArrayTime={getArrayTime}
          getTime={getTime}
        />
      </Modal>
    </>
  );
};
