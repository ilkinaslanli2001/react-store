import React, {useEffect, useState} from 'react';
import classes from "./orderDetail.module.css";
import CloseButton from "../CloseButton/CloseButton";
import {ReactComponent as Plus} from "../../media/svg/plus.svg";
import {ReactComponent as Minus} from "../../media/svg/remove.svg";
import {AddOrder, MinusOrder} from "../../commonFunctions";
import {BLACK, ORANGE, RED, WHITE} from "../../constants";
import {addOrder} from "../../store/actions/basketActions";
import {useDispatch} from "react-redux";
import {setOrderPopUp} from "../../store/actions/simpleActions";

function OrderDetail({selectedOrder}) {

    const dispatch = useDispatch()
    const [userColor, setUserColor] = useState("")
    const [userCount, setUserCount] = useState(0)
    const [orderCount, setOrderCount] = useState(0)
    const [userSize, setUserSize] = useState("")
    const [buttonActive, setButtonActive] = useState(false)
    const onSizeClick = (size, count) => {
        setUserCount(0)
        setUserSize(size)
        setOrderCount(count)
    }
    const onAddToBasketClick = () => {
        console.log(orderCount)
        if (buttonActive === true) {
            dispatch(addOrder({
                "id": selectedOrder.id,
                "color": userColor,
                "size": userSize,
                "count": userCount,
                "title": selectedOrder.title,
                "price": selectedOrder.current_price,
                "image": selectedOrder.image,
                "max_count": orderCount
            }))
            dispatch(setOrderPopUp(false))
        }

    }
    useEffect(() => {
        if (userCount !== 0 && userColor !== "" && userSize !== "") {
            setButtonActive(true)
        } else setButtonActive(false)
    }, [userCount, userColor, userColor])
    return (
        <div className={classes.wrapper}>
            <CloseButton/>
            <img alt={selectedOrder.title} src={selectedOrder.image}/>
            <div className={classes.details}>
                <h1>{selectedOrder.title}</h1>
                <p className={classes.description}>{selectedOrder.description}</p>
                <div className={classes.prices}>
                    <span className={classes.current_price}>${selectedOrder.current_price}</span>
                    {selectedOrder.discount_price !== 0 &&
                    <span className={classes.discount_price}>${selectedOrder.discount_price}</span>}
                </div>
                <div className={classes.sizes_wrapper}>
                    <h3>Size</h3>
                    <div className={classes.sizes}>
                        {Object.keys(selectedOrder.sizes).map((size, key) => {
                            return Object.values(selectedOrder.sizes)[key] !== 0 ? <div onClick={() => {
                                onSizeClick(size, Object.values(selectedOrder.sizes)[key])
                            }} key={key} className={[classes.size, size === userSize && classes.activeSize].join(" ")}>
                                <span>{size}</span>
                            </div> : <div key={key} className={[classes.size, classes.noactive].join(" ")}>
                                <span>{size}</span>
                            </div>
                        })}


                    </div>

                </div>
                <div className={classes.colors_wrapper}>
                    <h3>Color</h3>
                    <div className={classes.colors}>
                        <div onClick={() => {
                            setUserColor(BLACK)
                        }}
                             className={[classes.color, classes.black, userColor === BLACK && classes.activeColor].join(" ")}>

                        </div>
                        <div onClick={() => {
                            setUserColor(ORANGE)
                        }}
                             className={[classes.color, classes.orange, userColor === ORANGE && classes.activeColor].join(" ")}>

                        </div>
                        <div onClick={() => {
                            setUserColor(RED)
                        }} className={[classes.color, classes.red, userColor === RED && classes.activeColor].join(" ")}>

                        </div>
                        <div onClick={() => {
                            setUserColor(WHITE)
                        }}
                             className={[classes.color, classes.white, userColor === WHITE && classes.activeColor].join(" ")}>

                        </div>
                    </div>

                </div>
                <div className={classes.bottom}>
                    <div className={classes.count_wrapper}>
                        <p onClick={() => {
                            MinusOrder(orderCount, userCount, setUserCount)
                        }}><Minus/></p>
                        <span className={classes.count}>{userCount}</span>
                        <p onClick={() => {
                            AddOrder(orderCount, userCount, setUserCount)
                        }}><Plus/></p>
                    </div>
                    <button onClick={() => {
                        onAddToBasketClick()
                    }} className={!buttonActive && classes.noactive}>ADD TO BASKET
                    </button>
                </div>

            </div>

        </div>
    );
}

export default OrderDetail;