import React, { useState } from "react";
import { Icons } from "../../Assets/Icons/Icons";
import { useContador } from "../../Hooks/useContador";
import { Modal } from "../Modal";

const ConfirmActivity = ({ desde, hasta, getConfirm, closeModal }) => {
  const [contador, aumentar, decrementar, reset] = useContador(hasta);

  const handleClickConfirm = () => {
    const sendInfo = {
      time: {
        hours: desde,
        stateDay: desde > 11 ? "pm" : "am",
        hoursPlus: contador,
        stateDayPlus: contador > 11 ? "pm" : "am",
      },
      rowSpan: contador - desde,
    };
    getConfirm(sendInfo);

    closeModal(false);
  };

  return (
    <div className="ConfirmActivity">
      <h2>Confirma tu actividad</h2>
      
      <div className="ConfirmActivity_Time">
        {/* Desde */}
        <div className="Content_Time">
          <div className="Time">
            <div className="Box Hour">{desde > 12 ? desde - 12 : desde}</div>
            <div className="separate-Time">:</div>
            <div className="Box Minutes">00</div>
          </div>
          <div className="stateDay">
            <div className="state">{desde > 11 ? "P" : "A"}</div>
            <div id="separator"></div>
            <div className="state">M</div>
          </div>
        </div>
        {/* Hasta */}
        <div className="changeTime">
          <div className="Content_Time">
            <div className="Time">
              <div className="Box Hour">{contador > 12 ? contador - 12 : contador}</div>
              <div className="separate-Time">:</div>
              <div className="Box Minutes">00</div>
            </div>
            <div className="stateDay">
              <div className="state">{contador > 11 ? "P" : "A"}</div>
              <div id="separator"></div>
              <div className="state">M</div>
            </div>
          </div>
          <div className="Buttons">
            <button onClick={() => decrementar()}>{Icons.ArrowUp}</button>
            <button onClick={() => reset()}>{Icons.Reset}</button>
            <button onClick={() => aumentar()}>{Icons.ArrowDown}</button>
          </div>

        </div>

      </div>
      <input className="success" type="button" value="Confirmar" onClick={handleClickConfirm} />
      {/* <p>
        Tu actividad esta de {desde > 12 ? desde - 12 : desde}:00{" "}
        {desde > 11 ? "pm" : "am"} a {contador > 12 ? contador - 12 : contador}
        :00 {contador > 11 ? "pm" : "am"}, ¿Si deseas aumentar las horas pulsa
        en aumentar o decrementar?
      </p>
      <input type="button" value="Aumentar" onClick={() => aumentar()} />
      <input type="button" value="Decrementar" onClick={() => decrementar()} />
      <input type="button" value="Defecto" onClick={() => reset()} />
      <input type="button" value="Guardar" onClick={handleClickConfirm} /> */}
    </div>
  );
};

export const Item = ({
  handleAddTime,
  data: {
    value: { isActive, hours, stateDay, hoursPlus, stateDayPlus },
  },
  i,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleAddActivity = () => setOpenModal(true);

  const confirmAddActivity = (e) => handleAddTime(i, e);

  if (isActive === null)
    return (
      <>
        <td onClick={handleAddActivity}></td>
        <Modal
          head="Agrega una actividad"
          open={openModal}
          setOpen={setOpenModal}
        >
          <ConfirmActivity
            desde={hours}
            hasta={hoursPlus}
            closeModal={setOpenModal}
            getConfirm={confirmAddActivity}
          />
        </Modal>
      </>
    );

  if (isActive)
    return (
      <td rowSpan={hoursPlus - hours}>
        <div class="timeSelected">
          <p>{`${hours > 12 ? hours - 12 : hours}:00 ${stateDay} - ${hoursPlus > 12 ? hoursPlus - 12 : hoursPlus
            }:00 ${stateDayPlus}`}</p>
        </div>
      </td>
    );

  if (isActive === false) return <></>;
};
