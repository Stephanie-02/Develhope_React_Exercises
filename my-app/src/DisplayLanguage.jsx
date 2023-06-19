import React from 'react'
import { useState } from 'react';

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