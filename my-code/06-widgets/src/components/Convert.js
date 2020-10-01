import React, { useState, useEffect } from 'react';

import translate from '../apis/translate';

export default function Conver({ language, phrase }) {
  const [translation, setTranslation] = useState();

  useEffect(() => {
    if (phrase) {
      setTranslation(`${phrase} has been translated: ${new Date()}`);
    }

    return () => {
      setTranslation('');
    }
  }, [language, phrase]);

  return (
    <div>
      <p>Language: {language.value}</p>
      <p>Phrase: {phrase}</p>
      <div>Output</div>
      <div>{translation}</div>
    </div>
  );
}