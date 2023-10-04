import React from 'react'

export default function () {
    const desc = "Join us today to savor the essence of Italy right in your neighborhood. It's time to elevate your pizza experience with the taste that lingers and memories that last."
    const desc2 = desc.slice(0, 50)
    return (
        <div className='px-3'>
            <div className='flex justify-around gap-5 bg-slate-700  lg:w-[95%] overflow-hidden rounded-xl ml-5 px-2'>
                <div className='flex flex-col justify-center w-[60%]'>
                    <div className='md:text-2xl font-bold text-white'>Make Your First Order</div>
                    <div className='md:text-2xl font-bold text-white'>and get <span className=' text-orange-500'>50% off</span></div>
                    <div className='whitespace-pre-wrap flex flex-wrap mt-3 mb-1.5 text-slate-400'>{desc2}</div>
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