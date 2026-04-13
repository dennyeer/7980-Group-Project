import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkins from "./pages/Checkins";
import AddCheckin from "./pages/AddCheckin";
import Profile from "./pages/Profile";

function AppLayout() {
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {isAuthenticated && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <Link className="navbar-brand fw-bold" to="/checkins">
            Travel Checkin
          </Link>

          <div className="navbar-nav ms-auto d-flex align-items-center">
            <Link className="nav-link" to="/checkins">
              Checkins
            </Link>
            <Link className="nav-link" to="/add">
              Add Checkin
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <button
              className="btn btn-outline-light btn-sm ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      )}

      <div className="container py-4">
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/checkins" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/checkins" /> : <Register />}
          />
          <Route
            path="/checkins"
            element={isAuthenticated ? <Checkins /> : <Navigate to="/login" />}
          />
          <Route
            path="/add"
            element={isAuthenticated ? <AddCheckin /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={isAuthenticated ? <Navigate to="/checkins" /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;