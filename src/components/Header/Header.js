import React, {useEffect} from 'react'
import Logo from '../../media/svg/ikea.svg'
import classes from "./header.module.css"
import {ReactComponent as BasketIcon} from "../../media/svg/shopping-basket.svg"
import {useDispatch, useSelector} from 'react-redux'
import { setBasket} from '../../store/actions/simpleActions'
import PopUpWrapper from "../PopUpWrapper/PopUpWrapper";
import SignIn from "../SignIn/SignIn";
import Basket from "../Basket/Basket";
import {Link} from "react-router-dom";


export default function Header() {
    const {order_visible, signin_visible, basket_visible} = useSelector((state) => state.simpleReducer)
    const {basket} = useSelector((state) => state.basketReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (order_visible || signin_visible || basket_visible) {
            document.body.style.overflow = "hidden"
            document.body.style.touchAction = "none";
            document.documentElement.style.overflow = "hidden"
            document.documentElement.style.touchAction = "none";

        } else {
            document.documentElement.style.touchAction = "auto";
            document.body.style.touchAction = "auto"
            document.documentElement.style.overflow = "auto"
            document.body.style.overflow = "auto"
        }
    }, [signin_visible, order_visible, basket_visible])


    return (
        <div className={classes.header_wrapper}>
            {signin_visible ? <PopUpWrapper><SignIn/></PopUpWrapper> : false}
            {basket_visible ? <PopUpWrapper right_corner={true}><Basket/></PopUpWrapper> : false}
            <div className={classes.header}>
                <Link to={'/'}><img className={classes.logo} src={Logo}></img></Link>
            </div>
            <div className={classes.right_corner}>
                {/*<p><Search/></p>*/}
                <p onClick={() => {
                    dispatch(setBasket(!basket_visible))
                }} className={classes.basket}><BasketIcon/>
                    <div className={classes.count}>{basket.length}</div>
                </p>
                {/*<p onClick={() => {*/}
                {/*    dispatch(setSignIn(true));*/}
                {/*}} className={classes.signin}>Sign In</p>*/}
            </div>

        </div>
    )
}
