import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    isLoggedIn: (()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const loginTime = localStorage.getItem('loginTime');
        const oneHour = 60*60*1000;
        if(isLoggedIn && loginTime && (Date.now() - Number(loginTime)) < oneHour){
            return true;
        }

        localStorage.setItem('isLoggedIn',false)
        localStorage.removeItem('loginTime');
        return false;
    })(),
}

export const logoutUser = createAsyncThunk('/logout',async()=>{
    const response = axiosInstance.post('/user/logout');
    toast.promise(response, {
        success: "Logout successful",
        loading: 'Logging you out...',
        error: "Logout failed. Please try again"
    })
    const apiResponse = await response
    return apiResponse.data;
})

export const loginUser = createAsyncThunk('/user/login', async(data) => {
    try {
        const response = axiosInstance.post('/user/login',data);
    toast.promise(response, {
        success: "Login successful",
        loading: 'Logging you in...',
        error: "Login failed. Please try again"
    })
    const apiResponse = await response;
    return apiResponse.data;
    } catch (error) {
        console.log(error);
    }
    
})
export const signupUser = createAsyncThunk('/user/signup', async(data) => {
    try {
        const response = axiosInstance.post('/user',data);
        toast.promise(response,{
            success: "Signup successful",
            loading: 'Signing you up...',
            error: "Signup failed. Please try again"
        })
        const apiResponse = await response;
        return apiResponse.data;
    } catch (error) {
        console.log(error);
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
                .addCase(loginUser.fulfilled, (state,action) => {
                    state.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('loginTime', Date.now());
                })
                .addCase(logoutUser.fulfilled, (state,action) => {
                    state.isLoggedIn = false;
                    localStorage.setItem('isLoggedIn', 'false');
                    localStorage.removeItem("loginTime");
                })
                
    }
})

export default AuthSlice.reducer;