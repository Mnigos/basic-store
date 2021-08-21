import { shallowMount } from '@vue/test-utils'
import FooterInfo from './FooterInfo.vue'

describe('FooterInfo component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(FooterInfo)
    expect(wrapper).toBeDefined()
  })
})
