<template>
    <v-card class='mx-auto ma-5' width='256' height='485'>
      <div class='d-flex justify-center'>
        <v-img :src="imgSrc" class='mt-2'>

        </v-img>
      </div>
      <v-card-title>
        <div class='mr-5'> {{ title }} </div>
        <v-btn color='primary' class='ml-10' icon>
          <v-icon>
            mdi-cart
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle class='mt-3'>
        ${{ price }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color='primary' class='mt-12'>
          more info
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script lang='ts'>
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
