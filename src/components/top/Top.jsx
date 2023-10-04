import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateMenuVisible, updateSearch } from '../../redux/buttonSlice/buttonSlice';

export default function Top() {
    const search = useSelector(state => state.counter.search)
    const dispatch = useDispatch();
     
    // console.log(search)

    return (
        <div className='mb-10'>
            <div className='flex justify-around w-[100%]'>
                <div className='flex items-center gap-3 '>
                    <div onClick = {() => dispatch(updateMenuVisible())}  className='text-3xl md:hidden'>
                      <ion-icon name="menu"></ion-icon>
                    </div>
                    <div>
                        <div className='font-semibold text-slate-500'>Hello Sriman</div>
                        <div className=' text-xl font-bold'>Welcome Back</div>
                    </div>
                </div>
                <div className='flex items-center bg-slate-300 w-[120px] md:w-[200px] rounded-lg py-1 h-[40px]'>
                    <div className='text-2xl pl-2 pr-1  text-slate-500'><ion-icon name="search"></ion-icon></div>
                    <input className='font-semibol w-[100px] outline-none bg-transparent border-none text-xl text-slate-500 '
                        value={search}
                        onChange={(e) => dispatch(updateSearch(e.target.value))}
                        type='text'
                        name='filter'
                        placeholder='Search' />
                </div>
            </div>
        </div>
    )
}
