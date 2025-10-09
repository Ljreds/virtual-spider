import React from 'react';
import './game.css';

export function Game() {
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
                    <p className="score-container">Happiness: <output id="score">999999</output></p>
                </div>
            </div>

            <div className="row">
                <div className=" col">
                    <div className="meter-container justify-content-end">
                        <span className="meter-name">Hunger</span>
                        <div className="game-meter">
                            <div className="meter-fill"></div>
                        </div>
                    </div>
                </div>

                <div className="col avatar"><img src="goat.png" alt="Aponkye(goat)" width="544" /></div>

                <div className ="col">
                    <div className="meter-container">
                        <div className="game-meter">
                            <div className="meter-fill"></div>
                        </div> 
                        <span className="meter-name">Dirt</span>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col feed-btn"><button className="game-button" type="button">Feed</button></div>
                <div className="col"></div>
                <div className="col"><button className="game-button" type="button">Brush</button></div>
            </div>
        </div>

    </main>
  );
}