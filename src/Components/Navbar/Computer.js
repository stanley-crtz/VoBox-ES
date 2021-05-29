import React from 'react'
import { Icon } from './Icon'
import { Items } from './Items'
import { Settings } from './Settings'

export const Computer = ({ handleMouseClick, type }) => {
    return (
        <div className="Computer">
            <Icon />
            <Items type={type} />
            <Settings handleMouseClick={handleMouseClick} />
        </div>
    )
}
