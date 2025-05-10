import { Link } from "react-router-dom";
import "../../styles/auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-top">
          <h2>Login to Get Started</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="auth-form">
            <form>
              <input
                type="text"
                placeholder="Email or Phone number"
                name="auth"
              />
              <input type="password" placeholder="Password" name="password" />
              <button>Log In</button>
            </form>
            <Link className="forgot-password">Forgot Password</Link>
          </div>
        </div>

        <div className="bottom">
          <Link className="active-account">Active account</Link>
        </div>
      </div>

      <div className="img-wrapper"></div>
    </div>
  );
};

export default Login;
