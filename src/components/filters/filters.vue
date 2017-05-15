<template lang="jade">
.filter#filter
  .wrap
    .filters#filters
      .filter_options
        .options_title Sales filtering
        .options
          .option_title HD version
          .option_items
            .option_item
                input.checkbox(:checked="available_hd" type="checkbox" id="available_hd" name="available_hd" @change="handleFilter")
                label(for="available_hd")
                  span Became available
            .option_item
              input.checkbox(:checked="decreased_hd" type="checkbox" id="decreased_hd" name="decreased_hd" @change="handleFilter")
              label(for="decreased_hd")
                span Decreased a price
            .option_item
              input.checkbox(:checked="available_hd_rent" type="checkbox" id="available_hd_rent" name="available_hd_rent" @change="handleFilter")
              label(for="available_hd_rent")
                span Became available for rent
            .option_item
              input.checkbox(:checked="decreased_hd_rent" type="checkbox" id="decreased_hd_rent" name="decreased_hd_rent" @change="handleFilter")
              label(for="decreased_hd_rent")
                span Decreased a price for rent
        .options
          .option_title SD version
          .option_items
            .option_item
              input.checkbox(:checked="available_sd" type="checkbox" id="available_sd" name="available_sd" @change="handleFilter")
              label(for="available_sd")
                span Became available
            .option_item
              input.checkbox(:checked="decreased_sd" type="checkbox" id="decreased_sd" name="decreased_sd" @change="handleFilter")
              label(for="decreased_sd")
                span Decreased a price
            .option_item
              input.checkbox(:checked="available_sd_rent" type="checkbox" id="available_sd_rent" name="available_sd_rent" @change="handleFilter")
              label(for="available_sd_rent")
                span Became available for rent
            .option_item
              input.checkbox(:checked="decreased_sd_rent" type="checkbox" id="decreased_sd_rent" name="decreased_sd_rent" @change="handleFilter")
              label(for="decreased_sd_rent")
                span Decreased a price for rent
      subscribe

</template>

<script src="./filters.js">
