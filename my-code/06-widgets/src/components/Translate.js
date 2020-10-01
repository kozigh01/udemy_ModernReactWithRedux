import React, { Fragment, useEffect, useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const languages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "sp" },
  { label: "French", value: "fr" },
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
]

export default function Translate(props) {
  const [ language, setLanguage ] = useState(languages[0]);
  const [ phrase, setPhrase ] = useState('');
  const [ debouncePhrase, setDebouncePhrase ] = useState('');
  
  useEffect(() => {
    const timerId = setTimeout(() => setDebouncePhrase(phrase), 1000);

    return () => {
      clearTimeout(timerId);
    }    
  }, [phrase]);

  const onPhraseChange = (event) => {
    setPhrase(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <Fragment>
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label htmlFor="phrase">Enter a phrase:</label>
            <input
              type="text"
              name="phrase"
              id="phrase"
              placeholder="Enter the phrase to translate..."
              value={phrase}
              onChange={onPhraseChange}
            />
          </div>
          <Dropdown
            label="Select Language"
            options={languages}
            selected={language}
            onSelectedChanged={setLanguage}
          />
        </div>
      </div>
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert
        language={language}
        phrase={debouncePhrase}
      />
    </Fragment>
  );
}