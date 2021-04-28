import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Card } from '../Card';

export const Step1 = ({ handleNext, handleBack, activeStep, steps, classes, setInformationRegister, value }) => {

    const [card, setCard] = useState('');

    const validatorState = () => {
        if (card !== '') {
            setInformationRegister((val) => ({...val, information: {...val.information, TypeAcount: card}}));
            handleNext()
        }
        else {
            alert('Seleccione una opcion')
        }
    }

    useEffect(() => {
        setCard(value);
    }, [value])

    return (
        <>
            <div className="Cards">
                <Card
                    icons="Acount"
                    title="Voluntario"
                    description="Cuenta para voluntarios"
                    card={card}
                    setCard={setCard}
                />
                <Card
                    icons="Business"
                    title="Empresa"
                    description="Cuenta para empresa"
                    card={card}
                    setCard={setCard}
                />
            </div>
            <div className={classes.actionsContainer}>
                <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                    >
                        Atras
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={validatorState}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Terminado' : 'Siguiente'}
                    </Button>
                </div>
            </div>
        </>
    )
}