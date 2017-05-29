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

  film( {film} ) {
    return film
  },

  // settings
  genres({ settings }) {
    return settings.films.genres
  },

  genre({ settings, film }) {
    return settings.films.genres[film.genre_id]
  },

  homeMetaTitle({ settings }) {
    return settings.seo.main.title
  },
  
  homeMetaDesc( {settings} ) {
    return settings.seo.main.description
  },

  filmMetaTitle({ settings, film }) {
    return settings.seo.film.title
      .replace('${filmName}', film.name)
  },

  filmMetaDesc({ settings, film }) {
    return settings.seo.film.description
      .replace('${filmName}', film.name)
      .replace('${filmDescription}', film.short_description)
  },
}
