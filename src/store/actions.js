import axios from 'axios'
axios.defaults.baseURL = 'https://app.checkapper.com/api'

export default {
  loadSettings({ commit }) {
    axios.get('/settings')
      .then(data => commit('settings', data.data))
  },

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

  loadFilm({ commit }, id) {
    var url = id
    if (localStorage.getItem('ct')) url += '?ct=' + localStorage.getItem('ct')
    return new Promise( (resolve, reject) => {
      axios.get('/films/' + url)
      .then(data=> {
        commit('film', data.data)
        resolve()
      })
    })
  }

}
