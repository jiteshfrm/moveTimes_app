import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        showSearch: false
    },
    reducers: {
        updateSearchModel: (state, action) => {
            state.showSearch = !state.showSearch
        }
    }
})

export const {updateSearchModel} = searchSlice.actions
export default searchSlice.reducer