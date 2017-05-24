import axios from 'axios'

export default {
  name: 'subscribe',
  data() {
    return {
      message: false,
      loading: false
    }
  },
  methods: {
    subscribe() {
      event.target.submit.disabled = true
      this.loading = true
      console.log(  this.loading)
      axios.put('/subscription', {
        email: event.target.email.value,
        filter: this.$store.getters.filters
      })
      .then( ({data}) => {
        this.message = data.text
        this.loading = false
      })
    }
  }
}
