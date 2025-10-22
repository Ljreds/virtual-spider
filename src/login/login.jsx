import React from 'react';
import './login.css';

import Button from 'react-bootstrap/Button';


class User{
    constructor(name, password) {
        this.username = name;
        this.password = password;

    }

}


export function Login() {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


  async function loginUser() {
    const user = new User(userName, password);
    const json = JSON.stringify(user);
    localStorage.setItem('userName', json);
  }

  async function signUp() {
    const user = new User(userName, password);
    const json = JSON.stringify(user);
    localStorage.setItem('userName', json);
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