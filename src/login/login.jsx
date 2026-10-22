import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const storedUser = localStorage.getItem('username');

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('username', username);
    navigate('/feed');
  }

  function handleLogout() {
    localStorage.removeItem('username');
    navigate('/');
  }

  if (storedUser) {
    return (
      <div className="container text-center mt-5">
        <div className="card shadow p-4">
          <h2 className="text-primary mb-3">
            Already Logged In
          </h2>

          <p>
            Signed in as <strong>{storedUser}</strong>
          </p>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-main container-fluid d-flex justify-content-center align-items-center py-5">
      <section
        className="bg-white p-4 p-md-5 rounded shadow w-100"
        style={{ maxWidth: '500px' }}
      >
        <h2 className="h4 mb-4 text-primary fw-bold">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="username"
              className="form-label fw-medium"
            >
              Username:
            </label>

            <input
              type="text"
              id="username"
              required
              className="form-control border-primary"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-medium"
            >
              Password:
            </label>

            <input
              type="password"
              id="password"
              required
              className="form-control border-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}