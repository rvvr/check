<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('loadSettings')
    }
  }
</script>

<style src="./assets/stylus/style.styl" lang="stylus">
