import React from 'react'
import { Icon } from './Icon'
import { Items } from './Items'
import { Settings } from './Settings'

export const Movil = ({ type }) => {
    return (
        <div className="Movil">
            <div className="Content-movil-nav">
                <Icon />
                <Settings />
            </div>
            <Items type={type} />
        </div>
    )
}
