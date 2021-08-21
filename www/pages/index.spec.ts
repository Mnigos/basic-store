import { shallowMount } from '@vue/test-utils'
import index from './index.vue'

describe('Index file', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(index)
    expect(wrapper).toBeDefined()
  })
})
