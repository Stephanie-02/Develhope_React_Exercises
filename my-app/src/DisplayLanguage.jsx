import React from 'react'
import { useState } from 'react';

export default function DisplayLanguage() {
    const [selectedLanguage, setSelectedLanguage] = useState('English'); 

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
      
  return (
    <div>
        <div>
        <label htmlFor="languageSelect">Select Language:</label>
        <select id="languageSelect" onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="Italian">Italian</option>
        </select>
      </div>
    </div>
  )
}