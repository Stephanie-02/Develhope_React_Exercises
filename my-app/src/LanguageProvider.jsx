import React, { useState } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (ev) => {
        setSelectedLanguage(ev.target.value);
    };

    return (
        <LanguageContext.Provider value={selectedLanguage}>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="sw">Swahili</option>
                <option value="it">Italiano</option>
            </select>
        </LanguageContext.Provider>
    )
}