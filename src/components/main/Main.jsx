import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import Card from '../card/Card';
import SideBar from '../sidebar/SideBar';
import BigCard from '../bigCard/BigCard';
import CategoryCard from '../categoryCard/CategoryCard';
import Top from '../top/Top';
import RightBar from '../rightBar/RightBar';
import { allProductHandler } from '../../redux/buttonSlice/buttonSlice';
import products from '../../assets/products';



export default function Main() {
  
  const dispatch = useDispatch();
  const cartItem = products.slice(0, 2);
  return (

    <div className='flex  justify-start gap-10 mt-10 mb-10'>
      <SideBar />
      <div>
        
          <Top />
        
        <BigCard />
        <div className='flex gap-[2rem] mt-10'>
          <h2 className=' rounded-full shadow-lg py-2 px-4 text-lg font-bold'>Our Menu</h2>
          <CategoryCard title = {'Classic'} img={'pic3.jpg'}/>
          <CategoryCard title={'mixed'} img={'pic1.jpg'} />
          <CategoryCard title={'crunchy'} img={'pic4.jpg'} />
          <h2 onClick={() => dispatch(allProductHandler())} className='cursor-pointer py-2 px-4 text-lg text-orange-500 font-bold'>See All</h2>
        </div>
        <div className='flex gap-10 mt-10'>
            {cartItem.map((item) => {
                const desc = item.desc.slice(0,20);
                return(
                    <Card key={item.id} img={item.img} price={item.price} desc={desc} name={item.name} />
                )
            })}
        </div>
      </div>
   <div className=''>
    <RightBar />
   </div>
    </div>


  )
}
