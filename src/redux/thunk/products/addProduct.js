import { addProductData } from "../../actions/productAction"

const addProduct = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/product", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()
        if(data.acknowledged){
            dispatch(addProductData({
                _id: data.insertedId,
                ...product
            }))
        }
    }
}
export default addProduct;