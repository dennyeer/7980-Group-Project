import { useState } from "react";
import axios from "axios";
import API_BASE from "../api";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `${API_BASE}/auth/change-password`,
        {
          currentPassword,
          newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert(res.data.message);
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Error changing password"
      );
    }
  };

  return (
    <div className="row justify-content-center page-wrap">
      <div className="col-md-8 col-lg-7">
        <h2 className="mb-4">Profile</h2>

        <div className="card shadow-sm p-4 mb-4">
          <h5 className="mb-3">User Information</h5>
          <p>
            <strong>Email:</strong> {user.email || "N/A"}
          </p>
          <p className="mb-0">
            <strong>Display Name:</strong> {user.displayName || "N/A"}
          </p>
        </div>

        <div className="card shadow-sm p-4">
          <h5 className="mb-3">Change Password</h5>

          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;