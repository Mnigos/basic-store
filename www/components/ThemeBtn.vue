<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-btn icon @click="changeTheme" v-on="on">
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </template>

    <span>Change theme</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import setupTheme from '~/assets/setup-theme'

export default Vue.extend({
  name: 'ThemeBtn',
  mounted() {
    setupTheme.call(this)
  },
  methods: mapMutations(['changeTheme']),
})
</script>
