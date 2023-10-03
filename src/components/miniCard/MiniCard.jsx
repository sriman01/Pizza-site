import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/buttonSlice/buttonSlice';

export default function MiniCard() {
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch();
  return (
    <div className='relative mt-30 rounded-lg bg-slate-300'>
        <div className='flex gap-4  w-[20rem] rounded-lg p-3'>
            <div className=''>
                <img className='shadow-lg rounded-full w-[5rem]' src='pic3.jpg' alt='pic-img' />
            </div>
            <div>
                <div className=' text-lg font-bold'>Pizza with Mushrooms</div>
                <div className='text-sm font-bold text-slate-500'>8 inch</div>
                <div className=' text-lg font-bold text-green-600'>$ 12</div>
            </div>
        <div className='absolute flex gap-1 mt-[3.5rem] ml-[13rem]'>
            <button onClick={() => dispatch(decrement())} className=' text-lg rounded-lg px-1 font-extrabold bg-white'><ion-icon name="remove"></ion-icon></button>
            <div className='text- rounded-lg  font-extrabold'> {counter} </div>
            <button onClick={() => dispatch(increment())} className='text-lg  rounded-lg px-1 font-extrabold bg-white'><ion-icon name="add"></ion-icon></button>
        </div>
        </div>
    </div>
  )
}
