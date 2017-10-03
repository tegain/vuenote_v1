// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Components from './components/index'
import router from './router/index'
import store from './store'
import i18n from './locales'

Vue.config.productionTip = false

Components.forEach((component) => {
  Vue.component(component.name, component.template);
})


/**
 * Sécurise les routes
 * 'next()' -> Laisse passer l'utilisateur si la page n'est pas protégée
 */
router.beforeEach((to, from, next) => {
  if (to.name != 'Login' && to.name != 'Home') {
    if (store.state.user == null) {
      next(false)
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  i18n
})
