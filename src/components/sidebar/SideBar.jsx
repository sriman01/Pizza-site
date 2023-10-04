import React from 'react'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-10 justify-center rounded-lg bg-slant-100 shadow-xl py-30 mt-0 ml-2  px-5'>
        <div className='cursor-pointer text-3xl text-red-600 bg-red-300 rounded-lg p-1'><ion-icon name="book"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400 '><ion-icon name="contact"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="wallet"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="build"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="mail-open"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="call"></ion-icon></div>
        
    </div>
  )
}
