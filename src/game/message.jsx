import React from 'react';
import './message.css'

export function Message(props) {

  const [quote, setQuote] = React.useState('Loading...');
  const [movie, setMovie] = React.useState('unknown');


  React.useEffect(() => {
    fetch('https://quoteapi.pythonanywhere.com/quotes')
        .then((response) => response.json())
        .then((data) => {
          setQuote(data.quote);
          setMovie(data.movie_name);
        })
        .catch();
  }, []);


  return (
    <div className="row">
        <div className="col speech-bubble">
            <p id="quote">{quote} - {author} </p>
        </div>
        <div className="col"></div>
    </div>

  );
}