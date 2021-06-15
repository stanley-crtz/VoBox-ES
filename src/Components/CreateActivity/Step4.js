import React, { useEffect, useRef, useState } from 'react'
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

export const Step4 = ({ handleBack, handleNext, setData, data }) => {

    const [stateAdd, setStateAdd] = useState(false);
    const [QuizConfig, setQuizConfig] = useState({
        Title: '',
        Description: '',
        Questions: [
            {
                Question: '',
                Responses: [''],
                Correct: null
            }
        ]
    });

    const DescriptionRef = useRef();

    const handleAddQuestions = () => {

        const { Questions } = QuizConfig;

        Questions.push({
            Question: '',
            Responses: ['']
        })

        setQuizConfig({ ...QuizConfig, Questions });
    }

    const handleChange = ({ target: { value, name } }) => setQuizConfig({ ...QuizConfig, [name]: value })

    const handleSubmit = () => {

        setData(val => ({
            ...val,
            toSend: {
                ...val.toSend,
                Quiz: {
                    ...QuizConfig,
                    Description: DescriptionRef.current.innerText
                }
            }
        }))

        handleNext();
        
    }

    useEffect(() => {
        setQuizConfig(data);
        DescriptionRef.current.innerText = data.Description;
    }, [data])

    return (
        <div className="Quiz">
            <div className="Quiz-content">
                <h1>Crea tu quiz</h1>
                <br />
                <input name="Title" type="text" placeholder="Formulario sin titulo" onChange={handleChange} value={QuizConfig.Title} />
                <div contentEditable={true} className="textarea ultime-element-quiz" ref={DescriptionRef} />
            </div>
            <div className="Quiz-content">
                <div className="Questions">
                    {
                        QuizConfig.Questions.map((val, i) => (
                            <Questions index={i} value={val} setValue={setQuizConfig} key={`Question__${i}`} />
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
                    <input type="button" value="Siguiente" className="success" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}
