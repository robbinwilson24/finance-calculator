import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({

    name: "counter",

    // set initial state as 1000 (which will be the starting balance)
    initialState: {
        value: 1000
    },

    // create the reducers for all the required actions
    reducers: {

        withdrawAmount: (state, action) => {
            if ((state.value - action.payload) < 0) {
                alert(`Insufficient funds to withdraw £${action.payload}. \n\nAvailable Funds: £${state.value}.`)
            }
            else if ((state.value - action.payload) >= 0) {
                state.value -= action.payload;
            }
        },

        depositAmount: (state, action) => {
            state.value += action.payload;
        },

        addInterest: (state) => {
            if (state.value <= 0) {
                alert(`Insufficient funds in account. \n\nNo interest will be applied` )
            }
            else { 
                state.value = (state.value * 1.05)
            }
        },

        addCharges: (state) => {
            if (state.value <= 0) {
                alert(`Insufficient funds in account for charges to be applied.`)
            }
            else {
                state.value = (state.value * 0.85)
            }
        },

    },
});

// export the reducers
export const {withdrawAmount, depositAmount, addInterest, addCharges} = counterSlice.actions;

export default counterSlice.reducer;