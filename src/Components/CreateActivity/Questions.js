import React from 'react'
import { Icons } from '../../Assets/Icons/Icons';

export const Questions = ({ index, value: Question, setValue }) => {

    const handleAddResponse = () => {
        const { Responses } = Question;

        Responses.push('');

        setValue(val => {

            let question = val.Questions

            question[index].Responses = Responses;

            return {
                ...val,
                Questions: question
            }

        })

    }

    const handleDeleteResponse = (i) => {
        const { Responses } = Question;

        Responses.splice(i, 1);

        setValue(val => {

            let question = val.Questions

            question[index].Responses = Responses;

            return {
                ...val,
                Questions: question
            }

        })

    }

    const handleChangeTitle = ({ target: { value } }) => {

        setValue(val => {

            let question = val.Questions

            question[index].Question = value;

            return {
                ...val,
                Questions: question
            }

        })

    }

    const handleChangeResponse = ({ target: { value } }, i, check = false) => {

        setValue(val => {

            let question = val.Questions

            question[index].Responses[i] = value;

            if (check) {
                question[index].Correct = value ? value : null;
            }

            return {
                ...val,
                Questions: question
            }

        })

    }

    const handleCheckResponse = (value) => {
        setValue(val => {

            let question = val.Questions

            question[index].Correct = value;

            return {
                ...val,
                Questions: question
            }

        })
    }

    return (
        <div className="Question">
            <input type="text" placeholder="Pregunta sin titulo" value={Question.Question} onChange={handleChangeTitle} />
            <div className="Responses">
                {
                    Question.Responses.map((val, i) => (

                        <div className="Response" key={`Response__${i}`}>
                            <div
                                id="Circle"
                                className={Question.Correct === val && Question.Correct !== null ? 'activeResponse' : ''}
                                onClick={() => handleCheckResponse(val)}
                            />
                            <input
                                type="text"
                                placeholder={`Opcion ${i + 1}`}
                                value={val}
                                onChange={e => handleChangeResponse(e, i, Question.Correct === val && Question.Correct !== null ? true : false)}
                            />
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
