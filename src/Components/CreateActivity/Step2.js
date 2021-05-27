import React, { useEffect, useState } from 'react';
import { getTimes } from '../../Assets/ObjectGlobal/Global';
import GetTimeSelected from '../GetTimeSelected'

export const Step2 = ({ handleNext, handleBack, data, setData }) => {

    const [Workdays, setWorkdays] = useState([]);
    const [time, setTime] = useState([]);

    const getArrayTime = (e) => setTime([...e]);

    const getTime = (e) => setWorkdays([...Workdays, e]);

    const removeTime = (e) => setWorkdays(e);

    const handleNextStep = () => {

        setData(val => ({
            ...val,
            toSend: {
                ...val.toSend,
                Workdays
            },
            Config: {
                ...val.Config,
                Workdays: time
            }
        }))
        handleNext()
    }

    useEffect(() => {

        if (data.Workdays.length > 0) {

            setWorkdays(data.Workdays);
            setTime(data.arrWork)

        }
        else {
            setTime(getTimes(6, 17));
        }

        return () => {
            setTime(getTimes(6, 17));
        };

    }, [data.Workdays, data.arrWork]);

    return (
        <>
            <GetTimeSelected
                time={time}
                getArrayTime={getArrayTime}
                getTime={getTime}
                activityWorkdays={Workdays}
                removeTime={removeTime}
            />
            <div className="flex-column">
                <input type="button" value="Anterior" className="createAcountButton" onClick={handleBack} />
                <input type="button" value="Siguiente" className="success" onClick={handleNextStep} />
            </div>
        </>
    )
}
