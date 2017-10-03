import Vue from 'vue'
import VueI18n from 'vue-i18n'
import fr from './fr'
import en from './en'

Vue.use(VueI18n)

/**
 * Locales
 */

export default new VueI18n({
  locale: 'fr',
  messages: {
    en: en,
    fr: fr
  }
})

