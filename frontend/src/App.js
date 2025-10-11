import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Explore from './components/Explore';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function App(){
  return (
    <Router>
      <div style={{padding:20}}>
        <h1>Smart Event System</h1>
        <nav>
          <Link to="/">Explore</Link> | 
          <Link to="/dashboard">Dashboard</Link> | 
          <Link to="/analytics">Analytics</Link> | 
          <Link to="/login">Login</Link>
        </nav>
        <hr/>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

