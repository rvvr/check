export default {

  busy( {busy} ) {
    return busy
  },

  films( {films} ) {
    return films
  },

  nextPageUrl( {pagination} ) {
    return pagination.next_page_url
  },

  nextPageExist( {pagination} ) {
    return pagination.has_more_pages
  },

  filters( {filters} ) {
    return filters
  },

  activeFilters( {filters} ) {
    let activeFilters = {}
    for (var filter in filters) {
      if (filters[filter] === 1) activeFilters[filter] = 1
    }
    return activeFilters
  },

  genres( {settings} ) {
    return settings.films.genres
  },

  film( {film} ) {
    return film
  },

  filmMetaTitle( {settings} ) {
    return settings.seo.film.title
  },

  homeMetaTitle( {settings} ) {
    return settings.seo.main.title
  }

}
