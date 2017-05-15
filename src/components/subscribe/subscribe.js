import axios from 'axios'

export default {
  name: 'subscribe',
  methods: {
    subscribe() {
      axios.post('/films/subscribe', {
        email: event.target.email.value,
        filter: this.$store.getters.filters
      }).then(()=> console.log('test'))
    }
  }
}
