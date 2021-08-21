import { shallowMount } from '@vue/test-utils'
import ThemeBtn from './ThemeBtn.vue'

xdescribe('ThemeBtn component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(ThemeBtn)
    expect(wrapper).toBeDefined()
  })
})
