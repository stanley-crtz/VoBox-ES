import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Firebase from '../Class/Firebase';

export const VerifyEmail = () => {

    const oobCode = useQuery().get('oobCode');
    // const [verify, setVerify] = useState(null);

    useEffect(() => {
        Firebase.verifyEmail(oobCode)
            .then(() => alert('verificado'))
            .catch(() => alert('error'));
    }, [oobCode])

    return (
        <div>
            verificado
        </div>
    )
}

const useQuery = () => new URLSearchParams(useLocation().search);