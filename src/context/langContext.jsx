import React, { useState, createContext } from 'react';

import { IntlProvider } from 'react-intl';

import EnglishText from '../lang/en-US.json';
import SpanishText from '../lang/es-MX.json';

const langContext = createContext();

const LangProvider = ({children}) => {

  const [messages, setMessages] = useState(EnglishText);
  const [locale, setLocale] = useState('en-US');

  const setLanguage = (lenguaje) => {
    switch (lenguaje) {
      case 'es-MX':
        setMessages(SpanishText);
        setLocale('es-MX')
        break;

      case 'en-US':
        setMessages(EnglishText);
        setLocale('en-US');
        break;

      default:
        setMessages(EnglishText);
        setLocale('en-US');
        break;
    }
  }
  
  return (
    <IntlProvider locale={locale} messages={messages}>
      <langContext.Provider value={{ setLanguage, locale }}>
        {children}
      </langContext.Provider>
    </IntlProvider>
  )
};

export { LangProvider, langContext };