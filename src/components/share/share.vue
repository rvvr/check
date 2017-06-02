<template lang="jade">
div.share
  a(@click="fbUrl" href="#" target="_blank" aria-label="Facebook" title="share")
    img(src="/public/img/fb.svg" width="20" height="20" alt="facebook")
  a(@click="twUrl" href="#" target="_blank" aria-label="Twitter")
    img(src="/public/img/tw.svg" width="20" height="20" alt="twitter")

</template>

<script>
export default {
  name: 'share',
  computed: {
    shareUrl() {
      return window.location.protocol + '//app.' + window.location.host + window.location.pathname + window.location.search
    }
  },
  methods: {
    fbUrl() {
      window.open('https://facebook.com/sharer/sharer.php?u='+this.shareUrl, '_blank')
    },
    twUrl() {
      window.open('https://twitter.com/intent/tweet/?text='+document.title+'&url='+this.shareUrl, '_blank')
    }
  }
}
</script>
<style lang="css">
</style>
