import updates from '../updates/updates.vue'
import share from '../share/share.vue'
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
    updates, share
  },

  created() {

    var filmUrl = this.$props.id,
        ct =  null

    if (this.$route.query.ct) {
      ct = this.$route.query.ct
      localStorage.setItem('ct', this.$route.query.ct)
    }

    if (localStorage.getItem('ct')) {
      ct = localStorage.getItem('ct')
    }

    if (ct) filmUrl += '?=' + ct

    document.body.classList.add('modal_fix')
    store.dispatch('loadFilm', filmUrl).then(() => {
      this.movie = this.$store.getters.film
      this.$emit('updateHead')
    })
  },

  head: {
    title() {
      if (this.movie) return {
        inner: this.$store.getters.filmMetaTitle
          .replace('${filmName}', this.movie.name)
      }
    },
    meta() {
      if (this.movie) return [
        {
          name: 'description',
          content: this.$store.getters.filmMetaDesc
            .replace('${filmName}', this.movie.name)
            .replace('${filmDescription}', this.movie.short_description)
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
