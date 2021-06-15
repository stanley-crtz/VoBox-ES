import { CircularProgress } from '@material-ui/core';
import React from 'react'
import { Activity } from '../Components/Activity'
import { useGetActivitys } from '../Hooks/useGetActivitys'

export const Home = () => {

    const [loading, data] = useGetActivitys();
    

    return (
        <div className="Home">
            {
                loading && <CircularProgress />
            }

            {
                !loading && (
                    <>
                        {
                            data.map((value, index) => (
                                <Activity
                                    value={value}
                                    key={`Activity_${index}`}
                                />
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}
