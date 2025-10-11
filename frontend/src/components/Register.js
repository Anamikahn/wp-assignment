import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();

  async function submit(e){
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username, password})
    });
    const j = await res.json();
    if(res.ok){
      alert('Registered! Please login.');
      nav('/login');
    } else alert(j.error || 'Registration failed');
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/><br/>
        <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <button>Register</button>
      </form>
    </div>
  );
}
