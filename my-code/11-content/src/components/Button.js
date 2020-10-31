import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


// Example using context Consumer
export default class Button extends React.Component {
  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  };

  render = () => {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {this.renderSubmit}
        </LanguageContext.Consumer>
      </button>
    );
  }
}


// Example using this.context
// export default class Button extends React.Component {
//   // name is important: must be contextType
//   static contextType = LanguageContext;

//   render = () => {
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return (
//       <button className="ui button primary">{text}</button>
//     );
//   }
// } 
