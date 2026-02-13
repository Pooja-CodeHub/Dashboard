import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate(); 
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return /^\S+@\S+\.\S+$/.test(form.email) && form.password.trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Login data:", form);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* LEFT BRAND */}
        <div className="login-left">
          <h1 className="logo">
            Stationery <span>Inventory</span>
          </h1>
        </div>

        {/* RIGHT FORM */}
        <div className="login-right">
          <h2>Admin Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="field password-field">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </span>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button
              className="btn-login"
              type="submit"
              disabled={!isFormValid()}
            >
              Login
            </button>

            <div className="login-links">
              <span>Forgot Password?</span>
              <span className="divider">|</span>
              <span className="signup" onClick={() => navigate("/register")}>
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
