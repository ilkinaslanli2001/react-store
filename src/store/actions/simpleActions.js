import {
    LOADING_FALSE,
    LOADING_TRUE,
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



export const closeAllPopUp = () => async dispatch =>{
    dispatch({
        type: BASKET_HIDE,

    })
    dispatch({
        type:ORDER_HIDE
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

