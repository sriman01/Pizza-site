import {configureStore } from '@reduxjs/toolkit'
import buttonReducer from './buttonSlice/buttonSlice';

const store = configureStore({
    reducer :{
       counter : buttonReducer
    }
})

export default store;