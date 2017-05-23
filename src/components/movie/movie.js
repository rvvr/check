import updates from '../updates/updates.vue'
import { store } from '../../store/store.js'

export default {
  name: 'movie',

  components: {
    updates
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch('loadFilm', to.params.id).then(() => next())
  },

  created() {
    document.body.classList.add('modal_fix')
  },

  head: {
    title() {
      return {
        inner: this.$store.getters.filmMetaTitle.replace(
          '${filmName}', this.$store.getters.film.name
        )
      }
    },
    meta() {
      return [
        { name: 'description', content: this.$store.getters.film.short_description }
      ]
    }
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
      return this.$store.getters.film.release_date.slice(0, 4)
    }
  },

  methods: {
    close() {
      document.body.classList.remove('modal_fix')
      if (~document.referrer.indexOf(window.location.hostname)) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
      document.title = this.$store.getters.homeMetaTitle
    }
  }
}
