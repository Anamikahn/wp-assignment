import React, {useEffect, useState} from 'react';

export default function Explore(){
  const [events, setEvents] = useState([]);
  
  useEffect(()=> {
    fetch('http://127.0.0.1:5000/api/events')
      .then(res => res.json())
      .then(setEvents);
  },[]);
  
  return (
    <div>
      <h2>Explore Events</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            <b>{e.title}</b> ({e.category}) — {e.date} — {e.seats_booked}/{e.seats_total} booked
            <br/>
            <button onClick={()=>{
              const token = localStorage.getItem('token');
              if(!token) return alert('Login first');
              fetch('http://127.0.0.1:5000/api/book', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({user_id: token, event_id: e.id})
              }).then(r=>r.json())
                .then(j=> j.error ? alert(j.error) : alert('Booked! Refresh page to see update'));
            }}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
