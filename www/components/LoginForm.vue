<template>
  <v-card width="700" height="500" class="mx-auto mt-5">
    <v-card-title class="pb-0 d-flex justify-center ma-7">
      <h1>Log In</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="mt-10 d-flex justify-center align-center">
      <v-form style="min-width: 320px">
        <v-text-field
          v-model="credentials.nameOrEmail"
          label="Name or email"
          data-test="nameOrEmailInput"
          required
          outlined
          clearable
          :error-messages="nameOrEmailErrors"
          @input="clickedName = true"
          @blur="clickedName = true"
          @click="clickedName = true"
        ></v-text-field>
        <v-text-field
          v-model="credentials.pass"
          label="Password"
          required
          outlined
          clearable
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="passErrors"
          @input="clickedPass = true"
          @blur="clickedPass = true"
          @click="clickedPass = true"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="ma-5 d-flex justify-center">
      <v-btn class="ma-7" color="accent" data-test="submitBtn" @click="submit">
        Log In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import { Credentials } from '~/interfaces/credentials'

export default Vue.extend({
  data: () => ({
    credentials: {
      nameOrEmail: '',
      pass: '',
    },
    showPass: false,
    clickedName: false,
    clickedPass: false,
    authError: false,
  }),
  computed: {
    nameOrEmailErrors() {
      const errors: string[] = []
      if (!this.credentials.nameOrEmail && this.clickedName)
        errors.push('Name/Email is required')

      if (this.authError) errors.push('Wrong login or password!')

      return errors
    },
    passErrors() {
      const errors: string[] = []
      if (!this.credentials.pass && this.clickedPass)
        errors.push('Password is required')
      if (this.authError) errors.push('Wrong login or password!')

      return errors
    },
  },
  methods: {
    submit() {
      this.clickedName = true
      this.clickedPass = true

      if (!this.credentials.nameOrEmail || !this.credentials.pass) return

      this.$axios
        .$post(
          `${this.$store.state.apiUrl}/auth/login`,
          this.credentials as Credentials,
        )
        .then((res: AxiosResponse) => {
          this.$store.state.token = res.data.access_token
          this.$router.push('/')
        })
        .catch(() => {
          this.authError = true
        })
    },
  },
})
</script>
