import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

const DisplayLanguage = () => {
  const selectedLanguage = useContext(LanguageContext);

  return <p>Selected Language: {selectedLanguage}</p>
}

export default DisplayLanguage;

