import {createSlice} from '@reduxjs/toolkit'


const buttonSlice = createSlice({
    name : 'counter',
    initialState : {
        search : '',
        cart : [],
        allProductFlag : true,
    },

    reducers : {
        addToCart(state, action){
             state.cart.push(action.payload);
        },

        deleteFromCart(state, action){
             console.log(action.payload.id)
             state.cart = state.cart.filter((item) => item.id !== action.payload.id)  
        },

        allProductHandler(state){
              state.allProductFlag = !state.allProductFlag;
        },

        updateSearch(state, action){
            state.search = action.payload;
        }
    }
    
})

export const {addToCart, deleteFromCart, allProductHandler, updateSearch} = buttonSlice.actions;
export default buttonSlice.reducer;
