import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/buttonSlice/buttonSlice';

export default function (props) {
    const dispatch = useDispatch();
    return (
        <div className=''>
          <div className='relative grid grid-cols-3  bg-slate-100 overflow-hidden rounded-xl mx-2 md:mx-0'> 
            <div className='col-span-1 -mt-2 -ml-10 md:-ml-20'>
              <img className='rounded-full w-40' src={props.img} alt='item-img' />
            </div>
            <div className='col-span-2 p-4'>
              <div className='text-xl xl:text-2xl font-bold whitespace-nowrap'>{props.name}</div>
              <div className='text-slate-400 whitespace-nowrap'>{props.desc}..</div>
              <div className='text-xl font-semibold text-green-600'>${props.price}</div>
            </div>
            <div onClick={() => dispatch(addToCart(props))} className='absolute bottom-1 right-1 cursor-pointer text-4xl text-slate-400'>
              <ion-icon name="add-circle"></ion-icon>
            </div>
          </div>
        </div>
      );
      
}

