import React from 'react';
import classes from "./result.module.css";
import {SUCCESS} from "../../constants";

const  Result = ({type}) => {

    return (
        <div className={classes.wrapper}>
            <p className={type===SUCCESS? classes.success :classes.error}>{type===SUCCESS ? "successfully delivered":"something went wrong"}</p>
        </div>
    );
}

export default Result;