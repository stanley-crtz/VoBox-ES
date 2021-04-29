import React, { useState } from 'react'
import { FrmSettings } from '../Forms/FrmSettings'
import { Popover } from '../Popover'
import { Computer } from './Computer'
import { Movil } from './Movil'

const Index = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMouseClick = ({ currentTarget }) => {
        setAnchorEl(anchorEl === null ? currentTarget : null);
    }

    return (
        <nav>
            <Computer handleMouseClick={handleMouseClick} />
            <Movil handleMouseClick={handleMouseClick} />
            <Popover anchorEl={anchorEl} onClose={handleMouseClick}>
                <FrmSettings />
            </Popover>
        </nav>
    )
}

export default Index;