import React from 'react';
import './login.css';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



export function Login({initialUserName, authState, onAuthChange}) {
    const navigate = useNavigate();

    const [userName, setUserName] = React.useState(initialUserName || '');
    const [password, setPassword] = React.useState('');


  async function loginUser() {
    localStorage.setItem('userName', userName);
    onAuthChange(userName,  authState.Authenticated)
    navigate('/game');
  }

  async function signUp() {
    localStorage.setItem('userName', userName);
    onAuthChange(userName,  authState.Authenticated)
    navigate('/game');
  }

  return (
    <main className="container-fluid">
        <div className="split">
            <div className ="left"></div>
            <div className = "right">
                <h1 id="login-title">Akwaaba</h1>
                <h2 id="login-subtitle">(Welcome)</h2>
                <div className="input-group mb-3">
                    <span className="input-group-text">Username: </span>
                    <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="Username"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password: </span>
                    <input type="password"  className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div id="login-button">
                    <Button variant="primary" onClick={() => loginUser()} disabled={!userName || !password}>
                        Login
                    </Button>
                    <Button variant="secondary"  onClick={() => signUp()} disabled={!userName || !password}>
                        Signup
                    </Button>
                </div>
            </div>
        </div>
    </main>
  );
}