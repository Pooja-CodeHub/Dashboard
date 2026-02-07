import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authService";
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
    setErrors({ ...errors, [e.target.name]: "" });
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

  const isFormValid = () =>
    /^\S+@\S+\.\S+$/.test(form.email) &&
    form.password.trim().length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await loginUser(form); // 🔐 cookie set by backend
      navigate("/overview");
    } catch (error) {
      setErrors({ general: "Invalid email or password" });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-left">
          <h1 className="logo">
            Stationery <span>Inventory</span>
          </h1>
        </div>

        <div className="login-right">
          <h2>Admin Login</h2>

          {errors.general && (
            <p className="error" style={{ textAlign: "center" }}>
              {errors.general}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                value={form.email}
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
                value={form.password}
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
