<template>
  <v-container class="d-flex justify-center align-center mt-16">
    <loading-circle />
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import type { NuxtSocket } from 'nuxt-socket-io'
import { Room } from '~/interfaces/room'

interface Data {
  socket: NuxtSocket | undefined
}

export default Vue.extend({
  data: () =>
    ({
      socket: undefined,
    } as Data),
  watch: {
    socket(val: NuxtSocket) {
      val.emit('joinRoom', this.$route.query.name)
      console.log('emitting')
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'home',
    })
    this.socket.emit('joinRoom', this.$route.query.name)
    console.log('emitting')
    console.log(this.$route.query.name)
    this.socket.on('sendRoom', (room: Room) => {
      // this.$router.push(`/room/${room.uuid}`)
      console.log(room)
    })
  },
})
</script>
