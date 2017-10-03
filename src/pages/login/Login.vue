<template>
  <div id="login">
    <h1>Login</h1>

    <form action="#" v-on:submit="login">
      <p><input type="email" placeholder="Email" v-model="email"></p>
      <p><input type="password" placeholder="Password" v-model="password"></p>
      <p><button>Login</button></p>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function (e) {
        e.preventDefault()

        this.$store.dispatch('checkLogin', { email: this.email, password: this.password })
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
