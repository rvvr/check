import axios from 'axios'

export default {
  name: 'subscribe',
  methods: {
    subscribe() {
      axios.put('/films/subscribe', {
        email: event.target.email.value,
        filter: this.$store.getters.filters
      }).then((data)=> console.log(data))
    }
  }
}
