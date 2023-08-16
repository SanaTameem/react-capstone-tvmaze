import { configureStore } from "@reduxjs/toolkit";
import showsReducer from './Show/ShowSlice'
const store = configureStore({
    reducer:{
        show: showsReducer,
    }
});

export default store;