import React from 'react'
import MiniCard from '../miniCard/MiniCard'

export default function RightBar() {
    return (
        <div className=' w-[22rem] px-4 pb-4 shadow-lg rounded-lg'>
            <div className='flex justify-between items-center w-[20rem]'>
                <div className='flex items-center gap-5 w-[12rem]'>
                    <div>
                        <img className='rounded-full w-[3rem] shadow-md' src='pic2.jpg' alt='profile-pic' />
                    </div>
                    <div className=' text-xl font-bold'>Sriman</div>
                </div>
                <div className=' cursor-pointer text-3xl'>
                    <ion-icon name="notifications-outline"></ion-icon>
                </div>
            </div>
            <div className='mt-5 w-[20rem]'>
                <img src='cart.png' />
            </div>

            <div className='flex justify-between w-[20rem]'>
                <div className='text-2xl font-bold'> Order Menu</div>
                <div className=' cursor-pointer text-xl font-bold text-orange-500'> See All</div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5 mt-10 w-[20rem]'>
                <MiniCard />
                <MiniCard />
            </div>
            <div className='flex justify-between  w-[20rem] mt-10'>
                <div className='text-2xl font-bold text-green-800 '> Total Price</div>
                <div className='text-xl font-bold text-green-500'>$ 52.00</div>
            </div>
            <div className='flex w-[20rem] justify-center mt-8'>
                <button className=' bg-orange-500 text-lg  font-bold  text-slate-200 px-4 py-1 rounded-lg'>
                    CheckOut
                </button>
            </div>

        </div>
    )
}
