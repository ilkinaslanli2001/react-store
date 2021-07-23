import React, {useEffect, useState} from 'react';
import classes from './checkbox.module.css'
import {ReactComponent as Tick} from "../../media/svg/tick.svg";
import {addUserFilter, removeUserFilter} from "../../commonFunctions";
import {useDispatch, useSelector} from "react-redux";
import {addFilter, removeFilter} from "../../store/actions/simpleActions";

const Checkbox = ({title}) => {
    const {user_filters} = useSelector((state) => state.simpleReducer)
    const dispatch = useDispatch()
    return (
        <div onClick={() => {

            if (!user_filters.includes(title)) {
                dispatch(addFilter(title))
            } else dispatch(removeFilter(title))


        }} className={classes.checkbox}>
            <div className={[classes.tick_wrapper, user_filters.includes(title) && classes.active].join(" ")}>
                {user_filters.includes(title) && <Tick/>}
            </div>
            <p>{title}</p>
        </div>
    );
}

export default Checkbox;