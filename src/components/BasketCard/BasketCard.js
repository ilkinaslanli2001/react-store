import React, {useEffect} from 'react';
import classes from "./basketCard.module.css";
import {ReactComponent as Plus} from "../../media/svg/plus.svg";
import {ReactComponent as Minus} from "../../media/svg/remove.svg";
import {ReactComponent as Remove} from "../../media/svg/cancel.svg";
import {useDispatch} from "react-redux";
import {changeOrder, removeOrder, setTotal} from "../../store/actions/basketActions";
import {MINUS, PLUS} from "../../constants";

function BasketCard({item}) {
    const dispatch = useDispatch()
    useEffect(() => {
        if (item.count === 0) {
            dispatch(removeOrder(item.id))
        }
        dispatch(setTotal())
    }, [item.count])
    return (
        <div className={classes.item}>
            <div className={classes.img_back}>
                <img src={item.image}/>
                <div onClick={() => {
                    dispatch(removeOrder(item.id))
                    dispatch(setTotal())
                }} className={classes.rmv_wrapper}>
                    <p><Remove/></p>
                </div>
            </div>
            <div className={classes.itemInfo}>
                <h1>{item.title}</h1>
                <p className={classes.price_info}>Unit Price : ${item.price}</p>
                <div className={classes.bottom}>
                    <div className={classes.count}>
                        <p onClick={() => {
                            dispatch(changeOrder(item.id, item.count, MINUS, item.max_count))
                        }}><Minus/></p>
                        <span>{item.count}</span>
                        <p onClick={() => {
                            dispatch(changeOrder(item.id, item.count, PLUS, item.max_count))
                        }}><Plus/></p>
                    </div>
                    <p className={classes.price}>${(item.price * item.count).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;