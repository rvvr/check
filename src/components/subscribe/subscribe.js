import axios from 'axios'

export default {
  name: 'subscribe',
  data() {
    return {
      message: false
    }
  },
  methods: {
    subscribe() {
      event.target.submit.disabled = true
      axios.put('/subscription', {
        email: event.target.email.value,
        filter: this.$store.getters.filters
      })
      .then( ({data}) => {
        this.message = data.text
      })
    }
  }
}
