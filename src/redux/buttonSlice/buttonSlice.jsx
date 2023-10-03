import {createSlice} from '@reduxjs/toolkit'


const buttonSlice = createSlice({
    name : 'counter',
    initialState : {
        counter : 0
    },

    reducers : {
        increment(state){
             state.counter += 1;
        },

        

        decrement(state){
             state.counter -= 1;
        }
    }
    
})

console.log(buttonSlice)

export const {increment, decrement} = buttonSlice.actions;
export default buttonSlice.reducer;
