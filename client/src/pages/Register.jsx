import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API_BASE from "../api";

function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/auth/register`, {
        displayName,
        email,
        password
      });

      setMessage(res.data.message || "Registration successful");

      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="row justify-content-center auth-page">
      <div className="col-md-6 col-lg-5">
        <h2 className="mb-4">Register</h2>

        <form onSubmit={handleRegister} className="card p-4 shadow-sm auth-card">
          <div className="mb-3">
            <label className="form-label">Display Name</label>
            <input
              className="form-control"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your display name"
              required
            />
          </div>

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

          <button className="btn btn-success w-100" type="submit">
            Register
          </button>

          {message && <p className="mt-3 mb-2">{message}</p>}

          <p className="mt-2 mb-0">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;