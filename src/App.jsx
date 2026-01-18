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
         Ramu Kaka phir se
      </div>
      // <PopupSideBar />
      // <PopCart />
  )
}
