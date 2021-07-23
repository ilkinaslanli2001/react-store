import {ADD_ORDER, CHANGE_ORDER, REMOVE_ORDER, SET_TOTAL} from "../types";


export const addOrder = (order) => async dispatch => {

    dispatch({
        type: ADD_ORDER,
        payload: order
    })
}
export const removeOrder = (orderId) => async dispatch => {
    dispatch({
        type: REMOVE_ORDER,
        payload: orderId
    })
}
export const changeOrder = (orderId, count, type, maxCount) => async dispatch => {
    console.log(orderId, count, type, maxCount)
    dispatch({
        type: CHANGE_ORDER,
        payload: {orderId, count, type, maxCount}
    })
}
export const setTotal = () => async dispatch => {
    dispatch({
        type: SET_TOTAL,

    })
}