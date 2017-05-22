<template lang="jade">
layout
  intro
  main#main
    .wrap
      .movies
        template(v-for="(film, index) in films")
          h2.daily_title(v-if="dateChanged[index]") Updates for {{ film.updated_at }}
          router-link.movie(:to="'/update/' + film.history_hash" tag="div")
            .movie_content
              .movie_poster
                img.movie_poster_img(:src="film.poster_img" width="120" height="180" v-bind:srcset="film.poster_img_2x + ' 2x'")
              .movie_about
                .movie_desc
                  h3.movie_title {{ film.name }}
                  p {{ film.short_description }} ...

                updates(:updates="film.changes")
        .loader(v-if="$store.getters.busy")
      filters
  router-view
</template>

<script src="./home.js"></script>
