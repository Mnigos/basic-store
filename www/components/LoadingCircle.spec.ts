import { shallowMount } from '@vue/test-utils'
import LoadingCircle from './LoadingCircle.vue'

describe('LoadingCircle component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(LoadingCircle)
    expect(wrapper).toBeDefined()
  })
})
