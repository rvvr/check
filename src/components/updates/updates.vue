<template lang="jade">
.movie_updates
  .movie_update(v-for="(update, key) in updates")
    template(v-if="key == 'decreased_hd'")
      .update_title hd buy
        span.old_price $ {{ update.last_price }}
      .update_info $ {{ update.price }}
        span.update_discount -{{ update.discount }}%
    template(v-if="key == 'decreased_sd'")
      .update_title sd buy
        span.old_price $ {{ update.last_price }}
      .update_info $ {{update.price}}
        span.update_discount -{{ update.discount }}%
    template(v-if="key == 'available_hd'")
      .update_title hd buy
      .update_info ${{update.price}}
        span.update_discount Available
    template(v-if="key == 'available_sd'")
      .update_title sd buy
      .update_info ${{update.price}}
        span.update_discount Available
    template(v-if="key == 'decreased_hd_rent'")
      .update_title hd rent
        span.old_price $ {{ update.last_price }}
      .update_info $ {{ update.price }}
        span.update_discount -{{ update.discount }}%
    template(v-if="key == 'decreased_sd_rent'")
      .update_title sd rent
        span.old_price $ {{ update.last_price }}
      .update_info $ {{update.price}}
        span.update_discount -{{ update.discount }}%
    template(v-if="key == 'available_hd_rent'")
      .update_title hd rent
      .update_info ${{update.price}}
        span.update_discount Available
    template(v-if="key == 'available_sd_rent'")
      .update_title sd rent
      .update_info ${{update.price}}
        span.update_discount Available
</template>

<script>
export default {
  name: 'updates',
  props: ['updates', 'prices']
}
</script>
