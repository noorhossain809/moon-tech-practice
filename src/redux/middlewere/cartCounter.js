import { actionTypes } from "../actionTypes";

const cartCounter = (store) => (next) => (action) => {
    const state = store.getState();
    const cart = state.product.cart;

    if(action.type === actionTypes.ADD_TO_CART){
        const newAction = {
            ...action,
            payload: {...action.payload, cartPosition: cart.length}
        }
        return next(newAction)
    }
    return next(action)
}
export default cartCounter;