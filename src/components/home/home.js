import layout from '../layout/layout.vue'
import filters from '../filters/filters.vue'
import updates from '../updates/updates.vue'
import { store } from '../../store/store.js'

export default {
  name: 'home',
  components: { layout, filters, updates },

  beforeRouteEnter(to, from, next) {
    store.dispatch('loadSettings').then(() => next())
  },

  created() {
    this.$store.dispatch('loadFilms')
    window.addEventListener('scroll', this.doOnScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.doOnScroll)
  },

  metaInfo() {
    if (this.$route.matched.length === 1) return {
      title: this.$store.getters.homeMetaTitle,
      meta: [
        { name: 'description', content: this.$store.getters.homeMetaDesc },
        { property: 'og:title', content: this.$store.getters.homeMetaTitle },
        { property: 'og:description', content: this.$store.getters.homeMetaDesc },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: document.location.href },
        { property: 'og:site_name', content: 'CheckApper'},
      ]
    }
  },

  computed: {
    loading() {
      return this.$store.getters.busy
    },
    films() {
      return this.$store.getters.films
    },

    dateChanged() {
      var current_date = ''
      return this.films.map(film => {
        if (current_date != film.updated_at) {
          current_date = film.updated_at
          return true
        } else {
          return false
        }
      })
    }
  },

  methods: {
    loadNextPage() {
      if ( !this.$store.getters.busy && this.$store.getters.nextPageExist ) {
        this.$store.dispatch('addFilms', this.$store.getters.nextPageUrl)
      }
    },
    doOnScroll() {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight - window.innerHeight) {
        this.loadNextPage()
      }
    }
  }
}
