import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: require('./public/locales/eng/common.json')
    },
    cs: {
      translation: require('./public/locales/cs/common.json')
    }
  },
  lng: 'eng',
  fallbackLng: 'eng',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
