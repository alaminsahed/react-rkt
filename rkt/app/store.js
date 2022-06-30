const configureStore = require('@reduxjs/toolkit').configureStore;
const theoryReducer = require('../features/theory/theorySlice')
const practicalReducer = require('../features/pactrical/pactricalSlice');
const usersReducer = require('../features/users/userSlice');


const store = configureStore({
    reducer: {
        theory: theoryReducer,
        practical: practicalReducer,
        users: usersReducer,
    }
});

module.exports = store;