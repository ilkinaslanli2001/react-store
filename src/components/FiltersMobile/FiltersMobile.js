import React from 'react';
import classes from './filtersMobile.module.css'
import {ReactComponent as LeftArrow} from "../../media/svg/left.svg";
import SideBox from "../SideBox/SideBox";
import {useDispatch, useSelector} from "react-redux";

function FiltersMobile({setFilterMobileOpen}) {

    return (
        <div className={[classes.wrapper].join(" ")}>
            <div className={classes.top}>
                <p onClick={() => {
                    setFilterMobileOpen(false)
                }}><LeftArrow/></p>
                <h1>Filters</h1>
            </div>
            <div className={classes.body}>
                <SideBox/>
            </div>
        </div>
    );
}

export default FiltersMobile;