import {createSlice} from '@reduxjs/toolkit'


const buttonSlice = createSlice({
    name : 'counter',
    initialState : {
        search : '',
        cart : [],
        allProductFlag : false,
        menuVisible : false,
        cartVisible: false
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
        }, 
        updateMenuVisible(state){
            state.menuVisible = !state.menuVisible;
        },
        updateCartVisible(state){
               state.menuVisible = false;
               state.cartVisible = !state.cartVisible;
        }
    }
    
})

export const {addToCart, deleteFromCart, allProductHandler, updateSearch, updateCartVisible, updateMenuVisible} = buttonSlice.actions;
export default buttonSlice.reducer;
