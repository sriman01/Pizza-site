import React from 'react'

export default function CategoryCard(props) {
  return (
    <div className=' cursor-pointer'>
        <div className='flex gap-2 bg-slate-100 w-[8rem] py-2 rounded-full'>
            <img className='shadow-xl ml-2 rounded-full w-[30px]' src={props.img} />
            <div className=' text-lg font-bold'>{props.title}</div>
            </div>
    </div>
  )
}
