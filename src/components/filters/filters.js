import subscribe from '../subscribe/subscribe.vue'

export default {
  name: 'filters',

  components: {subscribe},

  computed: {
    filters() {
      return this.$store.getters.filters
    }
  },

  methods: {
    handleFilter(event) {
      let key = event.target.name
      let value = event.target.checked ? 1 : 0
      if (window.scrollY) window.scrollTo(0, 0)
      this.$store.commit('filter', {key, value})
      this.$store.dispatch('loadFilms')
      this.$router.push({query: this.$store.getters.activeFilters})
    }
  },

  created() {
    if (window.location.search) {
      var filters = this.$store.getters.filters,
          query = this.$route.query
      for (var filter in query) {
        if (filter in filters) {
          this.$store.commit('filter', {key: filter, value: query[filter]})
        }
      }
    }
  }
}
