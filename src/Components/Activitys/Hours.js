import React, { useEffect, useState } from 'react'

export const Hours = ({ Workdays }) => {

    const [state, setState] = useState([]);

    useEffect(() => {

        const getNewArray = (Jobs) => {

            const newArray = Jobs.reduce((previus, current) => {

                if (previus[current.category]) {
                    previus[current.category].value.push(current.value);
                }
                else {
                    previus[current.category] = {
                        value: [current.value],
                        category: current.category
                    }
                }

                return previus;

            }, {})

            for (const key in newArray) {

                newArray[key].value.sort((a, b) => {
                    if (a.hours > b.hours) {
                        return 1;
                    }
                    if (a.hours < b.hours) {
                        return -1;
                    }

                    return 0;
                })

            }

            return Object.values(newArray).sort((a,b) => {
                if (a.category > b.category) {
                    return 1;
                }
                if (a.category < b.category) {
                    return -1;
                }
    
                return 0;
            });

        }

        const orderByDay = getNewArray(Workdays);

        console.log(orderByDay);

        setState(orderByDay);

    }, [])

    return (
        <div>
            hol
        </div>
    )
}
