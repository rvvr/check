<template lang="jade">
  .movie_reviews
    a.movie_reviews_toggle(v-if="loading") Loading reviews ...
    a.movie_reviews_toggle(v-if="!loading && !reviews") No reviews yet
    template(v-if="reviews")
      a.movie_reviews_toggle(@click="showReviews")
        span(v-if="!open") Show reviews &#9662
        span(v-if="open") Hide reviews &#9652
      .movie_reviews_content(v-if="open")
        .movie_review(v-for="review in reviews")
          .movie_review_title {{review.title.label}}
          .movie_review_rating
            span.review_star(v-for="n in +review['im:rating']['label']") &#9733
          .movie_review_author Author: {{review.author.name.label}}
          p.movie_review_content {{review.content.label}}


</template>

<script>
import axios from 'axios'

export default {
  name: 'reviews',
  props: ['id'],
  data() {
    return {
      loading: true,
      open: false,
    }
  },
  asyncComputed: {
    reviews() {
      return this.$props.id && axios.get('https://itunes.apple.com/us/rss/customerreviews/id='+ this.$props.id +'/json')
        .then(({data}) => {
          this.loading = false
          return data.feed.entry ? data.feed.entry.slice(1) : false
        })
    }
  },
  methods: {
    showReviews() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="css">
</style>
