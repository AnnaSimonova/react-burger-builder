import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return(
        <div className={classes.Backdrop} style={{display: props.visibility ? 'block' : 'none'}} onClick={props.closeModal}></div>
    )
};

export default backdrop;
