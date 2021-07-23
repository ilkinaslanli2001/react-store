import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from './wrapper.module.css'
import MobileNavigation from "./MobileNavigation/MobileNavigation";

function Wrapper({children}) {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <div className={classes.main}>
                {children}
            </div>
            <Footer/>
            <MobileNavigation/>
        </div>
    );
}

export default Wrapper;