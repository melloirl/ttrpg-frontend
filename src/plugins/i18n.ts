import { createI18n } from 'vue-i18n'
import en from '../lang/en.json'
import ptBR from '../lang/ptBR.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ptBR',
  fallbackLocale: 'en',
  messages: {
    en,
    ptBR,
  },
})

export default i18n
