import React from 'react'

export default function (props) {
    return (
        <div>
            <div className='flex gap-5 bg-slate-100  overflow-hidden rounded-xl'>
                <div className=' -mt-5 -ml-10 '>
                    <img className='rounded-full w-40 ' src='/pic1.jpg' alt='item-img' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-xl font-bold'>{props.name}</div>
                    <div className='text-xl font-bold'>{props.subName}</div>
                    <div className=' mb-1 text-slate-400'>{props.time} minutes</div>
                    <div className='text-xl font-semibold text-green-600'>${props.price}</div>
                </div>
                <div className=' cursor-pointer text-4xl bottom-0 right-0 mt-[100px] mr-3 text-slate-400'>
                    <ion-icon name="add-circle"></ion-icon>
                </div>
            </div>
        </div>
    )
}

