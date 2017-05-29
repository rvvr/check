<template>
  <router-view></router-view>
</template>
<script>
  export default {
    name: 'app',
    created() {
      var q = window.location.search,
          ct = q.slice(q.indexOf('ct=') + 3)
      if (ct) localStorage.setItem('ct', ct)
    }
  }
</script>
<style src="./assets/stylus/style.styl" lang="stylus">
