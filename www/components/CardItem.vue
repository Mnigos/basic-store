<template>
  <div>
    <v-card class="d-flex justify-space-between" height="100">
      <v-img :src="imgSrc" width="100"></v-img>
      <v-card-title width="200px">{{ title }}</v-card-title>
      <v-card-text class="mt-10 ml-15 pl-15"><h2>${{ price }}</h2></v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
    imgSrc: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
  },
})
</script>
