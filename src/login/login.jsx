import React from 'react';

export function Login() {
  return (
    <main className="app-main container-fluid d-flex justify-content-center align-items-center py-5">
      <section className="bg-white p-4 p-md-5 rounded shadow w-100" style={{ maxWidth: "500px" }}>
        
        <h2 id="username-display" className="h4 mb-4 text-primary fw-bold">
          Login
        </h2>

        <form method="post" action="feed.html">
          
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-medium">Username:</label>
            <input type="text" id="username" name="username" required className="form-control border-primary" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-medium">Password:</label>
            <input type="password" id="password" name="password" required className="form-control border-primary" />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Login
          </button>

        </form>

      </section>
    </main>
  );
}
