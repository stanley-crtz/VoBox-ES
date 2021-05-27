import React, { useState } from 'react'
import { Icons } from '../../Assets/Icons/Icons'
import { Questions } from './Questions'

const style = {
    IconAdd: {
        color: '#3578f2',
        transition: '1s'
    },
    Line: {
        backgroundColor: '#3578f2',
        transition: '1s'
    }
}

export const Step4 = ({ handleBack }) => {

    const [stateAdd, setStateAdd] = useState(false)
    const [QuestionsAdd, setQuestionsAdd] = useState(['']);

    const handleAddQuestions = () => {

        QuestionsAdd.push('')

        setQuestionsAdd(QuestionsAdd);
    }

    return (
        <div className="Quiz">
            <div className="Quiz-content">
                <h1>Crea tu quiz</h1>
                <br />
                <input type="text" placeholder="Formulario sin titulo" />
                <div contentEditable={true} className="textarea ultime-element-quiz" />
            </div>
            <div className="Quiz-content">
                <div className="Questions">
                    {
                        QuestionsAdd.map((val) => (
                            <Questions />
                        ))
                    }
                </div>
                <div className="AddQuestions" onMouseEnter={() => setStateAdd(true)} onMouseLeave={() => setStateAdd(false)} onClick={handleAddQuestions} >
                    <div className="IconAdd" style={stateAdd ? style.IconAdd : {}} >
                        {Icons.Add}
                    </div>
                    <div className="LineAdd" style={stateAdd ? style.Line : {}} />
                </div>
                <div className="flex-column">
                    <input type="button" value="Anterior" className="createAcountButton" onClick={handleBack} />
                    <input type="button" value="Guardar" className="success" />
                </div>
            </div>
        </div>
    )
}
