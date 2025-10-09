import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid">
        <div className="split">
            <div className ="left"></div>
            <div className = "right">
                <h1 id="login-title">Akwaaba</h1>
                <h2 id="login-subtitle">(Welcome)</h2>
                <form method = "get" action="game" >
                    <div className="input-group mb-3">
                        <label for="login" className="input-group-text">Username: </label>
                        <input type="text" id="login" placeholder="Your name here" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                        <label for="password" className="input-group-text">Password:    </label>
                        <input type="password" id="password" placeholder="Password" className="form-control" />
                    </div>
                    <div id="login-button">
                        <button type="submit" className="btn btn-primary" >Login</button>
                        <button type="submit" className="btn btn-secondary">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  );
}