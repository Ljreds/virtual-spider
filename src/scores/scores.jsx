import React from 'react';
import './scores.css';

export function Scores() {

    const [scores, setScores] = React.useState([])

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    const scoreRows = [];
    if(scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key={i}>
                    <td style={{textAlign: "center"}}>{i + 1}</td>
                    <td style={{textAlign: "left"}}>{score.name}</td>
                    <td style={{textAlign: "right"}}>{score.score}</td>
                </tr>
            );
        }

    } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }


  return (
     <main className="container-fluid">
        <table id="score-board">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>#</th>
                    <th style={{textAlign: "left"}}>Name</th>
                    <th style={{textAlign: "right"}}>Score</th>
                </tr>
            </thead>
            <tbody>
                {scoreRows}
            </tbody>
        </table>
    </main>
  );
}