<template lang="jade">
.intro(v-if="!intro")
  .wrap
    h1.title Updates and Deals
      |  <br /> for Movies on the iTunes Store
    p.description We are tracking iTunes films prices an if the changes of adding
      |  <br /> a new versions (HD, SD or ability to rent)
    button.big_btn(@click="hideIntro") got it
</template>

<script>
  export default {
    name: "intro",

    data() {
      return {
        intro: localStorage.wasIntro || false,
      }
    },

    methods: {
      hideIntro() {
        this.intro = true
        localStorage.wasIntro = true
      },
    }
  }
</script>
