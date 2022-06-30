const createSlice = require('@reduxjs/toolkit').createSlice;


const initialState = {
    countOfTheoryClass: 0,
}

const theorySlice = createSlice({
    name: "theory",
    initialState,
    reducers: {
        theoryClass: (state) => {
            state.countOfTheoryClass += 1;
        },
        theoryClassCancel: (state) => {
            state.countOfTheoryClass -= 1;
        }
    }
});

module.exports = theorySlice.reducer;
module.exports.theoryActions = theorySlice.actions