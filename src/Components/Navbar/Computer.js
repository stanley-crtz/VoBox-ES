import React from 'react'
import { Icon } from './Icon'
import { Items } from './Items'
import { Settings } from './Settings'

export const Computer = ({ handleMouseClick }) => {
    return (
        <div className="Computer">
            <Icon />
            <Items />
            <Settings handleMouseClick={handleMouseClick} />
        </div>
    )
}
