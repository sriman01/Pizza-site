import React from 'react'
import { useDispatch } from 'react-redux'
import { updateMenuVisible , updateCartVisible} from '../../redux/buttonSlice/buttonSlice'
export default function PopupSideBar() {
    const dispatch = useDispatch();
  return (
    <div className='fixed mt-4  bg-slate-200 w-[200px] px-10 py-5 rounded-xl transition-transform transform transition-delay-1000 transition-duration-500 '>
     <div onClick={() => dispatch(updateMenuVisible())}  className='relative top-0 text-2xl font-bold text-red-500'> <ion-icon name="close"></ion-icon> </div>
      <div className='flex flex-col gap-10 justify-center rounded-lg   mt-3 py-10 '>
        <div onClick = {() => dispatch(updateCartVisible())} className='block lg:hidden cursor-pointer text-3xl text-red-600 rounded-lg p-1'><ion-icon name="cart"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400 '><ion-icon name="contact"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="wallet"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="build"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="mail-open"></ion-icon></div>
        <div className='cursor-pointer text-3xl text-slate-400'><ion-icon name="call"></ion-icon></div>
        
     </div>
    </div>
  )
}
