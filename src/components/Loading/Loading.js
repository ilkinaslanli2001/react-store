import React from 'react';
import classes from './loading.module.css'

function Loading(props) {
    return (
        <div className={classes.loading}>

            <div className={classes.loader}></div>

        </div>
    );
}

export default Loading;