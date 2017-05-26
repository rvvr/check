export default {
  film(state, film) {
    state.film = film
  },

  films(state, films) {
    state.films = films
  },

  addFilms(state, films) {
    state.films = state.films.concat(films)
  },

  pagination(state, pagination) {
    state.pagination = pagination
  },

  busy(state, busy) {
    state.busy = busy
  },

  filter(state, filter) {
    state.filters[filter.key] = filter.value
  },

  settings(state, data) {
    state.settings = data
  }
}
