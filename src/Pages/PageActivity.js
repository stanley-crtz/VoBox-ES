import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Firebase from '../Class/Firebase';
import Activity from '../Components/Activitys';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const PageActivity = () => {

    let query = useQuery();

    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    })

    useEffect(() => {
        const id = query.get('activity');

        Firebase.__get('Activitys', id)
            .then(data => setState({ loading: false, data, error: null }))
            .catch(err => {
                setState({ loading: false, data: [], error: true });
                console.log(err);
            })

    }, [query])

    return (
        <div className="PageActivity">
            {
                state.loading ? 
                    <CircularProgress /> : 
                    <>{state.data ? <Activity data={state.data} /> : <h1>Actividad no encontrada</h1>}</>
            }
        </div>
    )
}
