import React, {useState} from 'react';
import classes from './signin.module.css'
import {ReactComponent as Logo} from '../../media/svg/ikea.svg'
import {ReactComponent as PasswordHide} from '../../media/svg/hide.svg'
import {ReactComponent as PasswordVisible} from '../../media/svg/view.svg'
import CloseButton from "../CloseButton/CloseButton";


function SignIn(props) {
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div className={classes.signinWrapper}>
            <CloseButton/>
            <div className={classes.logo}><Logo/></div>
            <p className={classes.title}>Login with your email and password</p>
            <div className={classes.inputs}>
                <div className={classes.input_block}>
                    <span>Email</span>
                    <input className={classes.email_input}/>
                </div>
                <div className={classes.input_block}>
                    <span>Password</span>
                    <div className={classes.password_container}>
                        <input type={passwordVisible ? "text" : "password"}/>
                        <p onClick={() => {
                            setPasswordVisible(!passwordVisible)
                        }}>{passwordVisible ? <PasswordVisible/> : <PasswordHide/>}</p>
                    </div>
                    <button>Sign In</button>
                    <p className={classes.link}>Forgot password ? </p>
                    <p className={classes.link}>Not registered ?</p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;