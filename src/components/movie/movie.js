import updates from '../updates/updates.vue'

export default {
  name: 'movie',

  data() {
    return {
      loading: false
    }
  },

  props: ['id'],

  components: {
    updates
  },

  created() {
    document.title = this.$store.getters.filmMetaTitle
    this.loading = true
    this.$store.dispatch('loadFilm', this.$props.id).then(() => {
      this.loading = false
    })
  },

  computed: {
    movie() {
      return this.$store.getters.film
    },
    genre() {
      return this.$store.getters.genres[this.movie.genre_id]
    },
    hours() {
      return this.movie.time_millis / 3600000 | 0
    },
    mins() {
      var mins = (this.movie.time_millis / 1000) % 3600 / 60 | 0
      return mins < 10 ? '0' + mins : mins
    },
    release() {
      // return this.$store.getters.film.release_date ? this.$store.getters.film.release_date.slice(0, 4) : ''
      return this.$store.getters.film.release_date.slice(0, 4)
    }
  },

  methods: {
    close() {
      if (~document.referrer.indexOf(window.location.hostname)) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
      document.title = this.$store.getters.homeMetaTitle
    }
  }
}
