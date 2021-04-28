import React, { useEffect, useState } from 'react'
import Firebase from '../../Class/Firebase'
import { ConnectToRedux } from '../ConnectToRedux'
import { FrmSettings } from '../Forms/FrmSettings'
import { Popover } from '../Popover'
import { Computer } from './Computer'
import { Movil } from './Movil'

const Index = ConnectToRedux(({ changeUser, User }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMouseClick = ({ currentTarget }) => {
        setAnchorEl(anchorEl === null ? currentTarget : null);
    }

    useEffect(() => {
        Firebase.checkoutUser().then(resp => {
            changeUser(resp);
        })
    })

    return (
        <nav>
            <Computer handleMouseClick={handleMouseClick} />
            <Movil handleMouseClick={handleMouseClick} />
            <Popover anchorEl={anchorEl} onClose={handleMouseClick}>
                <FrmSettings User={User} />
            </Popover>
        </nav>
    )
})

export default Index;