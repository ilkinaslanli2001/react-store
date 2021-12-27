import React from 'react'
import classes from './orderCard.module.css'

export default function OrderCard({order}) {

    return (
        <div className={classes.order_card_wrapper}>

            <div className={classes.img_bcg}>
                <img lazy={"loading"} alt={order.title} src={order.image}/>
            </div>
            <div className={classes.info}>
                <h1>{order.title}</h1>
                <p>{order.description}</p>
                <div className={classes.prices}>
                    <span className={classes.current_price}>${order.current_price}</span>
                    {order.discount_price !== 0 &&
                    <span className={classes.discount_price}>${order.discount_price}</span>}
                </div>
            </div>
        </div>
    )
}
