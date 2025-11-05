import React from 'react';
import './message.css'

export function Message(props) {

  const [quote, setQuote] = React.useState('Loading...');
  const [author, setAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    setQuote("With great power comes great responsibility.");
    setAuthor('Uncle Ben');
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