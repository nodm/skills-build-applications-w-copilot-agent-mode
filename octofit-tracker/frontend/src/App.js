
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#users">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#activities">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#workouts">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title display-5 mb-4 text-center">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
                <p className="card-text text-center">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
                {/* Components would be rendered here based on routing or state */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
