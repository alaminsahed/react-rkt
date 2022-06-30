import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countOfTheoryClass: 10,
}

const theorySlice = createSlice({
    name: "theory",
    initialState,
    reducers: {
        theoryClass: (state, actions) => {
            state.countOfTheoryClass += actions.payload;
        },
        theoryClassCancel: (state, actions) => {
            state.countOfTheoryClass -= actions.payload;
        }
    }
});

export const { theoryClass, theoryClassCancel } = theorySlice.actions

export default theorySlice.reducer