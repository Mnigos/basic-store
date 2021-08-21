import Vue from 'vue'
import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.prototype.$router = {}

const createBlankComponent = () => ({
  render(h) {
    return h('div', this.$slots.default)
  },
})

// Mock Nuxt components
;['client-only', 'nuxt-link'].forEach(name => {
  config.stubs[name] = createBlankComponent()
})
