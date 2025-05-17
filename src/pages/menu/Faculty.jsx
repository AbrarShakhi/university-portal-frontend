import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFaculty } from "../../features/user/userApiSlice";

import {
  selectFacultyList,
  selectFacultyLoading,
  selectFacultyError,
} from "../../features/user/userSlice";

import "../../styles/faculty.css";

const Faculty = () => {
  const dispatch = useDispatch();

  const facultyList = useSelector(selectFacultyList);
  const loading = useSelector(selectFacultyLoading);
  const error = useSelector(selectFacultyError);

  useEffect(() => {
    dispatch(getFaculty());
  }, [dispatch]);

  useEffect(() => {
    if (facultyList && facultyList.length > 0) {
      console.log(
        "Faculty.jsx useEffect: Faculty list data available:",
        facultyList,
      );
    } else {
      console.log("Faculty.jsx useEffect: Faculty list is empty or null.");
    }
  }, [facultyList]);

  return (
    <div className="profile-container">
      <h2>Faculty List</h2>

      {loading && <p>Loading faculties...</p>}

      {facultyList && facultyList.length > 0 ? (
        <div className="profile-table-header">
          <table className="profile-table">
            <thead className="head">
              <tr>
                <th>Name</th>
                <th>Faculty ID</th>
                <th>Email</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody className="body">
              {facultyList.map((faculty) => (
                <tr key={faculty.id || faculty.faculty_short_id}>
                  <td data-label="Name">{faculty.full_name}</td>
                  <td data-label="Faculty ID:">{faculty.faculty_short_id}</td>
                  <td data-label="Email:">{faculty.email || "N/A"}</td>
                  <td data-label="Department:">{faculty.dept_short_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="user">
            <p>No faculties found.</p>
          </div>
        )
      )}
    </div>
  );
};

export default Faculty;
