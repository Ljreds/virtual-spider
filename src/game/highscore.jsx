import React from 'react';
import './highscore.css'

import { GameNotifier } from './gameNotifier';

export function Highscore(props) {
    
    const [event, setEvent] = React.useState([]);

    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);

        return () => {
        GameNotifier.removeHandler(handleGameEvent);
        };
    }, []);

    function handleGameEvent(event) {
        setEvent([event]);
        return event;
    };


  return (
    <div className="row">
        <div className = "col">
            <div className="highscore-message">
                <div><span id="username">No one has achieved the highscore</span></div>
                <div id="message-score"><span > 0</span></div>
            </div>
        </div>
    </div>
  );
}