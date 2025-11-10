import React from 'react';
import './scores.css';

export function Scores() {

    const [scores, setScores] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/scores`)
            .then((response) => response.json())
            .then((scores) => {
            setScores(scores);
        });
    }, []);


    const scoreRows = [];
    if(scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key={i}>
                    <td style={{textAlign: "center"}}>{i + 1}</td>
                    <td style={{textAlign: "left"}}>{score.userName}</td>
                    <td style={{textAlign: "right"}}>{score.score}</td>
                </tr>
            );
        }

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