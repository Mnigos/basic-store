import { shallowMount } from '@vue/test-utils'
import NavBar from './NavBar.vue'

describe('NavBar component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper).toBeDefined()
  })
})
