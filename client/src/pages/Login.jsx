import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import API_BASE from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/auth/login`, {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/checkins";
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="row justify-content-center auth-page">
      <div className="col-md-6 col-lg-5">
        <h2 className="mb-4">Login</h2>

        <form onSubmit={handleLogin} className="card p-4 shadow-sm auth-card">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>

          {message && <p className="mt-3 mb-2 text-danger">{message}</p>}

          <p className="mt-2 mb-0">
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;