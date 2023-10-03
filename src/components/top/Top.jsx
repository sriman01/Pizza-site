import React from 'react'

export default function Top() {
    return (
        <div className='mb-10'>
            <div className='flex justify-between w-[45rem]'>
                 <div>
                    <div className='font-semibold text-slate-500'>Hello Sriman</div>
                    <div className=' text-xl font-bold'>Welcome Back</div>
                </div>
                <div className='flex items-center bg-slate-300 w-[250px] rounded-lg py-1 h-[40px]'>
                    <div className='text-2xl pl-2 pr-1  text-slate-500'><ion-icon name="search"></ion-icon></div>
                    <input className='font-semibol w-[200px] outline-none bg-slate-300 border-none text-xl text-slate-500 'type='text' placeholder='Search' />
                </div>
            </div>
        </div>
    )
}