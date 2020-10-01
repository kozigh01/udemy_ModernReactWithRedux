import React, { useEffect, useReducer, useState } from 'react';

// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import DropDown from './components/Dropdown';
import Translate from './components/Translate'

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

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
]

export default () => {
  // const [ selection, setSelection ] = useState(options[0]);

  return (
    <div>
      <h1>Widgets App</h1>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <DropDown 
        label="Select a Color"
        options={options} 
        selected={selection} 
        onSelectedChanged={setSelection}
      /> */}
      {/* <p style={ {marginTop: '200px'} }>Selected Value: {selection.value}</p> */}
      <Translate />
    </div>
  );
}

