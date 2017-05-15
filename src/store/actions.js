import axios from 'axios'
axios.defaults.baseURL = 'https://films.checkapper.com'

export default {
  loadFilms(state) {
    return new Promise((resolve, reject) => {
      axios.get('/films', {
        params: state.getters.filters
      })
      .then( data => {
        state.commit('films', data.data.data)
        state.commit('pagination', data.data.pagination)
        resolve()
      })
    })
  },

  addFilms({commit}, url) {
    commit('busy', true)
    axios.get(url)
    .then( data => {
      commit('addFilms', data.data.data)
      commit('pagination', data.data.pagination)
      commit('busy', false)
    })
  },

  loadSettings({commit}) {
    axios.get('/settings')
    .then(data => commit('settings', data.data))
  },

  loadFilm({commit}, id) {
    return new Promise( (resolve, reject) => {
      axios.get('/films' + id)
      .then(data=> {
        commit('film', data.data)
        resolve()
      })
    })
  }

}
