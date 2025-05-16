import React, { useState } from "react";
import "../../styles/auth.css";

import {
  selectAuthStatus,
  selectAuthError,
  selectAuthLoading,
} from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const Activation = () => {
  const authStatus = useSelector(selectAuthStatus);
  const authError = useSelector(selectAuthError);
  const authLoading = useSelector(selectAuthLoading);

  const [formData, setFormData] = useState({
    auth: "",
    password: "",
  });

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-top">
          <h2>Activate your Account</h2>
          <p>Enter your details to activate your account.</p>

          <div className="auth-form">
            <form>
              <input
                type="text"
                placeholder="Student ID"
                name="auth"
                //value={formData.auth}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                //value={formData.password}
                required
              />

              {authLoading && <p>Activating...</p>}

              {/* {authStatus === "failed" && authError && (
                <p className="error-message">{authError}</p>
              )} */}

              <button type="submit" disabled={authLoading}>
                {authLoading ? "Activating..." : "Activate"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="img-wrapper"></div>
    </div>
  );
};

export default Activation;
