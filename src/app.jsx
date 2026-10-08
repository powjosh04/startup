import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="page">

      <header className="app-header">
          <div className="container-fluid">
          <h1 className="display-6">Student Sustenance</h1>
          <p className="opacity-75">
            Helping students find food and other resources on campus.
          </p>

          <ul className="nav-links">
            <li><a href="index.html">Home/Login</a></li>
            <li><a href="feed.html">Food Feed</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
        </div>
      </header>

      <main className="app-main">
            App components go here.
      </main>

      <footer className="app-footer">
        <div className="container">
          <span className="fw-semibold">Josh Powell</span><br />
          <a href="https://github.com/powjosh04/startup/">GitHub</a>
        </div>
      </footer>

    </div>
  );
}
