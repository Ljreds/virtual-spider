import React from 'react';
import './scores.css';

export function Scores() {
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
                <tr>
                    <td style={{textAlign: "center"}}>1</td>
                    <td style={{textAlign: "left"}}>Smith</td>
                    <td style={{textAlign: "right"}}>999999</td>
                </tr>
                <tr>
                    <td style={{textAlign: "center"}}>2</td>
                    <td style={{textAlign: "left"}}>Joey</td>
                    <td style={{textAlign: "right"}}>002399</td>
                </tr>
                <tr>
                    <td style={{textAlign: "center"}}>3</td>
                    <td style={{textAlign: "left"}}>webmaster</td>
                    <td style={{textAlign: "right"}}>000001</td>
                </tr>
            </tbody>
        </table>
    </main>
  );
}