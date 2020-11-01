import React from 'react';

export default class LanguageSelector extends React.Component {
  render = () => {
    return (
      <div>
        Select a language:&nbsp;
        <i className="flag us" onClick={() => this.props.onLanguageChanged('english')} />
        <i className="flag nl" onClick={() => this.props.onLanguageChanged('dutch')} />
      </div>
    );
  }
}