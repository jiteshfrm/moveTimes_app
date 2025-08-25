import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import moviesReducer from './moviesListSlice';
import searchReducer from './searchSlice';
import suggestionSearch from './suggestionSlice'

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesReducer,
        search: searchReducer,
        suggestionSearch: suggestionSearch
    }
})
export default appStore;