import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({
    label: 'En',
    dir: 'ltr',
    value:'1'
  });

  useEffect(() => {
    const retrieveLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('selectedLanguage');
        if (savedLanguage) {
          setLanguage(JSON.parse(savedLanguage));
        }
      } catch (error) {
        console.log('Error retrieving language:', error);
      }
    };

    retrieveLanguage();
  }, []);

  const updateLanguage = async (newLanguage) => {
    try {
      await AsyncStorage.setItem('selectedLanguage',  JSON.stringify(newLanguage));
      setLanguage(newLanguage);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  };
  const clearLanguage = async () => {
    try {
      await AsyncStorage.removeItem('selectedLanguage');
      setLanguage({
        label: 'En',
        dir: 'ltr',
        value:'1'
      });
    } catch (error) {
      console.error('Error clearing language data:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage, clearLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


