import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

export default class App extends React.Component {
  state = { language: 'english' };

  onLanguageChanged = (language) => this.setState({ language });

  render = () => {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChanged={this.onLanguageChanged} />

        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="red">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  };
} 
