import React, { useState } from 'react'
import { Icons } from '../../Assets/Icons/Icons';

export const Questions = () => {

    const [Question, setQuestion] = useState({
        Question: '',
        Responses: ['']
    })

    const handleAddResponse = () => {
        const { Responses } = Question;

        Responses.push('');

        setQuestion({ ...Question, Responses });
    }

    const handleDeleteResponse = (index) => {
        const { Responses } = Question;

        Responses.splice(index, 1);

        setQuestion({
            ...Question,
            Responses
        })

    }

    return (
        <div className="Question">
            <input type="text" placeholder="Pregunta sin titulo" />
            <div className="Responses">
                {
                    Question.Responses.map((val, i) => (

                        <div className="Response">
                            <div id="Circle" />
                            <input type="text" placeholder={`Opcion ${i + 1}`} />
                            <div className="icon-Delete" onClick={() => handleDeleteResponse(i)}>
                                {Icons.Delete}
                            </div>
                        </div>

                    ))
                }

                <div className="Response">
                    <div id="Circle" />
                    <p onClick={handleAddResponse}>Añadir respuesta</p>
                </div>
            </div>
        </div>
    )
}
