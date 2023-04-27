<template>
  <ErrorMessage
    :message="validation.message"
    v-show="showErrorMessage"
    @close="onClickClose"
  />
  <div class="card h-screen flex justify-content-center align-items-center">
    <form @keyup.enter="login">
      <div class="field mt-4 grid">
        <div class="col-12">
          <span class="p-float-label">
            <InputText
              id="email"
              :class="{ 'p-invalid': validation.errors.email.length > 0 }"
              class="p-inputtext-lg w-full"
              type="text"
              v-model="auth.email"
            />
            <label for="email">Email</label>
          </span>
        </div>
      </div>
      <small class="p-error">{{ validation.errors.email[0] }}</small>
      <div class="field mt-4 grid">
        <div class="col-12">
          <span class="p-float-label">
          <Password
            id="password"
            :class="{ 'p-invalid': validation.errors.password.length > 0 }"
            class="p-inputtext-lg w-full"
            v-model="auth.password"
            :feedback="false"
            toggleMask
          />
          <label for="password">Password</label>
          </span>
        </div>
      </div>
      <small class="p-error">{{ validation.errors.password[0] }}</small>
      <div class="field grid mt-4">
        <div class="col-12">
          <Button @click="login" label="Login" :loading="isLoading" class="w-full" />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import { useRoute } from 'vue-router'
import AuthService from '@/services/Auth'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'
import ErrorMessage from '@/components/ErrorMessage.vue'

const route = useRoute()
const storeAuth = useAuthStore()

const auth = ref({ email: '', password: '' })
const validation = ref({ message: '', errors: { email: [], password: [] } })
const showErrorMessage = ref(false)
const isLoading = ref(false)

const login = async () => {
  const payload = {
    email: auth.value.email,
    password: auth.value.password,
  }

  // clear validation errors
  validation.value.message = ''
  validation.value.errors = { email: [], password: [] }

  try {
    isLoading.value = true
    await AuthService.login(payload)
    await storeAuth.getAuthenticatedUserDetails()
    if (storeAuth.loggedInUser) {
      isLoading.value = false
      router.push(route.query.redirect || '/')
    }
  } catch (error) {
    isLoading.value = false
    validation.value.message = error.response.data.message
    // update validation error messages with ones
    // returned from API call
    validation.value.errors = {
      ...validation.value.errors,
      ...error.response.data.errors,
    }
    showErrorMessage.value = true
  }
}

const onClickClose = () => {
  validation.value.message = ''
  showErrorMessage.value = false
}
</script>
