import React, { useEffect, useReducer, useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/Dropdown';
import Translate from './components/Translate'
import Route from './components/Route';
import Header from './components/Header';

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
];

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />
//   }
// }

// const showSearch = () => {
//   if (window.location.pathname === '/search') {
//     return <Search />
//   }
// }

// const showDropdown = () => {
//   if (window.location.pathname === '/dropdown') {
//     return <DropDown />
//   }
// }

// const showTranslate = () => {
//   if (window.location.pathname === '/translate') {
//     return <Translate  />
//   }
// }

// const showComponent = (route, component) => {
//   return window.location.pathname === route
//     ? component
//     : null;
// }

export default () => {
  const [ selection, setSelection ] = useState(options[0]);

  return (
    <div>
      <h1>Widgets App</h1>

      <Header />

      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/search'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <div>
          <DropDown
            label="Select a color" 
            options={options}
            selected={selection}
            onSelectedChanged={setSelection}
          />
          <p style={ {marginTop: '200px'} }>Selected Value: {selection.value}</p>
        </div>
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>


      {/* {showAccordion()} */}


      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <DropDown 
        label="Select a Color"
        options={options} 
        selected={selection} 
        onSelectedChanged={setSelection}
      /> */}
      {/* <p style={ {marginTop: '200px'} }>Selected Value: {selection.value}</p> */}
      {/* <Translate /> */}
    </div>
  );
}

