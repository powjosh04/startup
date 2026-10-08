import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from "./feed/feed.jsx";
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">

        {/* HEADER */}
        <header className="bg-primary text-white py-3">
          <div className="container-fluid px-4">
            <h1 className="h3 mb-1">Student Sustenance</h1>
            <p className="mb-2 opacity-75">
              Helping students find food and other resources on campus.
            </p>

            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/">Home/Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/feed">Food Feed</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about">About</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="app-main container-fluid py-4 px-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-dark text-white py-4">
          <div className="container-fluid px-4 text-center">
            <span className="fw-semibold">Josh Powell</span><br />
            <a href="https://github.com/powjosh04/startup/" className="text-info">GitHub</a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="container-fluid py-5 px-4 text-center bg-secondary text-white">
      <h2>404</h2>
      <p>Return to sender. Address unknown.</p>
    </div>
  );
}
