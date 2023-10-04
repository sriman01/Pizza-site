import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/buttonSlice/buttonSlice';

export default function (props) {
    const dispatch = useDispatch();
    return (
        <div>
            <div className='flex gap-5 bg-slate-100  overflow-hidden rounded-xl'>
                <div className=' -mt-1 -ml-12 '>
                    <img className='rounded-full w-40 ' src={props.img} alt='item-img' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-xl font-bold whitespace-nowrap'>{props.name}</div>
                    <div className=' text-slate-400 whitespace-nowrap'>{props.desc}..</div>
                    <div className='text-xl font-semibold text-green-600'>${props.price}</div>
                </div>
                <div onClick={() => dispatch(addToCart(props))} className=' cursor-pointer text-4xl bottom-0 right-0 mt-[100px] mr-3 text-slate-400'>
                    <ion-icon name="add-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

