import updates from '../updates/updates.vue'
import share from '../share/share.vue'

export default {
  name: 'movie',
  props: ['id'],
  components: {updates, share},

  created() {
    this.$store.commit('film', {})
    this.$store.dispatch('loadFilm', this.$props.id)
    document.body.classList.add('modal_fix')
  },

  metaInfo() {
    if (this.movie.name) {
      return {
        title: this.$store.getters.filmMetaTitle,
        meta: [
          { name: 'description', content: this.$store.getters.filmMetaDesc },
          { property: 'og:title', content: this.$store.getters.filmMetaTitle, },
          { property: 'og:description', content: this.$store.getters.filmMetaDesc },
          { property: 'og:type', content: 'video.movie' },
          { property: 'og:url', content: document.location.href },
          { property: 'og:site_name', content: 'CheckApper' },
          { property: 'og:image', content: this.movie.poster_img_2x },
          { property: 'og:video:actor', content: this.movie.artist_name },
          { property: 'og:video:duration', content: this.secs },
          { property: 'og:video:release_date', content: this.movie.release_date },
          { property: 'og:video:tag', content: this.genre },
        ]
      }
    } else {
      return {
        title: '...'
      }
    }
  },

  computed: {
    movie() {
      return this.$store.getters.film
    },
    genre() {
      return this.$store.getters.genre
    },
    hours() {
      return this.movie.time_millis / 3600000 | 0
    },
    secs() {
      return this.movie.time_millis / 1000 | 0
    },
    mins() {
      let mins = (this.movie.time_millis / 1000) % 3600 / 60 | 0
      return mins < 10 ? '0' + mins : mins
    },
    release() {
      let release = this.movie.release_date || ''
      return release.slice(0, 4)
    }
  },

  methods: {
    close() {
      document.body.classList.remove('modal_fix')
      console.log(
        document.referrer,
        window.location.hostname,
        ~document.referrer.indexOf(window.location.hostname)
      )
      if (~document.referrer.indexOf(window.location.hostname)) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    }
  }
}
