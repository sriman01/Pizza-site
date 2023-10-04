import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className=' bg-slate-200 shadow-md pt-8'>
                <div className='flex justify-center items-center'>
                    <div className=' -mr-6'>
                        <img className='w-[6rem] rounded-full' src='/profile.jpeg' alt='profile image' />
                    </div>
                    <div className='text-3xl font-extrabold text-orange-500 bg-slate-200 px-2 rounded-lg'>Pizza- Center</div>
                </div>
                <div className='flex justify-center gap-12 mt-10'>
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold '>ADDRESS</div>
                        <div className='flex gap-1 w-[14rem]'>
                            <div className='text-lg text-orange-500'><ion-icon name="pin"></ion-icon></div>
                            <p className='text-slate-400'>IIIT Ranchi New Campus Khelgaon, 834004 - Ranchi, Jharkhand</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold'>BOOK A TABLE</div>
                        <div className='flex gap-1 w-[14rem]'>
                            {/* <div className='text-lg text-orange-500'><ion-icon name="pin"></ion-icon></div> */}
                            <p className='text-slate-400'>Come and Enjoy Delicious Pizza from Our Store.</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-xl font-bold '>OPENING HOURS</div>
                        <div className='flex flex-col items-center gap-1 w-[14rem]'>
                            {/* <div className='text-lg text-orange-500'><ion-icon name="time"></ion-icon></div> */}
                            <p className='text-slate-400'>10:00 AM - 11:00 PM</p>
                            <p className='text-slate-400'>MONDAY - FRIDAY</p>
                        </div>
                    </div>

                </div>
                 <div className='outline outline-1 mt-6 outline-slate-700'></div>
                <div className='flex justify-around mt-8'>
                    <div className=' text-slate-400'>&copy; Pizza-Center All Rights Reserved. Developed By <span className=' text-orange-500 font-bold'>Sriman</span></div>
                    <div className='flex gap-2 text-xl text-orange-500'>
                        <div className=' cursor-pointer'><ion-icon name="logo-facebook"></ion-icon></div>
                        <div className=' cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></div>
                        <div className=' cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
