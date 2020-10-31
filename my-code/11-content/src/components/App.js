import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

export default class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => this.setState({ language });

  render = () => {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="blue">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  };
} 
