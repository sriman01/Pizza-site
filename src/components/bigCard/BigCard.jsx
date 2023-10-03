import React from 'react'

export default function () {
    return (
        <div>
            <div className='flex justify-around gap-5 bg-slate-700 w-[45rem]  overflow-hidden rounded-xl'>
                <div className='flex flex-col justify-center w-[60%]'>
                    <div className='text-2xl font-bold text-white'>Make Your First Order</div>
                    <div className='text-2xl font-bold text-white'>and get <span className=' text-orange-500'>50% off</span></div>
                    <div className='whitespace-pre-wrap flex flex-shrink mt-3 mb-1.5 text-slate-400'>Join us today to savor the essence of Italy right in your neighborhood. It's time to elevate your pizza experience with the taste that lingers and memories that last.</div>
                <div>
                    <button className='rounded-lg text-md mr-3 w-[200px] py-2 px-3 text-slate-600 font-bold mt-3 bg-orange-500'> Order Now</button>
                </div>
                </div>
                <div className=' -mt-5 -mr-40 '>
                    <img className='rounded-full w-80 ' src='/pic1.jpg' alt='item-img' />
                </div>
            </div>
        </div>
    )
}