import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCartVisible } from '../../redux/buttonSlice/buttonSlice';

export default function SideBar() {
   const dispatch = useDispatch();
  return (
    <div className='hidden md:flex flex-col gap-10 justify-center rounded-lg bg-slant-100 shadow-xl  mt-0 ml-2  px-5'>
        <div onClick={() => dispatch(updateCartVisible())} className='block  lg:hidden cursor-pointer text-3xl text-red-600 rounded-lg p-1'><ion-icon name="cart"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400 '><ion-icon name="contact"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="wallet"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="build"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="mail-open"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="call"></ion-icon></div>
        
    </div>
  )
}
