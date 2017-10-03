<template>
  <div class="app--carnets">
    <h2>Carnets</h2>
    <ul>
      <li v-for="(carnet, index) in $store.state.carnets" :key='index' v-on:click="changeCarnet(index)">
        {{ carnet.name }}
      </li>
      <li v-on:click="changeCarnet(null)">Tous les carnets</li>
    </ul>

    <div class="notes">
      <li v-for="(note, index) in notes" :key='index'>
        <strong>{{ note.name }}</strong><br>
        {{ note.content }}
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carnets',
    computed: {
      notes() {
        if (this.$store.state.currentCarnet == null) {
          let notes = [];

          this.$store.state.carnets.forEach((carnet) => {
            notes = notes.concat(carnet.notes)
          });
          return notes
        }
        else {
          return this.$store.state.carnets[this.$store.state.currentCarnet].notes
        }
      }
    },
    methods: {
      changeCarnet(index) {
        /**
         * Commit puisqu'on ne passe pas par de l'asynchrone (et donc pas d'action puis de dispatch)
         */
        this.$store.commit('changeCarnet', index)
      }
    }
  }
</script>
