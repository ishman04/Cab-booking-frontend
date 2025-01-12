import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/UserAuthSlice"
import CaptainAuthSliceReducer from './Slices/CaptainAuthSlice'

const store = configureStore({
    reducer: {
        userAuth: AuthSliceReducer,
        captainAuth : CaptainAuthSliceReducer,
    },
    devTools: true
})

export default store;