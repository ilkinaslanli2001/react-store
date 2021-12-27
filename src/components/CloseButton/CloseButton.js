import React from 'react';
import classes from "./closeButton.module.css";
import {ReactComponent as Cancel} from "../../media/svg/cancel.svg";
import {setOrderPopUp, setSignIn, setBasket, closeAllPopUp} from '../../store/actions/simpleActions'
import {useDispatch, useSelector} from "react-redux";

const CloseButton = () => {
    const dispatch = useDispatch()
    const onCloseClick = () => {
        dispatch(closeAllPopUp())
    }
    return (
        <p onClick={onCloseClick} className={classes.close}><Cancel/></p>
    );
}

export default CloseButton;
