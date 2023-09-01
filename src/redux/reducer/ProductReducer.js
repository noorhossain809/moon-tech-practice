import { actionTypes } from "../actionTypes";

const initialState = {
    cart: [],
    products: []
};

const productReducer = (state = initialState, action) => {
    console.log(state)
    const selectedProduct = state.cart.find((product) => product._id === action.payload._id)
    console.log(selectedProduct)
    switch(action.type){
        case actionTypes.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case actionTypes.LOAD_PRODUCT:
            return{
                ...state,
                products: action.payload
            }
        case actionTypes.ADD_TO_CART:
            if(selectedProduct){
               const newCart = state.cart.filter((product) => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity + 1
               return{
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return{
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            if(selectedProduct.quantity > 1){
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity - 1

                return{
                    ...state,
                    cart: [...newCart, selectedProduct]
                }   
            }
            return{
                ...state,
                cart: state.cart.filter((product) => product._id !== action.payload._id)
            }     
        default:
            return state;
    }
}

export default productReducer;