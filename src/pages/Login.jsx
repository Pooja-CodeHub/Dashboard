import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // 1️⃣ Validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // 2️⃣ Dummy authentication logic
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("role", "ADMIN");
      navigate("/admin");
    } else if (email === "user@gmail.com" && password === "user123") {
      localStorage.setItem("token", "user-token");
      localStorage.setItem("role", "USER");
      navigate("/user");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <div className="auth-link">
          Don’t have an account? Register
        </div>
      </div>
    </div>
  );
};

export default Login;
