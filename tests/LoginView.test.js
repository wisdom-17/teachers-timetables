import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'

test('mount LoginView component', async () => {
  expect(LoginView).toBeTruthy()

  const setupData = {
    auth: { email: '', password: '' },
    validation: { message: '', errors: { email: [], password: [] } },
    showErrorMessage: false,
    isLoading: false
  };

  const wrapper = mount(LoginView, {
    setup() {
      return setupData
    }
  })

  expect(wrapper.html()).toMatchSnapshot()
})