import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/auth/authApiSlice";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    auth: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    const checkAuthStatus = async () => {
      const baseUrl = "/api/v1/auth/std-home";

      try {
        await axios.get(baseUrl);

        navigate("/");
      } catch (error) {
        console.error("Auth check failed:", error.message);
      }
    };

    checkAuthStatus();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoading(true);

    dispatch(loginUser(formData));
    const loginUrl = "/api/v1/auth/login";

    try {
      const response = await axios.post(loginUrl, formData);

      navigate("/");
    } catch (error) {
      console.error("Login failed response:", error.response.data);
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

              <button type="submit">Log In</button>
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
