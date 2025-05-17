import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudent = createAsyncThunk(
  "user/getStudent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/std-profile",
        {
          withCredentials: true,
        },
      );

      console.log(
        "Frontend (authApiSlice): getStudent fulfilled",
        response.data,
      );

      return response.data;
    } catch (error) {
      if (error.response) {
        console.error(
          "Frontend (authApiSlice): getStudent Error Response Data:",
          error.response.data,
        );
      } else {
        console.error(
          "Frontend (authApiSlice): getStudent Request Setup Error:",
          error.message,
        );
      }
    }
  },
);

export const getFaculty = createAsyncThunk(
  "user/getFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/list-faculty",
        {
          withCredentials: true,
        },
      );

      console.log(
        "Frontend (userApiSlice): getFaculty fulfilled",
        response.data,
      );

      return response.data;
    } catch (error) {
      console.error("Frontend (userApiSlice): getFaculty failed:", error);

      if (error.response) {
        console.error(
          "Frontend (userApiSlice): getFaculty Error Response Data:",
          error.response.data,
        );

        return rejectWithValue(
          error.response.data.message || "Failed to fetch faculties",
        );
      } else {
        console.error(
          "Frontend (userApiSlice): getFaculty Request Setup Error:",
          error.message,
        );
      }
    }
  },
);

export const getTutionFees = createAsyncThunk(
  "user/getTutionFess",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/tution-fees",
        {
          withCredentials: true,
        },
      );

      return response.data;
    } catch (error) {
      console.error("Frontend (userApiSlice): getTuitionFees failed:", error);

      if (error.response) {
        console.error(
          "Frontend (userApiSlice): getTuitionFees Error Response Data:",
          error.response.data,
        );
        console.error(
          "Frontend (userApiSlice): getTuitionFees Error Status:",
          error.response.status,
        );
      } else {
        console.error(
          "Frontend (userApiSlice): getTuitionFees Request Setup Error:",
          error.message,
        );
      }
    }
  },
);

export const getTutionHistory = createAsyncThunk(
  "user/getTutionHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/tution-history",
        {
          withCredentials: true,
        },
      );

      console.log(
        "Frontend (userApiSlice): getTuitionHistory fulfilled",
        response.data,
      );

      return response.data;
    } catch (error) {
      console.error(
        "Frontend (userApiSlice): getTuitionHistory failed:",
        error,
      );

      if (error.response) {
        console.error(
          "Frontend (userApiSlice): getTuitionHistory Error Response Data:",
          error.response.data,
        );
      } else {
        console.error(
          "Frontend (userApiSlice): getTuitionHistory Request Setup Error:",
          error.message,
        );
      }
    }
  },
);

export const gradeReport = createAsyncThunk(
  "user/gradeReport",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/grade-report",
        {
          withCredentials: true,
        },
      );

      console.log(
        "Frontend (userApiSlice): getGradeReport fulfilled",
        response.data,
      );

      return response.data.data;
    } catch (error) {
      console.error("Frontend (userApiSlice): getGradeReport failed:", error);

      if (error.response) {
        console.error(
          "Frontend (userApiSlice): getGradeReport Error Response Data:",
          error.response.data,
        );
      } else {
        console.error(
          "Frontend (userApiSlice): getGradeReport Request Setup Error:",
          error.message,
        );
      }
    }
  },
);
