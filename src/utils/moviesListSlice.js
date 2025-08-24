import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailer: []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addtrailersVideos: (state, action) => {
            state.trailer = action.payload
        }
    }
})
export const {addNowPlayingMovies, addtrailersVideos} = moviesSlice.actions
export default moviesSlice.reducer