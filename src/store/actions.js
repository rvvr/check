import axios from 'axios'
axios.defaults.baseURL = 'https://app.checkapper.com/api'

export default {
  loadSettings({ commit }) {
    return new Promise(resolve => {
      axios.get('/settings')
        .then(({ data }) => {
          commit('settings', data)
          resolve()
        })
    })
  },

  loadFilms({ commit, getters }) {
    axios.get('/films', {
      params: getters.filters
    })
    .then( ({data}) => {
      commit('films', data.data)
      commit('pagination', data.pagination)
    })
  },

  addFilms({commit}, url) {
    commit('busy', true)
    axios.get(url)
    .then( ({data}) => {
      commit('addFilms', data.data)
      commit('pagination', data.pagination)
      commit('busy', false)
    })
  },

  loadFilm({ commit }, id) {
    if (localStorage.getItem('ct')) id += '?ct=' + localStorage.getItem('ct')
    axios.get('/films/' + id)
    .then( ({data}) => commit('film', data) )
  }
}
