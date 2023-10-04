import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import Main from './components/main/Main';
import AllProducts from './components/allProducts/AllProducts';
import Footer from './components/footer/Footer';
import PopupSideBar from './components/popupSidebar/PopupSidebar';
import PopCart from './components/popCart/PopCart'

export default function App() {
  const {counter, allProductFlag} = useSelector(state => state.counter);
  console.log(allProductFlag)
  return (
      <div className='flex flex-col'>
         <Main  />
         {allProductFlag ?
         <div className='w-[100%]'>
            <AllProducts /> 
         </div> 
         : ''}
         <Footer />
      </div>
      // <PopupSideBar />
      // <PopCart />
  )
}
