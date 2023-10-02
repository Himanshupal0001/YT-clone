import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: 'search',
    initialState: {
        suggesionList: {}
    },
    reducers: {
        cacheResults: (state, action) => {
            state.suggesionList = { ...action.payload, ...state.suggesionList }
        }
    }

})

export const { cacheResults } = suggestionSlice.actions;
export default suggestionSlice.reducer;