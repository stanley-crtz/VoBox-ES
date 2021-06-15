import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icons } from '../../Assets/Icons/Icons';
import { Popover } from '../Popover';

export const Items = ({ type }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [message, setMessage] = useState('');

    const handleMouseEnter = ({ currentTarget }, message) => {
        setMessage(message);
        setAnchorEl(currentTarget);
    }

    const handleMouseLeave = () => setAnchorEl(null)

    return (
        <div className="Navbar-Items">
            <ul>
                {
                    type === 'InMenu' ? (
                        <>
                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/_Inicio'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Inicio')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Home}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/_Grupos'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Grupos')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Group}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/_Solicitudes'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Solicitudes')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Notes}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/_Ajustes'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Ajustes')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Menu}
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/Home'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Inicio')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Home}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/Sobre_Nosotros'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Sobre Nosotros')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.Document}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    activeClassName="Rute-Active"
                                    to='/_'
                                    onMouseEnter={(e) => handleMouseEnter(e, 'Ingresar')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={handleMouseLeave}
                                >
                                    {Icons.User}
                                </NavLink>
                            </li>
                        </>
                    )
                }
            </ul>
            <Popover message={message} anchorEl={anchorEl} onClose={handleMouseLeave} />
        </div>
    )
}
