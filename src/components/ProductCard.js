import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { add_to_cart, remove_from_cart } from "../redux/actions/productAction";



const ProductCard = ({product}) => {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  return (
    <div
      className=' relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
    >
     {pathname.includes("cart") && <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
          <p>{product.quantity}</p>
    </div>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt='' />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: 6</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {
            product.keyFeature.map((feature) => <li key={feature._id}>{feature}</li>)
          }
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
     
        {pathname.includes("cart") ? <button
          onClick={() => dispatch(remove_from_cart(product))}
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
         
        >
           Remove
        </button>
        :
        <button
          onClick={() => dispatch(add_to_cart(product))}
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
         
        >
           Add to cart
        </button>}
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;