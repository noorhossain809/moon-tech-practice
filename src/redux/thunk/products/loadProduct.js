import { loadProductData } from "../../actions/productAction"

const loadProduct = (data) => {
    return async(dispatch, getState) => {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()

        if(data.data.length){
            dispatch(loadProductData(data.data))
        }
    }
}
export default loadProduct;