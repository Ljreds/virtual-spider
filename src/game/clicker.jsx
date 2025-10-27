import React from 'react';
import './clicker.css';

import Button from 'react-bootstrap/Button';


export function Clicker(props) {

    const [sate, setSate] = React.useState(0);
    const [sateMult, setSateMult] = React.useState(20);

    const [dirt, setDirt] = React.useState(50);
    const [score, setScore] = React.useState(0);
    const [mod, setModifier] = React.useState(1);

    const clamp = v => Math.max(0, Math.min(100, v));

    React.useEffect(() => {
        if(sate === 100){
            console.log('sate reached 100');
            setModifier(m => m * 2);
            setSate(0);
            setSateMult(m => m - 1);
        }
    });

    React.useEffect(() => {
        const id = setInterval(() => {
            setDirt(d => clamp(d + 2));
        }, 1000)
        return () => clearInterval(id);
    }, []);

    

  return (
   <main className="container-fluid text-white">
        <div className="game">
            <div className="row">
                <div className="col">
                    <div className="speech-bubble">
                        <p id="quote">"With great power comes great responsibility." - Uncle Ben </p>
                    </div>
                </div>

                <div className="col">
                    <div className="highscore-message">
                        <div><span id="username">Smith has achieved the highscore</span></div>
                        <div id="high-score"><output >999999</output></div>
                    </div>
                </div>
            </div>

        
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
                    <img src="goat.png" alt="Aponkye(goat)" width="544" onClick= {() => setScore(s => s + mod)} style={{cursor: 'pointer'}}/>
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
                    <Button className="game-button" type="button"  onClick={() => setSate(h => clamp(sate + sateMult))}>
                        Feed
                    </Button>
                </div>
                <div className="col"></div>
                <div className="col">
                    <Button className="game-button" type="button" onClick={() => setDirt(d => clamp(dirt - 2))}>
                        Brush
                    </Button>
                </div>
            </div>
        </div>

    </main>
  );
}