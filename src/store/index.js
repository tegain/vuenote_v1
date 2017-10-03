import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    currentCarnet: localStorage.getItem('currentCarnet') || null,
    carnets : [
      {
        "name" : "Pro",
        "id" : "pro",
        "notes" : [
          {
            "name" : "Todo 22 aout 2017",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Todo 23 aout 2017",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Todo 24 aout 2017",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Todo 25 aout 2017",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Todo 26 aout 2017",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
        ]
      },
      {
        "name" : "Perso",
        "id" : "perso",
        "notes" : [
          {
            "name" : "Liste course",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Film à voir",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
          {
            "name" : "Livre à lire",
            "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sem et fringilla bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ut egestas justo."
          },
        ]
      },
      {
        "name" : "Vacances",
        "id" : "vacances",
        "notes" : [
          {
            "name" : "Beijing",
            "content" : "Ne pas oublier de prendre les tickets d'avion"
          },
          {
            "name" : "San Francisco",
            "content" : "Penser à réserver un logement"
          },
        ]
      },
    ]
  },
  actions: {
    checkLogin(context, info) {
      return new Promise((resolve, reject) => {
        if (info.email === 'test@test.com' && info.password === 'toto') {
          resolve('OK')
          const user = {
            id: 1,
            firstname: 'Thomas',
            lastname: 'Egain',
            email: info.email
          }

          context.commit('changeUser', user)
        } else {
          reject('Bad credentials')
        }
      })
    }
  },
  mutations: {
    changeUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    changeCarnet(state, index) {
      state.currentCarnet = index
      localStorage.setItem('currentCarnet', index)
    }
  }
})
