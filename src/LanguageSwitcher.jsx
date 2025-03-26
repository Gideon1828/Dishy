import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select 
      onChange={handleLanguageChange} 
      value={i18n.language} 
      className="language-switcher"
    >
      <option value="en">English</option>
      <option value="ta">தமிழ்</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default LanguageSwitcher;
