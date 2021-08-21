<template>
  <v-footer app inset absolute width="auto">
    <v-flex>&copy; {{ new Date().getFullYear() }} <b>Rigtch</b> </v-flex>

    <v-spacer></v-spacer>

    <v-layout justify-end>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        class="mx-2"
        :href="link.href"
        target="_blank"
        icon
      >
        <v-icon size="24px">
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterInfo',
  data: () => ({
    links: [
      {
        icon: 'mdi-github',
        href: 'https://github.com/Rigtch',
      },
      {
        icon: 'mdi-discord',
        href: 'https://discord.gg/VUQXfJmRH2',
      },
    ],
  }),
})
</script>
