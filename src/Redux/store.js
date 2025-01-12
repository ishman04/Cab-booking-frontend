import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/UserAuthSlice"

const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
    devTools: true
})

export default store;