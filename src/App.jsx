import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import Main from './components/main/Main';
import AllProducts from './components/allProducts/AllProducts';
import Footer from './components/footer/Footer';


export default function App() {
  const {counter, allProductFlag} = useSelector(state => state.counter);
  console.log(allProductFlag)
  return (
      <>
         <Main />
         {allProductFlag ?
         <div>
            <AllProducts /> 
         </div> 
         : ''}
         <Footer />
      </>
  )
}
