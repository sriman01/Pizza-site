import React from 'react'
import products from '../../assets/products'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/buttonSlice/buttonSlice';

export default function () {
    const dispatch = useDispatch();
    const search = useSelector(state => state.counter.search);
    
    return (
        <div className='flex flex-wrap gap-10 justify-center  mt-10 shadow-inner py-10'>
            {products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => {
                let desc = item.desc.slice(0, 20)
                return(
                <div key={index} className='relative flex items-center gap-5 bg-slate-100  overflow-hidden rounded-xl w-1/4'>
                    <div className=' -mt-3 -ml-10 w-40'>
                        <img className=' rounded-full ' src={item.img} alt='item-img' />
                    </div>
                    <div className='flex flex-col justify-center py-8'>
                        <div className='text-xl font-bold whitespace-pre-wrap'>{item.name}</div>
                        {/* <div className='text-xl font-bold'>{item.name}</div> */}
                        <div className=' mb-1 text-slate-400 whitespace-pre-wrap'>{desc}...</div>
                        <div className='text-xl font-semibold text-green-600'>${item.price}</div>
                    </div>
                    <div
                     onClick={() => dispatch(addToCart(item))}
                     className='absolute cursor-pointer text-4xl bottom-1 right-1 text-slate-400'>
                        <ion-icon name="add-circle"></ion-icon>
                    </div>
                </div>
                )

            })}

        </div>
    )
}

