const { theoryActions } = require('../theory/theorySlice.js');
const createSlice = require('@reduxjs/toolkit').createSlice;


const initialState = {
    countOfPracticalClass: 0,
}

const practicalSlice = createSlice({
    name: "practical",
    initialState,
    reducers: {
        practicalClass: (state) => {
            state.countOfPracticalClass += 1;
        },
        practicalClassCancel: (state) => {
            state.countOfPracticalClass -= 1;
        }
    },
    // extraReducers: {
    //     ['theory/theoryClassCancel']: state => {
    //         state.countOfPracticalClass -= 1;
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(theoryActions.theoryClassCancel, (state) => {
            state.countOfPracticalClass -= 1;
        }
        );
    }
});

module.exports = practicalSlice.reducer;
module.exports.practicalActions = practicalSlice.actions