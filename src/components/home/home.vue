<template lang="jade">
layout
  main#main
    .wrap
      .movies
        template(v-if="!loading && !films.length")
          h2.daily_title No movies found :(
        .loader(v-if="!films.length && loading")
        template(v-for="(film, index) in films")
          h2.daily_title(v-if="dateChanged[index]") Updates for {{ film.updated_at }}
          router-link.movie(:to="'/update/' + film.history_hash" tag="div")
            .movie_content
              .movie_poster
                img.movie_poster_img(:src="film.poster_img" width="120" height="180" v-bind:srcset="film.poster_img_2x + ' 2x'" v-if="film.poster_img")
                span(v-if="!film.poster_img") No Preview Available
              .movie_about
                .movie_desc
                  h3.movie_title {{ film.name }}
                  p {{ film.short_description }} ...
                updates(:updates="film.changes")
        .loader(v-if="loading && films.length")
      filters
  router-view
</template>

<script src="./home.js"></script>
