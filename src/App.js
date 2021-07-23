import classes from './App.module.css';

import store from './store/store'
import { Provider} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Home from "./components/Home/Home";
import Wrapper from "./components/Wrapper";
import React from "react";
import ContactUs from "./components/ContacUs/ContactUs";

const App = () => {
    return <div className={classes.main}>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Wrapper><Home/></Wrapper>
                    </Route>
                    <Route exact path='/contact-us'>
                        <Wrapper><ContactUs/></Wrapper>
                    </Route>
                </Switch>
            </Router></Provider></div>
}

export default App
