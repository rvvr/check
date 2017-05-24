<template lang="jade">
transition(name="modal")
  .modal-mask
    .modal-wrapper(@click.self="close")
      .modal-container.movie_modal
        .movie_content
          .modal-close
            img(src="/public/img/close.svg" width="16" height="16" @click="close")
          .loader(v-if="!movie")
          template(v-if="movie")
            .movie_poster_big
              img.movie_poster_img(:src="movie.poster_img_2x" v-bind:srcset="movie.poster_img_4x + ' 2x'" width="240" height="360")
            .movie_details
              h3.movie_title {{ movie.name }}
              .movie_information
                span {{hours}}h {{ mins }}min
                span {{ genre }}
                span {{ release }}
                span {{ movie.country }}
                span {{ movie.content_advisory_rating }}
              //- .movie_cast Cast: {{ movie.artist_name}}
              //- updates(:updates="movie.changes")
              a.btn.yel_btn(:href="movie.view_url" target="_blank") Go to itunes
              p.long_description {{ movie.long_description }}
              share
</template>
<script src="./movie.js"></script>
