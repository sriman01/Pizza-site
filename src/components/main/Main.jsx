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
import PopupSideBar from '../popupSidebar/PopupSidebar';
import Modal from '../modal/Modal';
import PopCart from '../popCart/PopCart'



export default function Main() {
  const menuVisible = useSelector(state => state.counter.menuVisible)
  const cartVisible = useSelector(state => state.counter.cartVisible)
  const dispatch = useDispatch();
  const cartItem = products.slice(0, 2);
  console.log(menuVisible)
  return (

    <div className='flex gap-2 z-0'>
    
        {menuVisible &&  <Modal><PopupSideBar/></Modal>}
        {cartVisible &&  <Modal><PopCart/></Modal>}
      
         <SideBar />
      <div className='mt-10'>
        
          <Top />
        
        <BigCard />
        <div className='flex flex-wrap h-250px lg:h-[15%] gap-5 items-center sm:flex-row justify-center w-[100%] mt-5 mb-5'>
          <div className=' rounded-full shadow-inner py-2 px-4 text-lg font-bold'>Our Menu</div>
          <CategoryCard title = {'Classic'} img={'pic3.jpg'}/>
          <CategoryCard title={'mixed'} img={'pic1.jpg'} />
          <CategoryCard title={'crunchy'} img={'pic4.jpg'} />
          <h2 onClick={() => dispatch(allProductHandler())} className='cursor-pointer py-2 px-4 text-lg text-orange-500 font-bold'>See All</h2>
        </div>
        <div className='m-2 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[3%] xs:grid-cols-1'>
            {cartItem.map((item) => {
                const desc = item.desc.slice(0,20);
                return(
                    <Card key={item.id} img={item.img} price={item.price} desc={desc} name={item.name} />
                )
            })}
        </div>
      </div>
    <div className='hidden lg:block'>
    <RightBar />
      </div>
    </div>
    


  )
}
