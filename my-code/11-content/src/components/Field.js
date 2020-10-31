import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class Field extends React.Component {
  static contextType = LanguageContext;

  render = () => {
    const labelText = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label htmlFor="name">{labelText}:</label>
        <input name="name" type="text"/>
      </div>
    );
  };
} 
