import layout from '../layout/layout.vue'
import intro from '../intro/intro.vue'
import filters from '../filters/filters.vue'
import updates from '../updates/updates.vue'
import { store } from '../../store/store.js'


export default {
  name: 'home',

  components: {
    layout, intro, filters, updates
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch('loadFilms').then(() => next())
  },

  head: {
    title() {
      if(this.$route.matched.length === 1) return {
        inner: this.$store.getters.homeMetaTitle
      }
    },
    meta() {
      if(this.$route.matched.length === 1) return [
        { name: 'description', content: this.$store.getters.homeMetaDesc }
      ]
    }
  },

  computed: {
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
    }
  },

  mounted() {
    var self = this,
        filters = document.getElementById('filters'),
        filtersPosition = filters.offsetTop,
        main = document.getElementById('main'),
        mainBottomPosition = main.offsetTop + main.offsetHeight

    var doOnScroll = function() {
      // infinite scroll
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight - window.innerHeight) {
        self.loadNextPage()
      }
      // stick filter
      if (filters.getBoundingClientRect().top <= 20) {
        filters.classList.add('fixed')
      } else {
        filters.classList.remove('fixed')
      }
      if (window.pageYOffset < filtersPosition + 60) {
        filters.classList.remove('fixed')
      }
    }

    document.addEventListener('scroll', doOnScroll)
  },
}
