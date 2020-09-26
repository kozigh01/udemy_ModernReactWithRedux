import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    id: 0,
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    id: 1,
    title: 'Why use React',
    content: 'React is a favorite JS library among engineers'
  },
  {
    id: 2,
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

export default () => {
  return (
    <div>
      <h1>Widgets App</h1>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

