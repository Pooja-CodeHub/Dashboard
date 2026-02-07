import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authService"; // ✅ FIXED
import "../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await registerUser({
        email: form.email,
        password: form.password,
      });

      alert("Registration successful 🎉");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setErrors({
        general: "User already exists or server error",
      });
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="logo">
          Stationery <span>Inventory</span>
        </h2>

        {errors.general && (
          <p className="error" style={{ textAlign: "center" }}>
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                placeholder="Enter your first name"
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                placeholder="Enter your last name"
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="row">
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

            <div className="field">
              <label>Mobile</label>
              <input
                name="mobile"
                value={form.mobile}
                placeholder="Enter your mobile"
                onChange={handleChange}
              />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
          </div>

          <div className="field">
            <label>Address</label>
            <input
              name="address"
              value={form.address}
              placeholder="Enter your address"
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="row">
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                placeholder="Confirm your password"
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="btn-row">
            <button type="submit" className="btn-register">
              Register
            </button>

            <button
              type="button"
              className="btn-back"
              onClick={() => navigate("/login")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
