import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        }
        )
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
            state.error = null
        }
        )
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
            state.users = []
        }
        )
    }
});

//export const {} = userSlice.actions

export default userSlice.reducer