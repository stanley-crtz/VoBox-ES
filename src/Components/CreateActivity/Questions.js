import React, { useState } from 'react'

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

    return (
        <div className="Question">
            <input type="text" placeholder="Pregunta sin titulo" />
            <div className="Responses">
                {
                    Question.Responses.map((val, i) => (

                        <div className="Response">
                            <div id="Circle" />
                            <input type="text" placeholder={`Opcion ${i + 1}`} />
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
