import React from 'react';
import { Icons } from '../Assets/Icons/Icons';
import PropTypes from 'prop-types';

export const Input = ({ iconType, placeholder, type, name, value, onChange }) => {

    const icon = Icons[iconType];

    return (
        <div className="Input">
            <div className="icon">
                {icon}
            </div>
            <div className="left">
                <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            </div>
        </div>
    )
}

Input.propTypes = {
    iconType: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
}

Input.defaultProps = {
    placeholder: '',
    type: 'text',
    name: '',
    value: '',
    onChange: () => {}
}