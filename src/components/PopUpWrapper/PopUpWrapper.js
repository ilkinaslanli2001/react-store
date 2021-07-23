import React from 'react';
import classes from './popUpWrapper.module.css'

function PopUpWrapper({children, right_corner = false, left_corner = false}) {
    return (
        <div
            className={[classes.popup_wrapper, right_corner && classes.right_corner, left_corner && classes.left_corner].join(" ")}>
            {children}
        </div>
    );
}

export default PopUpWrapper;