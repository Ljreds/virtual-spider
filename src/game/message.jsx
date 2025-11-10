import React from 'react';
import './message.css'

export function Message(props) {

  const [joke, setJoke] = React.useState('Loading...');


  React.useEffect(() => {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.joke);
        })
        .catch();
  }, []);


  return (
    <div className="row">
        <div className="col speech-bubble">
            <p id="quote">{joke} </p>
        </div>
        <div className="col"></div>
    </div>

  );
}