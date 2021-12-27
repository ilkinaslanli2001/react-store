import {
    LOADING_FALSE,
    LOADING_TRUE,
    ORDER_HIDE,
    ORDER_VISIBLE,
    BASKET_HIDE,
    BASKET_VISIBLE,
    REMOVE_FILTER,
    ADD_FILTER, REMOVE_ORDER, CLEAR_FILTERS
} from '../types'

const initialState = {
    user_filters: [],
    loading: true,
    signin_visible: false,
    order_visible: false,
    basket_visible: false
}

export const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return {
                ...state,
                user_filters: [...state.user_filters, action.payload]
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                user_filters: []
            }
        case REMOVE_FILTER:

            state.user_filters.forEach((userFilter, key) => {

                if (userFilter === action.payload) {
                    state.user_filters.splice(key, 1)
                }
            })
            return {
                ...state
            }
        case LOADING_TRUE:

            return {
                ...state,
                loading: true
            }
        case LOADING_FALSE:
            return {
                ...state,
                loading: false
            }

        case ORDER_HIDE:

            return {
                ...state,
                order_visible: false
            }
        case ORDER_VISIBLE:

            return {
                ...state,
                order_visible: true
            }
        case BASKET_VISIBLE:

            return {
                ...state,
                basket_visible: true
            }
        case BASKET_HIDE:

            return {
                ...state,
                basket_visible: false
            }
        default:
            return state
    }
}
