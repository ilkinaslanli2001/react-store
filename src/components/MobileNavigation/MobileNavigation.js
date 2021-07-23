import React from 'react';
import classes from './mobileNavigation.module.css'
import basket_classes from '../Header/header.module.css'
import {ReactComponent as BasketIcon,} from "../../media/svg/shopping-basket.svg";
import {ReactComponent as HomeIcon} from "../../media/svg/home-icon.svg";
import {ReactComponent as SearchIcon} from "../../media/svg/search.svg";
import {ReactComponent as UserIcon} from "../../media/svg/user.svg";
import {setBasket} from "../../store/actions/simpleActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function MobileNavigation(props) {
    const dispatch = useDispatch()
    const {basket_visible} = useSelector((state) => state.simpleReducer)
    const {basket} = useSelector((state) => state.basketReducer)
    return (
        <div className={classes.wrapper}>
            {/*<p><SearchIcon /></p>*/}
            <Link to={'/'}><p><HomeIcon/></p></Link>
            <p onClick={() => {
                dispatch(setBasket(!basket_visible))
            }} className={basket_classes.basket}><BasketIcon/>
                <div className={basket_classes.count}>{basket.length}</div>
            </p>
            {/*<p><UserIcon /></p>*/}
        </div>
    );
}

export default MobileNavigation;