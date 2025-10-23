import React from 'react';

import { Clicker } from './clicker';

export function Game(props) {
  return (
    <main className='bg-secondary'>
      <Clicker userName={props.userName} />
    </main>
  );
}