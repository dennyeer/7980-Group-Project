import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../api";

function Checkins() {
  const [checkins, setCheckins] = useState([]);
  const [cityFilter, setCityFilter] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchCheckins = async () => {
    try {
      const token = localStorage.getItem("token");

      const url = cityFilter
        ? `${API_BASE}/checkins?city=${cityFilter}`
        : `${API_BASE}/checkins`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCheckins(res.data);
    } catch (error) {
      console.error("Failed to fetch checkins", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_BASE}/checkins/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchCheckins();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  useEffect(() => {
    fetchCheckins();
  }, [cityFilter]);

  return (
    <div className="page-wrap">
      <h2 className="mb-2">My Checkins</h2>
      <p className="text-muted mb-4">Welcome, {user.email || "User"}</p>

      <div className="mb-4">
        <input
          className="form-control"
          placeholder="Filter by city"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        />
      </div>

      <div className="row g-3">
        {checkins.length > 0 ? (
          checkins.map((item) => (
            <div className="col-md-6 col-lg-4" key={item._id}>
              <div className="card shadow-sm h-100 checkin-card">
                <div className="card-body">
                  <h5 className="card-title mb-2">{item.city}</h5>
                  <p className="card-text text-secondary">{item.note}</p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No checkins found.</p>
        )}
      </div>
    </div>
  );
}

export default Checkins;