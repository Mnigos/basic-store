<template>
  <v-container class="d-flex flex-wrap" height="100">
    <div v-for='({title, price, imgSrc}, i) in items' :key='i' class="ma-5">
      <shop-item :title='title' :price='price' :img-src='imgSrc'/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { Item } from '../interfaces/item'

interface Data {
  items: Item[]
}

export default Vue.extend({
  data: () => <Data>({
    items: [
      {
        title: 'Aligator Haze',
        price: 69,
        imgSrc: 'https://a.allegroimg.com/s1024/0cce55/71e4c3b240d688d3cf0b084567e4',
      },
      {
        title: 'Mnigos Haze',
        price: 420,
        imgSrc: 'https://avatars.githubusercontent.com/u/56691628?v=4',
      },
      {
        title: 'ŻUBRERK ija',
        price: 2390,
        imgSrc: 'https://avatars.githubusercontent.com/u/70911746?v=4',
      }
    ]
  })
})
</script>
