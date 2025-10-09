import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Game } from './game/game';
import { Scores } from './scores/scores';

export default function App() {
  return ( 
  <div className="body bg-dark text-light">A
    <header className="container-fluid fixed-top">
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">
                <img id="title-bar" src="madamfo.png" alt="Madamfo" height="100" />
            </a>
            <menu className="navbar-brand">
                <li className="nav-item"><a className="nav-link active" href="index.html"> Home </a></li>
                <li className="nav-item"><a className="nav-link" href="game.html">Play</a></li>
                <li className="nav-item"><a className="nav-link" href="score.html">Scoreboard</a></li>
            </menu>
        </nav>
    </header>

    <main>App components go here</main>

    <footer className="text-white-50">
        <div>
            <span className="text_reset">Logan Smith</span>
            <a href="https://github.com/Ljreds/virtual-spider.git">My GitHub</a>
        </div>
    </footer>
  </div>
  )
}