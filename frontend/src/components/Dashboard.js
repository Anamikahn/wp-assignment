import React from 'react';

export default function Dashboard(){
  const user = localStorage.getItem('username');
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user || 'guest'}!</p>
      <p>Upcoming events and personalized recommendations will appear here (demo).</p>
    </div>
  );
}
