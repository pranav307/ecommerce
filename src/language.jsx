import React, { useState, useEffect } from "react";

const LanguageDropdown = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default to English
  const [isOpen, setIsOpen] = useState(false);

  // Fetch languages from an API
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();

        // Extract unique languages
        const languagesSet = new Set();
        countries.forEach((country) => {
          if (country.languages) {
            Object.values(country.languages).forEach((lang) => {
              languagesSet.add(lang);
            });
          }
        });

        setLanguages(Array.from(languagesSet));
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    // Handle the logic to set the language preference (e.g., updating UI or making API call)
    console.log(`Selected language: ${language}`);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="language-dropdown">
      <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
        {selectedLanguage} {/* Displays the selected language */}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {languages.map((language, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
