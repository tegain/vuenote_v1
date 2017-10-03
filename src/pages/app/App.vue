<template>
  <div id="app-logged" class="app--view app--view_logged">
    <h1>Welcome {{ $store.state.user.firstname }}</h1>

    <carnets></carnets>
  </div>
</template>


<script>
  export default {
    name: 'app-logged',
  }
</script>
