import React, { useEffect, useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { Input } from '../Input';

let title = '';

export const Step1 = ({ handleNext, data, setData }) => {

    const [state, setState] = useState({
        Title: '',
        Description: ''
    })

    const handleChangeSunEditor = (e) => setState({ Description: String(e), Title: title });

    const validateSunEditor = () => {

        const reg = new RegExp("\\<[^\\>]*\\>", 'img');

        const validate = state.Description.replaceAll(reg, '');

        if (validate === "") return false

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateSunEditor() && state.Title) {
            handleNext()
            setData((val) => ({ ...val, toSend: { ...val.toSend, ...state } }));
        }
        else {
            alert("complete los datos")
        }

    }

    const handleChange = ({ target: { value, name } }) => {
        title = value;
        setState({ ...state, [name]: value })
    };

    useEffect(() => {

        setState(data);

    }, [data])

    return (
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="Titulo de la actividad"
                iconType="Document"
                name="Title"
                value={state.Title}
                onChange={handleChange}
            />
            <SunEditor
                lang="es"
                setOptions={{
                    buttonList: buttonList.complex
                }}
                placeholder="Escriba la descripcion del programa..."
                defaultValue={state.Description}
                setContents={data.Description}
                onChange={handleChangeSunEditor}
                height="300px"
            />
            <input type="submit" className="success" value="Siguiente" />
        </form>
    )
}
