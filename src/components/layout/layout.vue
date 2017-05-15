<template lang="jade">
.wrapper
  header
    .wrap
      .top_bar
        a(href="/").logo checkupper.com
        div(class="ya-share2" data-services="facebook,twitter" data-counter="")
        button.filter_trigger#filter_trigger filters
          img.trigger_img.funnel(src="/public/img/filter.svg" width="18px" height="18px")
          img.trigger_img.cross(src="/public/img/close.svg" width="18px" height="16px")
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
  name: 'layout'
}
</script>
