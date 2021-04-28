import React from 'react'
import { Icons } from '../Assets/Icons/Icons'

export const Card = ({ icons, title, description, card, setCard }) => {

    const icon = Icons[icons];

    return (
        <div className={`Card ${card === title ? 'Card-Active' : ''}`} onClick={() => setCard(title)}>
            <div className="Card-Icon">
                {icon}
            </div>
            <div className="Card-Content">
                <div className="Card-Title">
                    <h3>{title}</h3>
                </div>
                <div className="Card-Description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
