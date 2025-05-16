import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authApiSlice";

import {
  selectAuthStatus,
  selectAuthError,
  selectAuthLoading,
} from "../../features/auth/authSlice";

const Login = () => {
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);
  const authLoading = useSelector(selectAuthLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    auth: "",
    password: "",
  });

  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/std-home");
    }

    const checkAuthStatus = async () => {
      const baseUrl = "/api/v1/auth/std-home";

      if (authStatus === "idle") {
        try {
          await axios.get("http://localhost:8000" + baseUrl, {
            withCredentials: true,
          });
        } catch (error) {
          console.error("Auth check failed:", error.message);
        }
      }
    };

    checkAuthStatus();
  }, [authStatus, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resultAction = await dispatch(loginUser(formData)).unwrap();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-top">
          <h2>Login to Get Started</h2>
          <p>Enter your details to access your account.</p>
          <div className="auth-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email or Phone number"
                name="auth"
                value={formData.auth}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {authLoading && <p>Logging in...</p>}

              {authStatus === "failed" && authError && (
                <p className="error-message">{authError}</p>
              )}

              <button type="submit" disabled={authLoading}>
                {authLoading ? "Logging In..." : "Log In"}{" "}
              </button>
            </form>

            <Link to="/forgot-password" className="forgot-password">
              Forgot Password
            </Link>
          </div>
        </div>

        <div className="bottom">
          <Link to="/activate-account" className="active-account">
            Activate account
          </Link>
        </div>
      </div>
      <div className="img-wrapper"></div>
    </div>
  );
};

export default Login;
