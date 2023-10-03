import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/buttonSlice/buttonSlice';
import TrialButton from './components/trialButton';
import Card from './components/card/Card';
import SideBar from './components/sidebar/SideBar';
import BigCard from './components/bigCard/BigCard';
import CategoryCard from './components/categoryCard/CategoryCard';
import Top from './components/top/Top';
import MiniCard from './components/miniCard/MiniCard';
import RightBar from './components/rightBar/RightBar';


export default function App() {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  // console.log(counter)
  return (

    <div className='flex  justify-start gap-10 mt-10 mb-10'>
      <SideBar />
      <div>
        
          <Top />
        
        <BigCard />
        <div className='flex gap-[1.5rem] mt-10'>
          <h2 className=' rounded-full shadow-lg py-2 px-4 text-lg font-bold'>Our Menu</h2>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <h2 className='cursor-pointer py-2 px-4 text-lg text-orange-500 font-bold'>See All</h2>
        </div>
        <div className='flex gap-10 mt-10'>
          <Card price={15} time={'14-15'} name={'Pizza'} subName={'with Peperoni'} />
          <Card price={15} time={'14-15'} name={'Pizza'} subName={'with Peperoni'} />
        </div>
      </div>
   <div className=''>
    <RightBar />
   </div>
    </div>


  )
}
