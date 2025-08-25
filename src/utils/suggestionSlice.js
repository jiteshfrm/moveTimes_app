import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: 'suggestion Movies',
    initialState: {
        suggestedMovies: null,
        movieName: null
    },
    reducers: {
        addSuggestedMovies: (state, action) => {
            const {movieName, movieResult} = action.payload
            state.movieName = movieName
            state.suggestedMovies = movieResult
        }
    }
})
export const {addSuggestedMovies} = suggestionSlice.actions
export default suggestionSlice.reducer