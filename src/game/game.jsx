import React from 'react';

import { Message } from './message';
import { Highscore } from './highscore';
import { Clicker } from './clicker';


export function Game(props) {
  return (
    <main className='bg-secondary'>
      <Message />
      <Highscore />
      <Clicker userName={props.userName} />
    </main>
  );
}