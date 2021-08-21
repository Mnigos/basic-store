import { shallowMount } from '@vue/test-utils'
import LoginForm from './LoginForm.vue'

describe('LoginForm component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(LoginForm)
    expect(wrapper).toBeDefined()
  })

  xit('Should write a login', async () => {
    const wrapper = shallowMount(LoginForm)
    const input = wrapper.find('[data-test="nameOrEmailInput"]')
    await input.setValue('User123')

    expect(
      (
        wrapper.find('[data-test="nameOrEmailInput"]')
          .element as HTMLInputElement
      ).value,
    ).toBe('User123')
  })

  it('Should not submit a form cause inputs are empty', async () => {
    const wrapper = shallowMount(LoginForm)
    const button = wrapper.find('[data-test="submitBtn"]')

    await button.trigger('click')

    const error = wrapper.find('[data-test="nameOrEmailInput"]')
    expect(error.attributes('error-messages')).toBe('Name/Email is required')
  })

  it('Should submit a form with success', async () => {
    const wrapper = shallowMount(LoginForm, {
      data: () => ({
        credentials: {
          nameOrEmail: 'elo',
          pass: 'elo123',
        },
      }),
    })
    const button = wrapper.find('[data-test="submitBtn"]')

    await button.trigger('click')

    const error = wrapper.find('[data-test="nameOrEmailInput"]')
    expect(error.attributes('error-messages')).toBe('')
  })
})
