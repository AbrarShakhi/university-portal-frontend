import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser, loginUser } from "./authApiSlice";

// Function to safely get and parse user from localStorage
const safelyGetUserFromLocalStorage = () => {
  try {
    const userJson = localStorage.getItem("user");

    // **FIXED:** Add an explicit check for the literal string "undefined"
    // Also check if the item exists and is a string before parsing
    if (!userJson || typeof userJson !== "string" || userJson === "undefined") {
      // If item doesn't exist, is not a string, or is the literal string "undefined", return null
      return null;
    }

    // Attempt to parse the JSON string
    const user = JSON.parse(userJson);

    // Optional: Add a check here if the parsed 'user' object has expected properties
    // to ensure it's not just an empty object or primitive if that's not expected.
    // For example: if (user && typeof user === 'object' && user !== null && user.id) { ... }

    return user;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    // Clear the invalid item from localStorage to prevent future errors
    localStorage.removeItem("user");
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: safelyGetUserFromLocalStorage(),
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setLogout: (state) => {
      state.message = null;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      //   .addCase(logoutUser.rejected, (state, action) => {
      //     state.error = action.error.message;
      //   })
      //   .addCase(logoutUser.fulfilled, (state, action) => {
      //     state.message = action.payload.message;
      //     state.user = null;
      //     localStorage.removeItem("user");
      //   })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;

export const selectUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthMessage = (state) => state.auth.message;
export const selectAuthLoading = (state) => state.auth.loader;

export const selectAuthStatus = (state) => {
  if (state.auth.loader) return "loading";
  if (state.auth.user) return "succeeded";
  if (state.auth.error) return "failed";
  return "idle";
};

// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
