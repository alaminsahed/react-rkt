import { configureStore } from "@reduxjs/toolkit";
import theorySlice from "../features/theory/theorySlice";
import practicalSlice from "../features/practical/practicalSlice";
import usersSlice from "../features/users/userSlice";

const store = configureStore({
    reducer: {
        theory: theorySlice,
        practical: practicalSlice,
        users: usersSlice,

    }
});


export default store;