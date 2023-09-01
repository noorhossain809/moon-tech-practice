/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { toggleBrand, toggleStock } from '../redux/actions/filterAction';
import { actionTypes } from '../redux/actionTypes';
import loadProduct from '../redux/thunk/products/loadProduct';

const Home = () => {
    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.product.products)
    const filter = useSelector((state) => state.filter.filters)
    const {brands, stock} = filter
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProduct())
    }, [])

    let content;
    if(products?.length){
      content = products.map((product) => <ProductCard key={product._id} product={product} />)
    }
    if(products?.length && (stock || brands.length)){
      content = products.filter((product) => {
        if(stock){
          return product.status === true
        }
        return product
      })
      .filter((product) => {
        if(brands.length){
          return brands.includes(product.brand)
        }
        return product
      })
      .map((product) => <ProductCard key={product._id} product={product} />)
    }
    const activeClass = "text-white  bg-indigo-500 border-white";
    return (
        <div className='container max-w-7xl gap-14 mx-auto px-16 my-4'>
            <div className='mb-4 flex justify-end gap-5 mx-4'>
          <button
          onClick={() => dispatch(toggleStock())}
            className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null}`}
          >
            In Stock
          </button>
          <button
          onClick={() => dispatch(toggleBrand("amd"))}
           className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null}`}>
            AMD
          </button>
          <button 
          onClick={() => dispatch(toggleBrand("intel"))}
           className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("intel") ? activeClass : null}`}>
            Intel
          </button>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                content
            }
        </div>
        </div>
    );
};

export default Home;