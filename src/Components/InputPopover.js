import React, { useEffect } from 'react';
import { Icons } from '../Assets/Icons/Icons';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

export const InputPopover = ({ iconType, placeholder, type, data, bucle, onChange, name, value }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [validation, setValidation] = React.useState([]);

    const handlePopoverOpen = (event) => {
        if (validation.length > 0 && value.length > 0) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const icon = Icons[iconType];

    useEffect(() => {
        if (bucle) {

            let arr = [];
            for( let info in data ){

                if (data[info].state === false) {
                    arr.push(data[info].message);
                }

            }

            setValidation(arr);
        }
        else{
            if (data.state === false) {
                setValidation([data.message])
            }
            else{
                setValidation([])
            }
        }
    }, [data?.state, data?.lenghtTest?.state, data?.lowercaseTest?.state, data?.uppercaseTest?.state, data?.numbersTest?.state, data?.specialCharacterTest?.state, bucle, data])

    return (
        <div className="Input">
            <div 
                className={
                    `icon 
                    ${
                        validation.length > 0 && value !== '' ? 'hover red' : 
                        (validation.length === 0 && value !== '') && 'green'
                    }`
                }
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {icon}
            </div>
            <div className="left">
                <input type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} autoComplete='off' />
            </div>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                {
                    validation.map((val) => <p>{val}</p>)
                }
            </Popover>
        </div>
    )
}

InputPopover.propTypes = {
    iconType: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
}

InputPopover.defaultProps = {
    placeholder: '',
    type: 'text',
    bucle: false
}
