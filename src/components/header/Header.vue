<template>
  <header id="header" class="app--header">
    <nav>
      <li><router-link :to="{ name:'Home' }">{{ $t('home') }}</router-link></li>
      <li><router-link :to="{ name:'Login' }">{{ $t('login') }}</router-link></li>
      <li>
        <select v-on:change="changeLang" v-model="lang">
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </li>
    </nav>

    
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    data() {
      return {
        lang: 'fr'
      }
    },
    methods: {
      changeLang() {
        this.$i18n.locale = this.lang
      }
    }
  }
</script>

<style>
  .app--header {
    padding: 2rem;
    color: #fff;
    background: #2c3e50;
  }
  .app--header li {
    display: inline-block;
    list-style-type: none;
  }
  .app--header a {
    color: #fff;
    display: inline-block;
    padding: .75rem;
    background: rgba(255,255,255,.1);
    text-decoration: none;
  }
  .app--header a:hover,
  .app--header a.router-link-exact-active {
    background: rgba(255,255,255,.2);
  }
</style>
