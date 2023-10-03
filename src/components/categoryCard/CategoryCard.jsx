import React from 'react'

export default function CategoryCard() {
  return (
    <div className=' cursor-pointer'>
        <div className='flex gap-2 bg-slate-100 w-[100px] py-2 rounded-full'>
            <img className='shadow-xl ml-2 rounded-full w-[30px]' src='/pic2.jpg' />
            <div className=' text-lg font-bold'>Pizza</div>
            </div>
    </div>
  )
}
