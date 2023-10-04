import React, {useEffect, useRef} from 'react'
import MiniCard from '../miniCard/MiniCard'
import { useSelector } from 'react-redux'

export default function RightBar() {
    
    const cartItems = useSelector(state => state.counter.cart);
    const TotalPrice = cartItems.reduce((accu, curr) => accu + curr.price, 0)

    return (
        <div className=' w-[22rem] px-1 pb-4 shadow-lg rounded-lg'>
            <div className='flex justify-between items-center w-[20rem]'>
                <div className='flex items-center gap-5 w-[12rem]'>
                    <div>
                        <img className='rounded-full w-[3rem] h-[3rem] shadow-md' src='/profile.jpeg' alt='profile-pic' />
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

              <div className='flex justify-between'>

                <div className='ml-1 text-2xl font-bold pb-3'> Cart Items</div>
                <div className='mr-3 mt-1 text-orange-500 text-xl font-bold pb-3'>Qnt: {cartItems.length}</div>
              </div>
            
            <div
             className='w-[22rem] h-[16rem]  overflow-y-scroll'>
                {cartItems.length > 0 ? cartItems.map((item) => {
                    const desc = item.desc.slice(0, 30)
                return (       
                    <MiniCard key={item.id} id= {item.id} name={item.name} price={item.price} desc={desc} />
                ) 
              }) : 
              <div className='flex justify-center mt-10'>
                 <div><img className='h-40 animate-bounce transition-all ' src='/empty_cart.png' /></div>
              </div>
              
              }
            </div>
            <div className='flex justify-between  w-[20rem] mt-10'>
                <div className='text-2xl font-bold text-green-800 '> Total Price</div>
                <div className='text-xl font-bold text-green-500'>$ {TotalPrice}</div>
            </div>
            <div className='flex w-[20rem] justify-center mt-8'>
                <button className=' bg-orange-500 text-lg  font-bold  text-slate-200 px-4 py-1 rounded-lg'>
                    CheckOut
                </button>
            </div>

        </div>
    )
}
