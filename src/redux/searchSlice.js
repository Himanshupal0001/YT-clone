import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],

}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addVideos: (state, action) => {
            state.data.push(action.payload);
        }
    },
})

export const { addVideos } = searchSlice.actions;
export default searchSlice.reducer;