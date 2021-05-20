import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";
import Firebase from "../../Class/Firebase";
import { InputPopover } from "../InputPopover";

export const Step2 = ({ handleNext, handleBack, activeStep, steps, classes, setInformationRegister }) => {

  const DefaultURLPhoto = "https://static.wikia.nocookie.net/blackclover/images/8/80/Black_Asta_Descontrolado.png/revision/latest?cb=20201124054144&path-prefix=es";

  const [user, setUser] = useState({
    Photo: "",
    Name: "",
    Address: "",
    NIT: "",
    DUI: "",
  });

  const [validation, setValidation] = useState({
    NameTest: {
      state: null,
      message: "Nombre no valido",
    },
    AddressTest: {
      state: null,
      message: "Direccion no valida",
    },
    DuiTest: {
      state: null,
      message: "DUI no valido",
    },
    NitTest: {
      state: null,
      message: "NIT no valido",
    },
  });

  const userTest = ({ Name, Address, DUI, NIT }) => {
    //Pruebas de Nombre
    const nameTest = /^[a-zA-Z ]{10,64}$/.test(Name);

    //Pruebas de Direccion
    const addressTest = /^.{3,}$/.test(Address);

    //Pruebas de DUI
    const duiTest = /^\d{8}-\d{1}$/.test(DUI);

    //Pruebas de NIT
    const nitTest = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/.test(NIT);

    setValidation((val) => ({
      NameTest: { ...val.NameTest, state: nameTest },
      AddressTest: { ...val.AddressTest, state: addressTest },
      DuiTest: { ...val.DuiTest, state: duiTest },
      NitTest: { ...val.NitTest, state: nitTest },
    }));

    return nameTest && addressTest && duiTest && nitTest;
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    userTest({ ...user, [name]: value });
  };

  const handleChangePhoto = ({ target: input }) => {
    const preview = document.getElementById("previewPhoto");

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      preview.src = DefaultURLPhoto;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const photo = document.getElementById("getPhoto");

    Swal.fire({
      title: "Cargando información...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    if (userTest(user) && photo.files[0]) {
      Firebase.uploadPhotoProfile(photo.files[0], user.Name + new Date())
        .then((resp) => {
          resp.ref.getDownloadURL().then((url) => {
            setInformationRegister(val => ({...val, information: {...val.information, ...user, Photo: url }}));
            Swal.close();
            handleNext();
          });
        })
        .catch((err) => alert(JSON.stringify(err)));
    } else {
      Swal.fire(
        "Advertencia",
        "Debe de rellenar cada uno de los campos",
        "info"
      );
    }
  };

  return (
    <div className="AboutUser">
      <form onSubmit={handleSubmit}>
        <div className="About">
          <div className="AboutPhoto">
            <img src={DefaultURLPhoto} alt="Foto de perfil" id="previewPhoto" />
            <input
              type="file"
              accept="image/*"
              onChange={handleChangePhoto}
              id="getPhoto"
            />
          </div>
          <div className="AboutInfo">
            <div className="input">
              <InputPopover
                iconType="User"
                placeholder="Ingrese su nombre"
                type="text"
                data={validation.NameTest}
                name="Name"
                onChange={handleChange}
                value={user.Name}
              />
            </div>
            <div className="input">
              <InputPopover
                iconType="Home"
                placeholder="Ingrese su direccion"
                type="text"
                data={validation.AddressTest}
                name="Address"
                onChange={handleChange}
                value={user.Address}
              />
            </div>
          </div>
        </div>
        <div className="About">
          <div className="AboutInfo">
            <div className="input">
              <InputPopover
                iconType="Document"
                placeholder="Ingrese su DUI"
                type="text"
                data={validation.DuiTest}
                name="DUI"
                onChange={handleChange}
                value={user.DUI}
              />
            </div>
          </div>
          <div className="AboutInfo">
            <div className="input">
              <InputPopover
                iconType="Document"
                placeholder="Ingrese su NIT"
                type="text"
                data={validation.NitTest}
                name="NIT"
                onChange={handleChange}
                value={user.NIT}
              />
            </div>
          </div>
        </div>
        <div
          className={classes.actionsContainer}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Atras
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
            >
              {activeStep === steps.length - 1 ? "Terminado" : "Siguiente"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
