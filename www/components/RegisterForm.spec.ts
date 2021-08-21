import { shallowMount } from '@vue/test-utils'
import RegisterForm from './RegisterForm.vue'

describe('RegisterForm component', () => {
  it('Should be defined', () => {
    const wrapper = shallowMount(RegisterForm)
    expect(wrapper).toBeDefined()
  })

  it('Should not submit a form cause inputs are empty', async () => {
    const wrapper = shallowMount(RegisterForm)
    const button = wrapper.find('[data-test="submitBtn"]')

    await button.trigger('click')

    const error = wrapper.find('[data-test="nameInput"]')
    expect((error.attributes('error-messages') as string).split(',')[0]).toBe(
      'Name is required',
    )
  })

  it('Should not submit a form cause name is too short', async () => {
    const wrapper = shallowMount(RegisterForm, {
      data: () => ({
        user: {
          name: 'elo',
          pass: 'elo123E2dawed@',
        },
      }),
    })
    const button = wrapper.find('[data-test="submitBtn"]')

    await button.trigger('click')

    const error = wrapper.find('[data-test="nameInput"]')
    expect((error.attributes('error-messages') as string).split(',')[0]).toBe(
      'Name must contain more than 4 characters',
    )
  })

  it('Should submit a form with success', async () => {
    const wrapper = shallowMount(RegisterForm, {
      data: () => ({
        user: {
          name: 'elo23',
          email: 'email@email.com',
          pass: 'PassW0rd123WW',
        },
      }),
    })
    const button = wrapper.find('[data-test="submitBtn"]')

    await button.trigger('click')

    const error = wrapper.find('[data-test="nameInput"]')
    expect(error.attributes('error-messages')).toBe('')
  })
})
