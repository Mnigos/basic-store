<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <v-alert
          :value="alert"
          dark
          dismissible
          width="700"
          border="left"
          close-text="Close Alert"
          class="mx-auto"
        >
          <p>Set your nickname</p>
          <v-text-field
            v-model="nickname"
            label="Nickname"
            :error-messages="nicknameErrors"
            data-test="nicknameInput"
            required
            outlined
            clearable
            @input="clickedNickname = true"
            @blur="clickedNickname = true"
            @click="clickedNickname = true"
          ></v-text-field>
          <v-btn color="accent" data-test="confirmJoiningBtn" @click="getRoom">
            Join Room
          </v-btn>
        </v-alert>
        <v-card v-if="!alert" width="700" class="mx-auto">
          <v-card-title>Rigtch</v-card-title>

          <v-card-subtitle>
            Web application that allows you to talk with random people online
            with your friends in room.
          </v-card-subtitle>

          <v-card-text>
            Rigtch is a free online chat website that allows users to socialize
            with others. The service randomly pairs users in many-to-many rooms
            where they chat.
          </v-card-text>

          <v-card-actions class="ma-5 d-flex justify-center">
            <v-btn color="accent" data-test="joinRoomBtn" @click="alert = true">
              Join room
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    nickname: '',
    alert: false,
    clickedNickname: false,
  }),
  computed: {
    nicknameErrors() {
      const errors: string[] = []
      if (!this.nickname && this.clickedNickname)
        errors.push('Nickname is required')

      return errors
    },
  },
  methods: {
    getRoom() {
      if (!this.nickname) return (this.clickedNickname = true)
      this.$router.push({
        path: 'room',
        query: { name: this.nickname },
      })
    },
  },
})
</script>
