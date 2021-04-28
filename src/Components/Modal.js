import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mod from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Icons } from '../Assets/Icons/Icons';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: 20,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        width: '90%'
    },
}));

export const Modal = ({ open, setOpen, children, head }) => {
    const classes = useStyles();

    const handleClose = () => setOpen(false);;

    return (
        <Mod
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div className="containerTitleModal">

                        <div className="LeftTitleModal">
                            {head}
                        </div>

                        <div className="RightTitleModal" onClick={handleClose}>
                            {Icons.Close}
                        </div>

                    </div>
                    {children}
                </div>
            </Fade>
        </Mod>
    );
}
