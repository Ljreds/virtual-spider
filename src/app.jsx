import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { useNavigate } from 'react-router-dom';


import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Game } from './game/game';
import { Scores } from './scores/scores';
import { AuthState } from './login/authState';

export default function App() {

    

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  React.useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || '';
    setUserName(storedUserName);
    setAuthState(storedUserName ? AuthState.Authenticated : AuthState.Unauthenticated);
  }, []);

  async function logoutUser() {
    localStorage.removeItem('userName');
    setAuthState(AuthState.Unauthenticated);
    setUserName('');
  }

  return ( 
    <BrowserRouter>
        <div className="body text-dark">
            <header className="container-fluid fixed-top">
                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href="#">
                        <img id="title-bar" src="madamfo.png" alt="Madamfo" height="100" />
                    </a>
                    <menu className="navbar-brand">
                        {authState === AuthState.Unauthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    Home 
                                </NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={() => logoutUser()} to="/">
                                    Logout
                                </NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="game">
                                    Play
                                </NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="scores">
                                    Scoreboard
                                </NavLink>
                            </li>
                        )}
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                    }}
                />
                } 
                exact 
                />
                <Route path='/game' element={<Game/>} />
                <Route path='/scores' element={<Scores />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="text-white">
                <div>
                    <span className="text_reset">Logan Smith</span>
                    <a href="https://github.com/Ljreds/virtual-spider.git">My GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}