import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();

  async function submit(e){
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username, password})
    });
    const j = await res.json();
    if(res.ok){
      localStorage.setItem('token', j.token);
      localStorage.setItem('username', j.username);
      nav('/dashboard');
    } else alert(j.error || 'Login failed');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/><br/>
        <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <button>Login</button>
      </form>
    </div>
  );
}
