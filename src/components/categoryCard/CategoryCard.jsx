import React from 'react'

export default function CategoryCard(props) {
  return (
    <div className=' min-w-[100px] w-[20%] cursor-pointer '>
        <div className='flex justify-evenly  items-center  bg-slate-100  py-2 rounded-3xl'>
            <img className='shadow-xl rounded-full w-[30%]' src={props.img} />
            <div className=' text-lg font-bold '>{props.title}</div>
          </div>
    </div>
  )
}
