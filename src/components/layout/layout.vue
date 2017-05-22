<template lang="jade">
.wrapper(:class="{filter_open: filter}")
  header
    .wrap
      .top_bar
          a(href="/").logo checkupper.com
          button.filter_trigger(@click="toggleSide")
            img(v-if="!filter" src="/public/img/filter.svg" width="20" height="20")
            img(v-if="filter" src="/public/img/close.svg" width="20" height="20")
  slot
  footer
    .wrap
      span.copyright checkupper.com
      a.facebook
        img(src="/public/img/fb.svg" width="20" height="20" alt="facebook")
      a.twitter
        img(src="/public/img/tw.svg" width="20" height="20" alt="twitter")
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {
        filter: false
      }
    },
    methods: {
      toggleSide() {
        this.filter = !this.filter
      }
    }
  }
</script>
