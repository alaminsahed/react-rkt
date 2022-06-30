import { createSlice } from '@reduxjs/toolkit'
import { theoryClassCancel } from '../theory/theorySlice';

const initialState = {
    countOfPracticalClass: 10,
}

const practicalSlice = createSlice({
    name: "practical",
    initialState,
    reducers: {
        practicalClass: (state, actions) => {
            state.countOfPracticalClass += actions.payload;
        },
        practicalClassCancel: (state, actions) => {
            state.countOfPracticalClass -= actions.payload;
        }

    },
    extraReducers: builder => {
        builder.addCase(theoryClassCancel, (state) => {
            state.countOfPracticalClass -= 1;
        }
        );
    }

});

export const { practicalClass, practicalClassCancel } = practicalSlice.actions

export default practicalSlice.reducer