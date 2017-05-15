import layout from '../layout/layout.vue'
import intro from '../intro/intro.vue'
import filters from '../filters/filters.vue'
import updates from '../updates/updates.vue'

export default {
  name: 'home',

  components: {
    layout, intro, filters, updates
  },

  created() {
    this.$store.dispatch('loadFilms')
    // this.$store.dispatch('loadSettings')
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

    // filter trigger
    var filterTrigger = document.getElementById('filter_trigger')
    var filter = document.getElementById('filter')
    filterTrigger.addEventListener('click', function (e) {
      if (filter.classList.contains('hide')) {
        filter.classList.remove('hide')
        filterTrigger.classList.add('open')
      } else {
        filter.classList.add('hide')
        filterTrigger.classList.remove('open')
      }
    })
  },
}
