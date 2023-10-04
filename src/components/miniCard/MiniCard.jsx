import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../../redux/buttonSlice/buttonSlice';

export default function MiniCard({id, name, desc, price}) {
    const cart = useSelector(state => state.counter.cart)
    console.log(cart)
    const dispatch = useDispatch();
  return (
    <div className='relative mt-2 rounded-lg bg-slate-300'>
        <div className='flex gap-4  w-[20rem] rounded-lg p-3'>
            <div className=''>
                <img className='shadow-lg rounded-full w-[5rem]' src='pic3.jpg' alt='pic-img' />
            </div>
            <div>
                <div className=' text-lg font-bold'>{name}</div>
                <div className='text-sm font-bold text-slate-500'>{desc}</div>
                <div className=' text-lg font-bold text-green-600'>${price}</div>
            </div>
        </div>
        <div className='absolute bottom-1 right-2 flex gap-1 '>
                <div onClick={() => dispatch(deleteFromCart({id, name, desc, price}))} className=' text-orange-700 cursor-pointer text-lg mt-1.5'><ion-icon name="trash"></ion-icon></div> 
        </div>
    </div>
  )
}
