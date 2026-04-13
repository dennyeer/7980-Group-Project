import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE from "../api";

function AddCheckin() {
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API_BASE}/checkins`,
        { city, note, imageUrl: "" },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("Checkin added successfully");

      setTimeout(() => {
        navigate("/checkins");
      }, 400);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "Add failed"
      );
    }
  };

  return (
    <div className="row justify-content-center page-wrap">
      <div className="col-md-7 col-lg-6">
        <h2 className="mb-4 text-center">Add Checkin</h2>

        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Note</label>
            <textarea
              className="form-control"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Write something about your trip"
              rows="4"
              required
            />
          </div>

          <button className="btn btn-success w-100" type="submit">
            Add
          </button>

          {message && <p className="mt-3 mb-0">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddCheckin;