import React from 'react';

import { Message } from './message';
import { Highscore } from './highscore';
import { Clicker } from './clicker';


export function Game(props) {
  return (
    <main>
      <Message />
      <Highscore />
      <Clicker userName={props.userName} />
    </main>
  );
}