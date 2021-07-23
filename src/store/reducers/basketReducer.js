import {ADD_ORDER, CHANGE_ORDER, REMOVE_ORDER, SET_TOTAL} from "../types";
import {MINUS, PLUS} from "../../constants";
import {GetTotalAmount} from "../../commonFunctions";
import {useDispatch} from "react-redux";
import {setTotal} from "../actions/basketActions";

const initialState = {
    basket: [],
    total: 0
}
export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:

            return {
                ...state,

                basket: [...state.basket, action.payload]

            }
        case REMOVE_ORDER:
            state.basket.map((item, key) => {
                if (item.id === action.payload) {
                    state.basket.splice(key, 1)
                }

            })

        case CHANGE_ORDER:

            state.basket.map((item, key) => {
                if (item.id === action.payload.orderId) {
                    if (action.payload.type === MINUS && item.count > 0) {
                        item.count -= 1
                    } else if (action.payload.type === PLUS && item.count < action.payload.maxCount) {
                        item.count += 1
                    }

                }
            })
            return {
                ...state
            }
        case SET_TOTAL:

            var total = 0
            state.basket.forEach(item => {
                total = total + parseFloat(item.price) * parseFloat(item.count)
            })


            return {
                ...state,
                total: total
            }

        default:
            return state

    }
}