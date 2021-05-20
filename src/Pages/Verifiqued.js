import React from 'react';
import {useLocation, Redirect} from 'react-router-dom';

export const Verifiqued = () => {

    const oobCode = useQuery().get('oobCode');
    const mode = useQuery().get('mode');

    return (
        <>
            <Redirect
                from="/Verifiqued/"
                to={`/Verifiqued/${mode}?oobCode=${oobCode}`}
            />
        </>

    )
}

const useQuery = () => new URLSearchParams(useLocation().search);