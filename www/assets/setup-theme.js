export default function setupTheme() {
  this.$vuetify.theme.dark = this.$store.state.darkTheme
  this.$vuetify.theme.light = !this.$store.state.darkTheme

  this.$store.subscribe(({ type }, state) => {
    if (type === 'changeTheme') {
      this.$vuetify.theme.dark = state.darkTheme
      this.$vuetify.theme.light = !state.darkTheme
    }
  })
}
