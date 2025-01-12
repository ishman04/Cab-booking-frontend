import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
  isLoggedIn: (() => {
    const isLoggedIn = localStorage.getItem("captainIsLoggedIn") === "true";
    const loginTime = localStorage.getItem("captainLoginTime");
    const oneHour = 60 * 60 * 1000;
    if (isLoggedIn && loginTime && Date.now() - Number(loginTime) < oneHour) {
      return true;
    }

    localStorage.setItem("captainIsLoggedIn", false);
    localStorage.removeItem("captainLoginTime");
    return false;
  })(),
};

export const logoutCaptain = createAsyncThunk("/captain/logout", async () => {
  const response = axiosInstance.post("/captain/logout");
  toast.promise(response, {
    success: "Logout successful",
    loading: "Logging you out...",
    error: "Logout failed. Please try again",
  });
  const apiResponse = await response;
  return apiResponse.data;
});

export const loginCaptain = createAsyncThunk("/captain/login", async (data) => {
  try {
    const response = axiosInstance.post("/captain/login", data);
    toast.promise(response, {
      success: "Login successful",
      loading: "Logging you in...",
      error: "Login failed. Please try again",
    });
    const apiResponse = await response;
    return apiResponse.data;
  } catch (error) {
    console.log(error);
  }
});

export const signupCaptain = createAsyncThunk("/captain", async (data) => {
  try {
    const response = axiosInstance.post("/captain", data);
    toast.promise(response, {
      success: "Signup successful",
      loading: "Signing you up...",
      error: "Signup failed. Please try again",
    });
    const apiResponse = await response;
    return apiResponse.data;
  } catch (error) {
    console.log(error);
  }
});

const CaptainAuthSlice = createSlice({
  name: "captainAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginCaptain.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        localStorage.setItem("captainIsLoggedIn", "true");
        localStorage.setItem("captainLoginTime", Date.now());
      })
      .addCase(logoutCaptain.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        localStorage.setItem("captainIsLoggedIn", "false");
        localStorage.removeItem("captainLoginTime");
      });
  },
});

export default CaptainAuthSlice.reducer;
