<template lang="jade">
transition(name="modal")
  .modal-mask
    .modal-wrapper(@click.self="close")
      .modal-container.movie_modal
        .loader(v-if="!movie.name")
        template(v-if="movie.name")
          .movie_content
            .modal-close
              img(src="/public/img/close.svg" width="16" height="16" @click="close")

            .movie_main
              .movie_poster_big
                img.movie_poster_img(:src="movie.poster_img_2x" v-bind:srcset="movie.poster_img_4x + ' 2x'" width="240" height="360" v-if="movie.poster_img_2x")
                span(v-if="!movie.poster_img_2x") No Preview Available
              .movie_all_prices
                table.movie_all_prices_table
                  tr
                    td.update_title Buy HD
                    td {{movie.prices.hd ? '$ ' + movie.prices.hd : '-'}}
                    td.update_title Buy SD
                    td {{movie.prices.sd ? '$ ' + movie.prices.sd : '-'}}
                  tr
                    td.update_title Rent HD
                    td {{movie.prices.hd_rent ? '$ ' + movie.prices.hd_rent : '-'}}
                    td.update_title Rent SD
                    td {{movie.prices.sd_rent ? '$ ' + movie.prices.sd_rent : '-'}}
              share
            .movie_details
              h3.movie_title {{ movie.name }}
              .movie_information
                span {{hours}}h {{ mins }}min
                span {{ genre }}
                span {{ release }}
                span {{ movie.country }}
                span {{ movie.content_advisory_rating }}
              updates(:updates="movie.changes")
              a(:href="movie.view_url" target="_blank")
                img(src="/public/img/itunes-lrg.svg" width="110" height="40")
              // .trailer
                d-player(:video="video" lang="en")
              p.long_description {{ movie.long_description }}
          reviews(:id="movie.track_id")
</template>
<script src="./movie.js"></script>
