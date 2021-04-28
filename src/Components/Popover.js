import React from 'react';
import PopoverComponent from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        minWidth: 75,
        textAlign: 'center',
    },
}));

export const Popover = ({ anchorEl, message, onClose, children }) => {
    const classes = useStyles();

    const open = Boolean(anchorEl);

    return (

        <PopoverComponent
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
            onClose={onClose}
        >
            {
                message ? (
                    <Typography>{message}</Typography>
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        </PopoverComponent>
    );
}
