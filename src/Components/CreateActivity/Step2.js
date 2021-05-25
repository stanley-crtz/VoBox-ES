import React, { useEffect, useState } from 'react';
import { getTimes } from '../../Assets/ObjectGlobal/Global';
import GetTimeSelected from '../GetTimeSelected'

export const Step2 = ({handleNext}) => {

    const [Workdays, setWorkdays] = useState([]);
    const [time, setTime] = useState([]);

    const getArrayTime = (e) => setTime([...e]);

    const getTime = (e) => setWorkdays([...Workdays, e]);

    const removeTime = (e) => setWorkdays(e);

    useEffect(() => {
        setTime(getTimes(6, 17));

        return () => {
            setTime(getTimes(6, 17));
        };
    }, []);

    return (
        <>
            <GetTimeSelected
                time={time}
                getArrayTime={getArrayTime}
                getTime={getTime}
                activityWorkdays={Workdays}
                removeTime={removeTime}
            />
            <input type="button" value="Siguiente" className="success" onClick={() => handleNext()} />
        </>
    )
}
