<template>
  <div>
    <v-app-bar elevate-on-scroll>
      <NuxtLink to="/">
        <v-app-bar-title>
          <v-img :src="require('@/static/logo.png')" height="40px" width="40px">
          </v-img>
        </v-app-bar-title>
      </NuxtLink>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="(link, i) in links" :key="i" :to="link.href" text>{{
          link.title
        }}</v-btn>
      </v-toolbar-items>

      <ThemeBtn />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    links: [
      { title: 'Log in', href: '/auth/login' },
      { title: 'Register', href: '/auth/register' },
    ] as object[],
  }),
})
</script>
