import subscribe from '../subscribe/subscribe.vue'

export default {
  name: 'filters',

  components: {subscribe},

  computed: {
    available_hd() { return this.$store.getters.filters['available_hd'] },
    decreased_hd() { return this.$store.getters.filters['decreased_hd'] },
    available_hd_rent() { return this.$store.getters.filters['available_hd_rent'] },
    decreased_hd_rent() { return this.$store.getters.filters['decreased_hd_rent'] },
    available_sd() { return this.$store.getters.filters['available_sd'] },
    decreased_sd() { return this.$store.getters.filters['decreased_sd'] },
    available_sd_rent() { return this.$store.getters.filters['available_sd_rent'] },
    decreased_sd_rent() { return this.$store.getters.filters['decreased_sd_rent'] },
  },

  methods: {
    handleFilter(event) {
      let key = event.target.name
      let value = event.target.checked ? 1 : 0
      if (window.scrollY) window.scrollTo(0, 120)
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
