import React from 'react';
import './login.css';

export function Login() {

    const [userName, setUserName] = React.useState(userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    class User{
        constructor(name, password) {
            this.username = name;
            this.password = password;

        }

    }


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
                <form method = "get" action="game" >
                    <div className="input-group mb-3">
                        <label for="login" className="input-group-text">Username: </label>
                        <input type="text" id="login" placeholder="Your name here" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <label for="password" className="input-group-text">Password:    </label>
                        <input type="password" id="password" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div id="login-button">
                        <button type="submit" className="btn btn-primary" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
                        <button type="submit" className="btn btn-secondary"  onClick={() => signUp()} disabled={!userName || !password}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
  );
}