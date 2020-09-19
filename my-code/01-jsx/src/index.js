import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => 'Click on me, dude!';

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">Enter Name:</label>
      <input type="text" name="" id="name"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {getButtonText()}
      </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);