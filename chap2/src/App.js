import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';


let cardsList = [
  {
    id: 1,
    title: 'Read the book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks:[{}]
  },
  {
    id: 2,
    title: 'White some code',
    description: 'I should write some code',
    status: 'todo',
    tasks:[
      {
        id: 1,
        name: 'contactList Example',
        done: true
      }
    ]
  }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));