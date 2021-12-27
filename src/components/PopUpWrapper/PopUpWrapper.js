import React from 'react';
import classes from './popUpWrapper.module.css'
import {useDispatch} from "react-redux";
import {closeAllPopUp} from "../../store/actions/simpleActions";

function PopUpWrapper({children, right_corner = false, left_corner = false}) {
    const dispatch = useDispatch()
    return (
        <div onClick={()=>{dispatch(closeAllPopUp())}}
            className={[classes.popup_wrapper, right_corner && classes.right_corner, left_corner && classes.left_corner].join(" ")}>
            {children}
        </div>
    );
}

export default PopUpWrapper;
