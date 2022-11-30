import React from 'react'
import { IntlProvider as I18nProvider } from 'react-intl'
import browserLang from 'browser-lang'

// Lang sheets
// import es from './messages/es'
// import pt from './messages/pt'
import en from './messages/en'

const myLanguage = browserLang({
  // languages: ['en', 'es', 'pt'],
  languages: ['en'],
  fallback: 'en'
})

const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

const messages = {
  en: en
  // es: es,
  // pt: pt
}
const IntlProvider = ({ children }) => {
  return (
    <I18nProvider
      locale={myLanguage}
      messages={flattenMessages(messages[myLanguage])}
    >
      {children}
    </I18nProvider>
  )
}
export default IntlProvider
