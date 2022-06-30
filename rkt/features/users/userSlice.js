const axios = require('axios');
const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk

const initialState = {
    loading: false,
    users: [],
    error: null,
}


const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading = false
            state
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
            state.users = []

        })
    }
});


module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser