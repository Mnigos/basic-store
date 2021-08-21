import { shallowMount } from '@vue/test-utils'
import LandingInfo from './LandingInfo.vue'

describe('LandingInfo component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(LandingInfo)
    expect(wrapper).toBeDefined()
  })

  xit('Should not go to /room cause name was not provided', async () => {
    const wrapper = shallowMount(LandingInfo)
    const joinRoomBtn = wrapper.find('[data-test="joinRoomBtn"]')

    await joinRoomBtn.trigger('click')

    const input = wrapper.find('[data-test="nicknameInput"')
    const confirmJoiningBtn = wrapper.find('[data-test="confirmJoiningBtn"]')

    await confirmJoiningBtn.trigger('click')
    await input.setValue('')

    expect(input.attributes('error-messages')).toBe('Nickname is required')
  })
})
