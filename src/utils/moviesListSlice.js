import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailer: [],
        PopularMovies: null,
        topRated: null,
        upComing: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addtrailersVideos: (state, action) => {
            state.trailer = action.payload
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upComing = action.payload
        }
    }
})
export const {addNowPlayingMovies, addtrailersVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer