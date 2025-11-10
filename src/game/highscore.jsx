import React from 'react';
import './highscore.css'

import { GameNotifier } from './gameNotifier';

export function Highscore(props) {
    
    const [events, setEvent] = React.useState([]);

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

    const highscore = [];
    if(events.length) {
        for(const [i, event] of events.entries()){highscore.push(
            <div className="highscore-message" key = {i} >
                <div><span id="username">{event.name} has achieved the highscore</span></div>
                <div id="message-score"><span >{event.score}</span></div>
            </div>
            )
        }
    }


  return (
        <div className = "col highscore">
            {highscore}
        </div>
  );
}