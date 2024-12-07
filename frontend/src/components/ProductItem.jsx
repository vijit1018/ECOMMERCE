import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    console.log("ShopContextProvider initialized");


    return (
        <Link className='text-gray cursor-pointer' to={`/product/${id}`}>
            <div className='overflow'>
                <img
                    className="hover:scale-110 transition ease-in-out border border-gray-300"
                    src={image[0]}
                    alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency} {price}</p>
        </Link>
    )
}
export default ProductItem;