import React from 'react';
import './highscore.css'

export function Highscore(props) {
  return (
    <div>
        <div className="highscore-message">
            <div><span id="username">Smith has achieved the highscore</span></div>
            <div id="high-score"><output >999999</output></div>
        </div>
    </div>
  );
}