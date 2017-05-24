import updates from '../updates/updates.vue'
import { store } from '../../store/store.js'

export default {
  name: 'movie',

  data() {
    return {
      movie: null
    }
  },

  props: ['id'],

  components: {
    updates
  },

  created() {
    document.body.classList.add('modal_fix')
    store.dispatch('loadFilm', this.$props.id).then(() => {
      this.movie = this.$store.getters.film
      this.$emit('updateHead')
    })
  },

  head: {
    title() {
      return {
        inner: this.movie ? this.$store.getters.filmMetaTitle.replace('${filmName}', this.movie.name) : this.$store.getters.homeMetaTitle
      }
    },
    meta() {
      return [
        {
          name: 'description',
          content: this.movie ? this.$store.getters.filmMetaDesc.replace('${filmName}', this.movie.name).replace('${filmDescription}', this.movie.short_description) : this.$store.getters.homeMetaDesc
        }
      ]
    }
  },

  computed: {
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
      return this.movie.release_date.slice(0, 4)
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
