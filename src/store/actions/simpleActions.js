import {
    LOADING_FALSE,
    LOADING_TRUE,
    SIGNIN_HIDE,
    SIGNIN_VISIBLE,
    ORDER_VISIBLE,
    ORDER_HIDE,
    BASKET_VISIBLE, BASKET_HIDE,
    ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS
} from '../types'


export const setLoading = (loadingState) => async dispatch => {

    dispatch({
        type: loadingState ? LOADING_TRUE : LOADING_FALSE,
    })
}
export const setOrderPopUp = (orderPopUpState) => async dispatch => {

    dispatch({
        type: orderPopUpState ? ORDER_VISIBLE : ORDER_HIDE,
    })
}
export const setBasket = (basketState) => async dispatch => {

    dispatch({
        type: basketState ? BASKET_VISIBLE : BASKET_HIDE,
    })
}

export const setSignIn = (signInState) => async dispatch => {
    console.log(signInState)
    dispatch({
        type: signInState ? SIGNIN_VISIBLE : SIGNIN_HIDE,
    })
}
export const addFilter = (filter) => async dispatch => {
    dispatch({
        type: ADD_FILTER,
        payload: filter
    })

}
export const removeFilter = (filter) => async dispatch => {
    dispatch({
        type: REMOVE_FILTER,
        payload: filter
    })

}
export const clearFilters = () => async dispatch => {
    dispatch({
        type: CLEAR_FILTERS
    })
}

