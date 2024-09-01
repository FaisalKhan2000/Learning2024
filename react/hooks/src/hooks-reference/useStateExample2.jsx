import axios from "axios";
import { useState, useRef } from "react";
import { ClipLoader } from "react-spinners";
import { FaMapMarkerAlt, FaUserAlt, FaUsers, FaBookOpen } from "react-icons/fa";
import "../css/useStateExample2.css"; // Import custom CSS for styling

// Creating an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const UseStateExample2 = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const abortControllerRef = useRef(null);

  const fetchUser = async (username) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setErrors("");
    try {
      const response = await api.get(`/users/${username}`, {
        signal: controller.signal,
      });
      setUserData(response.data);
    } catch (error) {
      if (error.name !== "CanceledError") {
        setErrors("Failed to fetch user data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    e.target.elements.search.value = "";
    if (value) fetchUser(value);
  };

  return (
    <div className="dark-theme-container">
      {/* Title Section */}
      <div className="title-section">
        <h1 className="main-title">Discover GitHub Profiles</h1>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Enter GitHub username..."
          className="search-input"
          aria-label="GitHub username"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <ClipLoader color="#7D5FFF" loading={loading} size={60} />
        </div>
      )}

      {/* Error Message */}
      {errors && <div className="error-message">{errors}</div>}

      {/* Empty State */}
      {!userData && !loading && !errors && (
        <div className="empty-state">
          {/* <img
            src="https://via.placeholder.com/200/3b3b3b/ffffff?text=No+Results"
            alt="Illustration"
            className="empty-illustration"
          /> */}
          <h2 className="empty-title">Start Searching GitHub Users</h2>
          <p className="empty-subtitle">
            Type a username to see the magic happen.
          </p>
        </div>
      )}

      {/* User Data Display */}
      {userData && !loading && (
        <div className="creative-card">
          <div className="card-header">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="avatar"
            />
            <h3 className="name">{userData.name || userData.login}</h3>
          </div>
          <div className="card-body">
            <div className="info-item">
              <FaUserAlt className="icon" />
              <p>
                <strong>Username:</strong> {userData.login}
              </p>
            </div>
            <div className="info-item">
              <FaBookOpen className="icon" />
              <p>
                <strong>Bio:</strong> {userData.bio || "No bio available"}
              </p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>
                <strong>Location:</strong>{" "}
                {userData.location || "Not specified"}
              </p>
            </div>
            <div className="info-item">
              <FaUsers className="icon" />
              <p>
                <strong>Public Repos:</strong> {userData.public_repos}
              </p>
            </div>
            <div className="info-item">
              <FaUsers className="icon" />
              <p>
                <strong>Followers:</strong> {userData.followers}
              </p>
            </div>
            <div className="info-item">
              <FaUsers className="icon" />
              <p>
                <strong>Following:</strong> {userData.following}
              </p>
            </div>
          </div>
          <a
            href={userData.html_url}
            className="view-profile-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default UseStateExample2;
