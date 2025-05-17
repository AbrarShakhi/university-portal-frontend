import { createSlice } from "@reduxjs/toolkit";

import {
  getStudent,
  getFaculty,
  getTutionHistory,
  getTutionFees,
  gradeReport,
} from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    studentProfile: null,
    facultyList: [],
    tuitionFees: null,
    tuitionHistory: [],

    loading: false,
    error: null,

    facultyLoading: false,
    facultyError: null,

    tuitionFeesLoading: false,
    tuitionFeesError: null,

    tuitionHistoryLoading: false,
    tuitionHistoryError: null,

    gradeReportLoading: false,
    gradeReportError: null,
  },
  reducers: {
    clearStudentProfile: (state) => {
      console.log("userSlice: Clearing student profile state.");
      state.studentProfile = null;
      state.error = null;
    },

    clearFacultyList: (state) => {
      console.log("userSlice: Clearing faculty list state.");
      state.facultyList = [];
      state.facultyError = null;
    },

    clearTuitionFees: (state) => {
      console.log("userSlice: Clearing tuition fees state.");
      state.tuitionFees = null;
      state.tuitionFeesError = null;
    },

    clearTuitionHistory: (state) => {
      console.log("userSlice: Clearing tuition history state.");
      state.tuitionHistory = [];
      state.tuitionHistoryError = null;
    },

    clearGradeReport: (state) => {
      console.log("userSlice: Clearing grade report state.");
      state.gradeReportData = null;
      state.gradeReportError = null;
    },

    setUserLoading: (state, action) => {
      console.log("userSlice: Setting general loader state to", action.payload);
      state.loading = action.payload;
    },

    setFacultyLoading: (state, action) => {
      console.log("userSlice: Setting faculty loader state to", action.payload);
      state.facultyLoading = action.payload;
    },

    setTuitionFeesLoading: (state, action) => {
      console.log(
        "userSlice: Setting tuition fees loader state to",
        action.payload,
      );
      state.tuitionFeesLoading = action.payload;
    },

    setTuitionHistoryLoading: (state, action) => {
      console.log(
        "userSlice: Setting tuition history loader state to",
        action.payload,
      );
      state.tuitionHistoryLoading = action.payload;
    },

    setGradeReportLoading: (state, action) => {
      console.log(
        "userSlice: Setting grade report loader state to",
        action.payload,
      );
      state.gradeReportLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getStudent.pending, (state) => {
        console.log("userSlice: getStudent.pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudent.fulfilled, (state, action) => {
        console.log("userSlice: getStudent.fulfilled", action.payload);
        state.loading = false;
        state.error = null;
        state.studentProfile = action.payload;
      })
      .addCase(getStudent.rejected, (state, action) => {
        console.log(
          "userSlice: getStudent.rejected",
          action.payload || action.error.message,
        );
        state.loading = false;
        state.error =
          action.payload ||
          action.error.message ||
          "Failed to fetch student profile";
        state.studentProfile = null;
      })

      .addCase(getFaculty.pending, (state) => {
        console.log("userSlice: getFaculty.pending");
        state.facultyLoading = true;
        state.facultyError = null;
      })
      .addCase(getFaculty.fulfilled, (state, action) => {
        console.log("userSlice: getFaculty.fulfilled", action.payload);
        state.facultyLoading = false;
        state.facultyError = null;
        state.facultyList = action.payload;
      })
      .addCase(getFaculty.rejected, (state, action) => {
        console.log(
          "userSlice: getFaculty.rejected",
          action.payload || action.error.message,
        );
        state.facultyLoading = false;
        state.facultyError =
          action.payload || action.error.message || "Failed to fetch faculties";
        state.facultyList = [];
      })

      .addCase(getTutionFees.pending, (state) => {
        console.log("userSlice: getTuitionFees.pending");
        state.tuitionFeesLoading = true;
        state.tuitionFeesError = null;
      })
      .addCase(getTutionFees.fulfilled, (state, action) => {
        console.log("userSlice: getTuitionFees.fulfilled", action.payload);
        state.tuitionFeesLoading = false;
        state.tuitionFeesError = null;
        state.tuitionFees = action.payload;
      })
      .addCase(getTutionFees.rejected, (state, action) => {
        console.log(
          "userSlice: getTuitionFees.rejected",
          action.payload || action.error.message,
        );
        state.tuitionFeesLoading = false;
        state.tuitionFeesError =
          action.payload ||
          action.error.message ||
          "Failed to fetch tuition fees";
        state.tuitionFees = null;
      })

      .addCase(getTutionHistory.pending, (state) => {
        console.log("userSlice: getTuitionHistory.pending");
        state.tuitionHistoryLoading = true;
        state.tuitionHistoryError = null;
      })
      .addCase(getTutionHistory.fulfilled, (state, action) => {
        console.log("userSlice: getTuitionHistory.fulfilled", action.payload);
        state.tuitionHistoryLoading = false;
        state.tuitionHistoryError = null;
        state.tuitionHistory = action.payload;
      })
      .addCase(getTutionHistory.rejected, (state, action) => {
        console.log(
          "userSlice: getTuitionHistory.rejected",
          action.payload || action.error.message,
        );
        state.tuitionHistoryLoading = false;
        state.tuitionHistoryError =
          action.payload ||
          action.error.message ||
          "Failed to fetch tuition history";
        state.tuitionHistory = [];
      })

      .addCase(gradeReport.pending, (state) => {
        console.log("userSlice: getGradeReport.pending");
        state.gradeReportLoading = true;
        state.gradeReportError = null;
      })
      .addCase(gradeReport.fulfilled, (state, action) => {
        console.log("userSlice: getGradeReport.fulfilled", action.payload);
        state.gradeReportLoading = false;
        state.gradeReportError = null;
        state.gradeReportData = action.payload;
      })
      .addCase(gradeReport.rejected, (state, action) => {
        console.log(
          "userSlice: getGradeReport.rejected",
          action.payload || action.error.message,
        );
        state.gradeReportLoading = false;
        state.gradeReportError =
          action.payload ||
          action.error.message ||
          "Failed to fetch grade report";
        state.gradeReportData = null;
      });
  },
});

export const selectStudentProfile = (state) => state.user.studentProfile;
export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;

export const selectFacultyList = (state) => state.user.facultyList;
export const selectFacultyLoading = (state) => state.user.facultyLoading;
export const selectFacultyError = (state) => state.user.facultyError;

export const selectTuitionFees = (state) => state.user.tuitionFees;
export const selectTuitionFeesLoading = (state) =>
  state.user.tuitionFeesLoading;
export const selectTuitionFeesError = (state) => state.user.tuitionFeesError;

export const selectTuitionHistory = (state) => state.user.tuitionHistory;
export const selectTuitionHistoryLoading = (state) =>
  state.user.tuitionHistoryLoading;
export const selectTuitionHistoryError = (state) =>
  state.user.tuitionHistoryError;

export const selectGradeReportData = (state) => state.user.gradeReportData;
export const selectGradeReportLoading = (state) =>
  state.user.gradeReportLoading;
export const selectGradeReportError = (state) => state.user.gradeReportError;

export const {
  clearStudentProfile,
  clearFacultyList,
  clearTuitionFees,
  clearTuitionHistory,
  clearGradeReport,
  setTuitionFeesLoading,
  setTuitionHistoryLoading,
  setGradeReportLoading,
  setUserLoading,
  setFacultyLoading,
} = userSlice.actions;

export default userSlice.reducer;
