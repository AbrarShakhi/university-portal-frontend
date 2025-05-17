import React from "react";
import "../../styles/home.css";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="left">
          <div className="left-menu">
            <ul>
              <li>
                <NavLink
                  to="welcome"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/std-home/accounts-ledger">Profile</NavLink>
              </li>

              <li>
                <NavLink to="/std-home/profile">Advising</NavLink>
              </li>

              <li>
                <NavLink to="/std-home/faculty">Accounts Ledger</NavLink>
              </li>

              <li>
                <NavLink to="/std-home/courses">Course Schedule</NavLink>
              </li>

              <li>
                <NavLink to="/std-home/grade-report">Faculty</NavLink>
              </li>
              <li>
                <NavLink to="/std-home/evaluation">Faculty Evaluation</NavLink>
              </li>
              <li>
                <NavLink to="/std-home/evaluation">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/std-home/evaluation">CGPA calculator</NavLink>
              </li>
              <li>
                <NavLink to="/std-home/evaluation">Change Password</NavLink>
              </li>
              <li>
                <button className="logout-button">Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
