
<template>
  <div>
    <v-app-bar
      ref="appBar"
      dense
      :color="$vuetify.theme.dark ? null : 'white'"
      elevate-on-scroll
    >
      <v-toolbar-title style="width: 200px">Weed Store</v-toolbar-title>
      <v-tabs align-with-title>
        <v-tab v-for="({ title, link, icon }, i) in links" :key="i" :to="link">
          <v-icon>{{ icon }}</v-icon>
          {{ title }}
          </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      default: '',
      type: String,
    },
    components: {
      default: undefined,
      type: Array,
    },
  },
  data() {
    return {
      searchClosed: true,
      search: undefined,
      drawer: false,
      links: [
        {
          title: 'Home',
          icon: 'mdi-home',
          link: '/',
        },
      ],
    }
  },
})
</script>
