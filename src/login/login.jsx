import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login({ setCurrentUser }) {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const storedUser = localStorage.getItem('username');

  //Handle login form submission
async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      '/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: username,
          password,
        }),
      }
    );

    if (response.ok) {
      setCurrentUser(username);
      localStorage.setItem('username', username);

      navigate('/feed');
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    console.error(error);
  }
}

//CREATE account functionality
async function createAccount() {
  console.log('Create Account clicked');
  try {
    const response = await fetch(
      '/api/auth/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: username,
          password,
        }),
      }
    );

    console.log('response status:', response.status);

    if (response.ok) {
      setCurrentUser(username);
      localStorage.setItem('username', username);

      navigate('/feed');
    } else {
      alert('Account already exists');
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleLogout() {
  try {
    await fetch(
      '/api/auth/logout',
      {
        method: 'DELETE',
        credentials: 'include',
      }
    );
  } catch (error) {
    console.error(error);
  }

  localStorage.removeItem('username');

  setCurrentUser(null);

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
          <button
          type="button"
          className="btn btn-success w-100 mt-2"
          onClick={createAccount}
          >
  Create Account
</button>
        </form>
      </section>
    </div>
  );
}