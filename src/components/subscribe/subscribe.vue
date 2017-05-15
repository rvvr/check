<template lang="jade">
.filter_subscribe
  .subscribe_title Subscribe
  p.subscribe_desc Subscribe this search to get  to daily
    |  <br> email updates of movies!
  form.sub_form(name="subscribe_form" @submit.prevent="subscribe")
    input.sub_email(type="email" name="email" placeholder="Your email" required)
    input.sub_submit(type="submit" value="subscribe")
</template>
<script src="./subscribe.js">
