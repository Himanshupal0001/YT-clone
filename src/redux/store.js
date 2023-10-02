import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import suggestionReducer from "./suggestionSlice";
import searchReducer from "./searchSlice";
import chatSliceReducer from './liveChatSlice'
const store = configureStore({
    reducer: {
        menu: menuReducer,
        suggestions: suggestionReducer,
        search: searchReducer,
        chat: chatSliceReducer
    }
})

export default store;