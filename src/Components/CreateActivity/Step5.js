import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Firebase from '../../Class/Firebase';
import { ViewPdf } from '../ViewPdf'

export const Step5 = ({ handleBack, setData, submit }) => {

    const [pdfViewer, setPdfViewer] = useState('');

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setPdfViewer(e.target.result)
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleSubmit = () => {

        const file = document.getElementById("getInduccion");

        Swal.fire({
            title: "Publicando Actividad...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        Firebase.uploadFiles("Formacion_E_Induccion", file.files[0], new Date())
            .then((resp) => {
                resp.ref.getDownloadURL().then((url) => {
                    setData(val => ({
                        ...val,
                        toSend: {
                            ...val.toSend,
                            Induccion: url
                        }
                    }));

                    submit(url);
                });
            })
            .catch((err) => Swal.fire('Error', 'No se pudo publicar la actividad', 'error'));
    }

    return (
        <div>
            <input type="file" onChange={handleChange} accept="application/pdf" id="getInduccion" />
            <ViewPdf src={pdfViewer} />
            <div className="flex-column">
                <input type="button" value="Anterior" className="createAcountButton" onClick={handleBack} />
                <input type="button" value="Guardar" className="success" onClick={handleSubmit} />
            </div>
        </div>
    )
}
