const { actionTypes } = require("../actionTypes")


export const addProductData = (data) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: data
    }
}
export const loadProductData = (data) => {
    return{
        type: actionTypes.LOAD_PRODUCT,
        payload: data
    }
}
export const add_to_cart = (product) => {
    return{
        type : actionTypes.ADD_TO_CART,
        payload : product
    }
}

export const remove_from_cart = (product) => {
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    }
}