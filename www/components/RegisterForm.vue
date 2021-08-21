<template>
  <v-card width="700" height="600" class="mx-auto mt-5">
    <v-card-title class="pb-0 d-flex justify-center ma-7">
      <h1>Sign In</h1>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="mt-10 d-flex justify-center align-center flex-column">
      <v-form style="min-width: 320px">
        <v-text-field
          v-model="user.name"
          label="Username"
          data-test="nameInput"
          required
          outlined
          :error-messages="nameErrors"
          @input="clickedName = true"
          @blur="clickedName = true"
          @click="clickedName = true"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          label="Email"
          required
          outlined
          :error-messages="emailErrors"
          @input="clickedEmail = true"
          @blur="clickedEmail = true"
          @click="clickedEmail = true"
        ></v-text-field>
        <v-text-field
          v-model="user.pass"
          label="Password"
          required
          outlined
          :type="showPass ? 'text' : 'password'"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :error-messages="passErrors"
          @input="clickedPass = true"
          @blur="clickedPass = true"
          @click="clickedPass = true"
          @click:append="showPass = !showPass"
        ></v-text-field>
      </v-form>
      <p class="error--text">{{ errorMessage }}</p>
    </v-card-text>
    <v-card-actions class="ma-5 d-flex justify-center">
      <v-btn class="ma-7" color="accent" data-test="submitBtn" @click="submit">
        Sign In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosError, AxiosResponse } from 'axios'
import { CreateUser } from '~/interfaces/createUser'

export default Vue.extend({
  data: () => ({
    user: {
      name: '',
      email: '',
      pass: '',
    },
    showPass: false,
    clickedName: false,
    clickedEmail: false,
    clickedPass: false,
    errorMessage: '',
    nameConflict: false,
  }),
  computed: {
    nameErrors() {
      const errors: string[] = []
      if (this.clickedName) {
        errors.push(...nameValidation(this.user.name))
      }
      if (this.nameConflict) errors.push('User with that name already exists')

      return errors
    },
    emailErrors() {
      const errors: string[] = []
      if (this.clickedEmail) {
        errors.push(...emailValidation(this.user.email))
      }

      return errors
    },
    passErrors() {
      const errors: string[] = []
      if (this.clickedPass) {
        errors.push(...passValidation(this.user.pass))
      }

      return errors
    },
  },
  methods: {
    submit() {
      this.clickedName = true
      this.clickedEmail = true
      this.clickedPass = true

      if (
        nameValidation(this.user.name).length ||
        emailValidation(this.user.email).length ||
        passValidation(this.user.pass).length
      )
        return
      this.$axios
        .$post(
          `${this.$store.state.apiUrl}/auth/register`,
          this.user as CreateUser,
        )
        .then((res: AxiosResponse) => {
          this.$store.state.token = res.data.access_token
          this.$router.push('/')
        })
        .catch((e: AxiosError) => {
          if (e.response?.status === 409) this.nameConflict = true
          if (e.response?.status === 400)
            this.errorMessage = 'Something went wrong with validation'

          this.errorMessage =
            'Something went wrong ;/. Please report this error to us.'
        })
    },
  },
})

function nameValidation(name: string): string[] {
  const errors: string[] = []

  if (!name) errors.push('Name is required')
  if (name.length < 4) errors.push('Name must contain more than 4 characters')
  return errors
}

function emailValidation(email: string): string[] {
  const errors: string[] = []

  if (!email) errors.push('Email is required')
  if (!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))
    errors.push('Email must be correct')

  return errors
}
function passValidation(pass: string): string[] {
  const errors: string[] = []

  if (!pass) errors.push('Password is required')
  if (pass.length < 8)
    errors.push('Password must contain more than 8 characters')
  if (!pass.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/))
    errors.push('Password must contain at one number and capital letter')
  return errors
}
</script>
