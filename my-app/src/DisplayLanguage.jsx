import React from 'react';
import { LanguageContext } from './LanguageContext';

const DisplayLanguage= () => {
  
  return (
    <LanguageContext.Consumer>
      {(selectedLanguage) => (
        <h1>Selected Language:{selectedLanguage}</h1>
      )}
    </LanguageContext.Consumer>
  )
}

export default DisplayLanguage;