import React, { use } from 'react';
import './clicker.css';

import Button from 'react-bootstrap/Button';

import { GameNotifier } from './gameNotifier';


export function Clicker(props) {

    const userName = props.userName;

    const [sate, setSate] = React.useState(0);
    const [sateMult, setSateMult] = React.useState(20);

    const [highscore, setHighscore] = React.useState(0);

    const [dirt, setDirt] = React.useState(0);

    const [score, setScore] = React.useState(0);
    const [mod, setModifier] = React.useState(2);
    const [cost, setCost] = React.useState(5);

    const clamp = v => Math.max(0, Math.min(100, v));

    function transaction() {
        if(score - cost > 0){
            setSate(h => clamp(h + sateMult));
            setScore(m => m - cost);
        }
    }

    async function saveScore(score) {
        const newScore = {userName: userName, score: score}
        fetch('api/score', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newScore),
        })
    }

    async function checkHighscore(newScore) {
        fetch(`/api/highscore`)
            .then((response) => response.json())
            .then((highscore) => { 
                if(newScore >= highscore.highScore) {
                    GameNotifier.broadcastEvent(userName, newScore);
                }
        });
    }

    async function userScore(){
        setScore(prev => {const updated = prev + mod
            if(score >= highscore){
                setHighscore(updated);
                localStorage.setItem('score', updated);
                checkHighscore(updated);
                saveScore(updated);
            }

            return updated;
        })
    }

   

    const dirtRef = React.useRef(dirt);
    React.useEffect(() => { dirtRef.current = dirt; }, [dirt]);


    React.useEffect(() => {
        if(sate >= 100){
            console.log('sate reached 100');
            setModifier(m => m + 10);
            setSate(0);
            setSateMult(m => m - 1);
            setCost(c => c + 5);
        }
    }, [sate]);

    React.useEffect(() => {
        const id = setInterval(() => {
            setDirt(d => clamp(d + 2));
        }, 1000)
        return () => clearInterval(id);
    }, []);

    React.useEffect(() => {
        const id = setInterval(() => {
            const currentDirt = dirtRef.current;
            if(currentDirt >= 50){
                setScore(s => Math.max(0, Math.floor(s - (currentDirt - 50)/10)));
            }
        }, 2000)
        return () => clearInterval(id);
    }, []);

    

  return (
   <main className="container-fluid text-white">
        <div className="game">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <p className="score-container">Happiness: <output id="score">{score}</output></p>
                </div>
            </div>

            <div className="row">
                <div className=" col">
                    <div className="meter-container justify-content-end">
                        <span className="meter-name">Sate</span>
                        <div className="game-meter">
                            <div className="meter-fill" style={{ height: `${sate}%` }} aria-valuenow={sate} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                </div>

                <div className="col avatar">
                    <img src="goat.png" alt="Aponkye(goat)" width="544" onClick= {() => userScore()} style={{cursor: 'pointer'}}/>
                </div>

                <div className ="col">
                    <div className="meter-container">
                        <div className="game-meter">
                            <div className="meter-fill" style={{ height: `${dirt}%` }} aria-valuenow={dirt} aria-valuemin={0} aria-valuemax={100}></div>
                        </div> 
                        <span className="meter-name">Dirt</span>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col feed-btn">
                    <Button className="game-button" type="button"  onClick={() => transaction()}>
                        Feed
                    </Button>
                </div>
                <div className="col"></div>
                <div className="col dirt-btn">
                    <Button className="game-button" type="button" onClick={() => setDirt(d => clamp(dirt - 5))}>
                        Brush
                    </Button>
                </div>
            </div>
        </div>

    </main>
  );
}