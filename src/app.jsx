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

      <header className="app-header">
          <div className="container-fluid">
          <h1 className="display-6">Student Sustenance</h1>
          <p className="opacity-75">
            Helping students find food and other resources on campus.
          </p>

          <ul className="nav-links">
            <li><NavLink to="/">Home/Login</NavLink></li>
            <li><NavLink to="/feed">Food Feed</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>

        </div>
      </header>

      <main className="app-main">
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/feed' element={<Feed />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="container">
          <span className="fw-semibold">Josh Powell</span><br />
          <a href="https://github.com/powjosh04/startup/">GitHub</a>
        </div>
      </footer>

    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}