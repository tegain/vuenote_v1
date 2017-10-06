<template>
  <div id="login">
    <h1>Logout</h1>

    <form action="#" v-on:submit="login">
      <p><input type="text" placeholder="Login" v-model="ident"></p>
      <p><input type="password" placeholder="Password" v-model="password"></p>
      <p><button>{{ $t('login') }}</button></p>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        ident: '',
        password: ''
      }
    },
    methods: {
      login: function (e) {
        e.preventDefault()

        this.$store.dispatch('checkLogin', { ident: this.ident, password: this.password })
            .then(() => {
              this.$router.push('/app')
            }).catch((error) => {
              alert(error)
            })
      }
    }
  }
</script>

<style scoped>
  input,
  button {
    padding: .5rem;
  }
</style>
