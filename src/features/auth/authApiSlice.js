import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/auth/std-home",
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(
        "Frontend (authApiSlice): formData received in thunk:",
        formData,
      );
      const requestBody = {
        id: formData.auth,
        password: formData.password,
      };

      console.log(
        "Frontend (authApiSlice): Request body being sent:",
        requestBody,
      );

      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        requestBody,
        {
          withCredentials: true,
        },
      );

      console.log(
        "Frontend (authApiSlice): Login successful, received data:",
        response.data,
      );
      return response.data;
    } catch (error) {
      console.error("Frontend (authApiSlice): Login API call failed:", error);

      if (error.response) {
        console.error(
          "Frontend (authApiSlice): Login API Error Response Data:",
          error.response.data,
        );
        console.error(
          "Frontend (authApiSlice): Login API Error Status:",
          error.response.status,
        );

        return rejectWithValue(error.response.data.message || "Login failed");
      } else if (error.request) {
        console.error(
          "Frontend (authApiSlice): Login Network Error: No response received",
          error.request,
        );
        return rejectWithValue("Network error. Please try again.");
      } else {
        console.error(
          "Frontend (authApiSlice): Login Request Setup Error:",
          error.message,
        );
        return rejectWithValue("An unexpected error occurred.");
      }
    }
  },
);
