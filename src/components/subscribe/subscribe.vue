<template lang="jade">
.filter_subscribe
  .subscribe_title Subscribe
  template(v-if="!message")
    p.subscribe_desc Subscribe this search to get  to daily
      |  <br> email updates of movies!
    form.sub_form(name="subscribe_form" @submit.prevent="subscribe")
        input.sub_email(type="email" name="email" placeholder="Your email" required)
        input.sub_submit(type="submit" value="subscribe" name="submit")
        .loader(v-if="loading")
  template(v-if="message")
    p.subscribe_desc {{message}}
</template>
<script src="./subscribe.js">
