import React from 'react';
import classes from './basket.module.css'
import CloseButton from "../CloseButton/CloseButton";
import {useSelector} from "react-redux";
import BasketCard from "../BasketCard/BasketCard";
import {Link} from "react-router-dom";


function Basket(props) {

    const {basket, total} = useSelector((state) => state.basketReducer)
    return (
        <div className={classes.basket_wrapper}>
            <div className={classes.top}>
                <h1>Shopping Cart</h1>
                <CloseButton/>
            </div>
            <div className={classes.items}>
                {
                    basket.map((item, key) => {
                        return <BasketCard item={item} key={key}/>
                    })
                }

            </div>
            {total !== 0 ?
                <Link className={classes.btn} to={'/'}><span>Proceed to Checkout</span><span>${total.toFixed(2)}</span></Link> :
                <button className={classes.noactive}><span>Proceed to Checkout</span> <span>${total.toFixed(2)}</span>
                </button>}
        </div>
    );
}

export default Basket;